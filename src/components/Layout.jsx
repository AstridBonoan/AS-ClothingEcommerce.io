import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import AuthModal from './AuthModal'

export default function Layout() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedName = window.localStorage.getItem('as-shop-user')
    const savedCart = window.localStorage.getItem('as-shop-cart')
    if (savedName) setUserName(savedName)
    if (savedCart) setCartItems(JSON.parse(savedCart))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('as-shop-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function handleSignIn(name) {
    setUserName(name)
    window.localStorage.setItem('as-shop-user', name)
    setIsAuthOpen(false)
  }

  function handleSignOut() {
    setUserName('')
    window.localStorage.removeItem('as-shop-user')
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
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onSignIn={handleSignIn} />
    </div>
  )
}
