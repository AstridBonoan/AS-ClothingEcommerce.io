import { Link, useOutletContext } from 'react-router-dom'

function parsePrice(price) {
  return Number(price.replace('$', ''))
}

export default function CheckoutPage() {
  const { cartItems, updateCartQty, removeFromCart, cartCount, clearCart } = useOutletContext()
  const subtotal = cartItems.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0)
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 7.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (!cartCount) {
    return (
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h1 className="text-3xl font-black text-slate-900">Your bag is empty</h1>
        <p className="mt-2 text-slate-600">Add a few favorites from any department to begin checkout.</p>
        <Link to="/" className="mt-5 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
          Continue Shopping
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
        <button
          onClick={clearCart}
          className="mt-5 w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
        >
          Place Order
        </button>
        <p className="mt-3 text-xs text-slate-500">
          Next step: connect this action to your Render endpoint that creates a Stripe checkout session.
        </p>
      </aside>
    </section>
  )
}
