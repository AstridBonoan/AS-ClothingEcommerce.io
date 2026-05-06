import { Link } from 'react-router-dom'

export default function PromoGrid({ tiles }) {
  return (
    <section className="mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Trending Promotions</h2>
        <Link to="/department/sale" className="text-sm font-semibold text-slate-700 underline">
          View all deals
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            to={tile.href}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative h-48 sm:h-56">
              <img
                src={tile.image}
                alt={tile.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{tile.title}</h3>
                <p className="text-sm text-slate-100">{tile.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
