import { Link } from 'react-router-dom'

export default function DepartmentGrid({ items }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12">
      <h2 className="mb-4 text-xl font-bold text-slate-900 sm:mb-6 sm:text-2xl">
        Shop By Department
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Link
            key={item.slug}
            to={`/department/${item.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="space-y-2 p-4">
              <h3 className="text-base font-bold text-slate-900">{item.name}</h3>
              <p className="text-sm text-slate-600">{item.blurb}</p>
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                Shop now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
