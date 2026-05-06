import { Link, useOutletContext, useParams } from 'react-router-dom'
import { departmentContent, departments, supplementalProducts } from '../data/storeData'

export default function DepartmentPage() {
  const { slug } = useParams()
  const { addToCart } = useOutletContext()
  const department = departments.find((item) => item.slug === slug)
  const content = departmentContent[slug] ?? {
    spotlight: 'Seasonal Essentials',
    categories: ['New Arrivals'],
    products: [],
  }
  const extendedProducts = [...content.products, ...supplementalProducts]

  if (!department) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-2xl font-black text-slate-900">Department not found</h1>
        <Link to="/" className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 text-white">
          Back to home
        </Link>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <img src={department.image} alt={department.name} className="h-56 w-full object-cover sm:h-80" />
        <div className="space-y-4 p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-rose-700">
            {department.name} Department
          </p>
          <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">Welcome to {department.name}</h1>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            {department.blurb} Discover featured assortments, curated picks, and quick links for faster shopping.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
              Shop Best Sellers
            </button>
            <button className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-800">
              New Arrivals
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Spotlight</h2>
          <p className="mt-2 text-sm text-slate-600">{content.spotlight}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {category}
              </span>
            ))}
          </div>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h2 className="text-lg font-bold text-slate-900">In-Store Services</h2>
          <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <li>Buy online, pick up same day</li>
            <li>Easy returns at store or mail</li>
            <li>Personal styling appointments</li>
            <li>Rewards points on every order</li>
          </ul>
        </article>
      </div>

      <div className="mt-6">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Top Picks in {department.name}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {extendedProducts.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
              <div className="space-y-2 p-4">
                <h3 className="font-semibold text-slate-900">{product.name}</h3>
                <p className="text-sm text-slate-600">{product.price}</p>
                <button
                  onClick={() => addToCart(product, slug)}
                  className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
                >
                  Add to Bag
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Seasonal Highlights</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Weekly drops every Tuesday and Friday</li>
            <li>Member-exclusive promo codes every weekend</li>
            <li>Bundle pricing when you buy 2+ essentials</li>
          </ul>
          <Link to="/info/rewards" className="mt-4 inline-block text-sm font-semibold text-slate-800 underline">
            View member perks
          </Link>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-900">Ready to Checkout?</h2>
          <p className="mt-3 text-sm text-slate-600">
            Review your bag, adjust quantities, and complete your order from one streamlined checkout screen.
          </p>
          <Link to="/checkout" className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            Go to Checkout
          </Link>
        </article>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-bold text-slate-900">Free shipping over $50</h3>
          <p className="mt-2 text-sm text-slate-600">Get no-rush shipping on qualifying orders and member carts.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-bold text-slate-900">Easy 30-day returns</h3>
          <p className="mt-2 text-sm text-slate-600">Return in store or by mail with prepaid labels and tracking.</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="text-base font-bold text-slate-900">Member rewards</h3>
          <p className="mt-2 text-sm text-slate-600">Earn points for every purchase and unlock exclusive deals.</p>
        </article>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-bold text-slate-900">Popular Searches in {department.name}</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            `${department.name} new arrivals`,
            `${department.name} best sellers`,
            `${department.name} under $25`,
            `${department.name} gift ideas`,
            `${department.name} clearance`,
            `${department.name} essentials`,
          ].map((term) => (
            <button
              key={term}
              className="rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              {term}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
