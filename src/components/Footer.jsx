export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-600 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <p>AS Department Store · Build 2026-05-06-2</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-900">
            Customer Service
          </a>
          <a href="#" className="hover:text-slate-900">
            Orders
          </a>
          <a href="#" className="hover:text-slate-900">
            Rewards
          </a>
        </div>
      </div>
    </footer>
  )
}
