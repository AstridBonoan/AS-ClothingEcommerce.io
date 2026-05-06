import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../data/storeData'

function linkStyle({ isActive }) {
  return `whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold tracking-wide transition sm:text-sm ${
    isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-200'
  }`
}

const accountLinks = [
  { label: 'Orders & returns', to: '/info/orders' },
  { label: 'Encore points & rewards', to: '/info/rewards' },
  { label: 'Gift cards', to: '/info/gift-cards' },
  { label: 'Find a store', to: '/info/stores' },
  { label: 'International shipping', to: '/info/international-shipping' },
]

export default function Navbar({ userName, onOpenAuth, onSignOut, cartCount }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const accountMenuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target)) {
        setIsAccountOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleAccountPrimaryAction() {
    if (!userName) onOpenAuth()
    else onSignOut()
    setIsAccountOpen(false)
  }

  function closeAllMenus() {
    setIsAccountOpen(false)
    setIsMobileNavOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-800 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="text-lg">☰</span>
          </button>
          <NavLink to="/" className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
            AS Department
          </NavLink>
        </div>
        <div ref={accountMenuRef} className="relative flex items-center gap-2">
          <button
            onClick={() => setIsAccountOpen((prev) => !prev)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-800"
            aria-label="Account menu"
          >
            <span className="text-lg">👤</span>
          </button>

          <Link
            to="/checkout"
            className="relative grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-800"
            aria-label="Shopping bag"
          >
            <span className="text-lg">🛍️</span>
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-slate-900 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {isAccountOpen && (
            <div className="absolute right-0 top-12 z-50 w-72 border border-slate-300 bg-white p-5 shadow-xl">
              <p className="text-[28px] font-black leading-none text-slate-900">{userName ? `Hi, ${userName}` : 'Join now'}</p>
              <p className="mt-3 text-sm text-slate-900">Free shipping on orders $50+ for Encore Members</p>
              <button
                onClick={handleAccountPrimaryAction}
                className="mt-4 w-full border border-slate-300 px-4 py-3 text-center text-2xl font-medium text-slate-900"
              >
                {userName ? 'Sign out' : 'Sign in or join now'}
              </button>
              <div className="mt-4 space-y-2 text-sm">
                <Link to="/info/account" onClick={() => setIsAccountOpen(false)} className="block text-slate-900">
                  My account
                </Link>
                {accountLinks.slice(0, 3).map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeAllMenus} className="block text-slate-900">
                    {item.label}
                  </Link>
                ))}
              </div>
              <hr className="my-4 border-slate-300" />
              <div className="space-y-2 text-sm">
                {accountLinks.slice(3).map((item) => (
                  <Link key={item.to} to={item.to} onClick={closeAllMenus} className="block text-slate-900">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
      <nav className="hidden border-t border-slate-100 md:block">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <NavLink key={item.slug} to={`/department/${item.slug}`} className={linkStyle} onClick={closeAllMenus}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {isMobileNavOpen && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.slug}
                to={`/department/${item.slug}`}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold ${
                    isActive ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'
                  }`
                }
                onClick={closeAllMenus}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
