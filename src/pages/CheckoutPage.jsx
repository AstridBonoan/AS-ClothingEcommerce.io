import { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

function parsePrice(price) {
  return Number(price.replace('$', ''))
}

export default function CheckoutPage() {
  const { cartItems, updateCartQty, removeFromCart, cartCount, clearCart } = useOutletContext()
  const [billing, setBilling] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    expiry: '',
    cvc: '',
  })
  const [paymentState, setPaymentState] = useState({ type: '', message: '' })
  const subtotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0)
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 7.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  function updateField(event) {
    const { name, value } = event.target
    let nextValue = value

    if (name === 'cardNumber') {
      nextValue = value.replace(/\D/g, '').slice(0, 16)
    }
    if (name === 'expiry') {
      const cleaned = value.replace(/\D/g, '').slice(0, 4)
      nextValue = cleaned.length > 2 ? `${cleaned.slice(0, 2)}/${cleaned.slice(2)}` : cleaned
    }
    if (name === 'cvc') {
      nextValue = value.replace(/\D/g, '').slice(0, 4)
    }

    setBilling((prev) => ({ ...prev, [name]: nextValue }))
    if (paymentState.message) setPaymentState({ type: '', message: '' })
  }

  function handlePayment(event) {
    event.preventDefault()
    const requiredFields = ['email', 'fullName', 'address', 'city', 'state', 'zip', 'cardNumber', 'expiry', 'cvc']
    const missingField = requiredFields.find((field) => !billing[field].trim())

    if (missingField) {
      setPaymentState({ type: 'error', message: 'Please complete all billing and card fields.' })
      return
    }

    if (billing.cardNumber !== '4242424242424242') {
      setPaymentState({
        type: 'error',
        message: 'Use Stripe demo card 4242 4242 4242 4242 for test checkout.',
      })
      return
    }

    setPaymentState({ type: 'success', message: 'Payment successful. Your order is confirmed.' })
    clearCart()
  }

  if (!cartCount) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black text-slate-900">
          {paymentState.type === 'success' ? 'Order Confirmed' : 'Your bag is empty'}
        </h1>
        <p className={`mt-2 ${paymentState.type === 'success' ? 'text-emerald-700 font-medium' : 'text-slate-600'}`}>
          {paymentState.type === 'success'
            ? paymentState.message
            : 'Add a few favorites from any department to begin checkout.'}
        </p>
        {paymentState.type === 'success' && (
          <p className="mt-2 text-sm text-slate-600">
            Confirmation details have been sent to your billing email.
          </p>
        )}
        <Link to="/" className="mt-5 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
          {paymentState.type === 'success' ? 'Continue Shopping' : 'Start Shopping'}
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <h1 className="text-3xl font-black text-slate-900">Checkout</h1>
        {cartItems.map((item) => (
          <article key={item.key} className="rounded-2xl border border-slate-200 bg-white p-4 sm:flex sm:gap-4">
            <img src={item.image} alt={item.name} className="h-28 w-full rounded-xl object-cover sm:w-28" />
            <div className="mt-3 flex-1 space-y-2 sm:mt-0">
              <h2 className="font-semibold text-slate-900">{item.name}</h2>
              <p className="text-sm text-slate-600">{item.price}</p>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => updateCartQty(item.key, Math.max(1, item.qty - 1))}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold"
                >
                  -
                </button>
                <span className="text-sm font-semibold">Qty {item.qty}</span>
                <button
                  onClick={() => updateCartQty(item.key, item.qty + 1)}
                  className="rounded-full border border-slate-300 px-3 py-1 text-xs font-semibold"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.key)}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-rose-700 underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">Order Summary</h2>
        <div className="mt-4 space-y-2 text-sm text-slate-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-slate-200 pt-2 font-bold text-slate-900">
            <div className="flex justify-between">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <form onSubmit={handlePayment} className="mt-5 space-y-3 border-t border-slate-200 pt-4">
          <h3 className="text-base font-bold text-slate-900">Billing Information</h3>
          <input
            name="email"
            type="email"
            value={billing.email}
            onChange={updateField}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="fullName"
            value={billing.fullName}
            onChange={updateField}
            placeholder="Full name"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="address"
            value={billing.address}
            onChange={updateField}
            placeholder="Address"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              name="city"
              value={billing.city}
              onChange={updateField}
              placeholder="City"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              name="state"
              value={billing.state}
              onChange={updateField}
              placeholder="State"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <input
              name="zip"
              value={billing.zip}
              onChange={updateField}
              placeholder="ZIP"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              name="country"
              value={billing.country}
              onChange={updateField}
              placeholder="Country"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <h3 className="pt-1 text-base font-bold text-slate-900">Card Details</h3>
          <input
            name="cardNumber"
            value={billing.cardNumber}
            onChange={updateField}
            placeholder="Card number"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              name="expiry"
              value={billing.expiry}
              onChange={updateField}
              placeholder="MM/YY"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
            <input
              name="cvc"
              value={billing.cvc}
              onChange={updateField}
              placeholder="CVC"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
            <p className="font-semibold text-slate-700">Stripe demo card</p>
            <p>Card: 4242 4242 4242 4242</p>
            <p>Exp: any future date (e.g., 12/34)</p>
            <p>CVC: any 3 digits (e.g., 123)</p>
          </div>

          {paymentState.message && (
            <p className={`text-sm font-medium ${paymentState.type === 'error' ? 'text-rose-700' : 'text-emerald-700'}`}>
              {paymentState.message}
            </p>
          )}

          <button type="submit" className="w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            Pay ${total.toFixed(2)}
          </button>
        </form>
      </aside>
    </section>
  )
}
