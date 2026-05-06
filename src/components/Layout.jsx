import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AuthModal from './AuthModal'

const ACCOUNTS_STORAGE_KEY = 'as-shop-accounts'
const USER_STORAGE_KEY = 'as-shop-user'

export default function Layout() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [accounts, setAccounts] = useState([])

  useEffect(() => {
    const savedName = window.localStorage.getItem(USER_STORAGE_KEY)
    const savedCart = window.localStorage.getItem('as-shop-cart')
    const savedAccounts = window.localStorage.getItem(ACCOUNTS_STORAGE_KEY)
    const parsedAccounts = savedAccounts ? JSON.parse(savedAccounts) : []

    if (savedName) setUserName(savedName)
    if (savedCart) setCartItems(JSON.parse(savedCart))
    setAccounts(parsedAccounts)
    window.localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(parsedAccounts))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('as-shop-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function handleSignOut() {
    setUserName('')
    window.localStorage.removeItem(USER_STORAGE_KEY)
  }

  function handleAuthenticate(form, mode) {
    const account = accounts.find((item) => item.email === form.email)

    if (mode === 'signup') {
      if (account) {
        return { success: false, message: 'This email is already registered. Please sign in.' }
      }
      const updatedAccounts = [...accounts, { email: form.email, password: form.password }]
      setAccounts(updatedAccounts)
      window.localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(updatedAccounts))
      return {
        success: true,
        message: 'Account created. Please sign in with your new email and password.',
      }
    }

    if (!account || account.password !== form.password) {
      return { success: false, message: 'Invalid email or password. Please try again.' }
    }

    const displayName = form.email.split('@')[0]
    setUserName(displayName)
    window.localStorage.setItem(USER_STORAGE_KEY, displayName)
    setIsAuthOpen(false)
    return { success: true, message: 'Signed in successfully.' }
  }

  function addToCart(product, departmentSlug) {
    setCartItems((prev) => {
      const key = `${departmentSlug}-${product.name}`
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item))
      }
      return [...prev, { ...product, key, qty: 1, departmentSlug }]
    })
  }

  function updateCartQty(key, qty) {
    setCartItems((prev) => prev.map((item) => (item.key === key ? { ...item, qty } : item)))
  }

  function removeFromCart(key) {
    setCartItems((prev) => prev.filter((item) => item.key !== key))
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        userName={userName}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSignOut={handleSignOut}
        cartCount={cartCount}
      />
      <main>
        <Outlet context={{ addToCart, cartItems, updateCartQty, removeFromCart, clearCart, cartCount }} />
      </main>
      <Footer />
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthenticate={handleAuthenticate}
      />
    </div>
  )
}
