import { Link } from 'react-router-dom'

export default function HeroBanner({ hero }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900 text-white">
      <img
        src={hero.image}
        alt="Department store hero promotion"
        className="h-[62vh] min-h-[420px] w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-6">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">
            {hero.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">{hero.title}</h1>
          <p className="mt-4 text-sm text-slate-100 sm:text-base">{hero.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={hero.ctaPrimary.href}
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900"
            >
              {hero.ctaPrimary.text}
            </Link>
            <Link
              to={hero.ctaSecondary.href}
              className="rounded-full border border-white px-5 py-2 text-sm font-semibold text-white"
            >
              {hero.ctaSecondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
