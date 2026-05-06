import { Link, useParams } from 'react-router-dom'

const topicMap = {
  account: { title: 'My Account', description: 'Manage profile details, addresses, and payment preferences.' },
  orders: { title: 'Orders & Returns', description: 'Track current orders and start returns in one place.' },
  rewards: { title: 'Encore Points & Rewards', description: 'View points, redeem offers, and unlock bonus events.' },
  'gift-cards': { title: 'Gift Cards', description: 'Send digital cards or check your gift card balance.' },
  stores: { title: 'Find a Store', description: 'Search nearby stores for pickup availability and local events.' },
  'international-shipping': { title: 'International Shipping', description: 'Review countries, timelines, and customs details.' },
}

export default function InfoPage() {
  const { topic } = useParams()
  const content = topicMap[topic] ?? { title: 'Info', description: 'More details coming soon.' }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <h1 className="text-3xl font-black text-slate-900">{content.title}</h1>
      <p className="mt-3 max-w-2xl text-slate-600">{content.description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Quick Actions</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Update preferences</li>
            <li>Contact support</li>
            <li>Check latest policy updates</li>
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="font-bold text-slate-900">Need help?</h2>
          <p className="mt-3 text-sm text-slate-600">Customer support is available daily from 8AM to 10PM.</p>
          <Link to="/" className="mt-3 inline-block text-sm font-semibold text-slate-800 underline">
            Return to home
          </Link>
        </article>
      </div>
    </section>
  )
}
