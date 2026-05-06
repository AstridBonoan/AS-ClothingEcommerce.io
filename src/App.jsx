import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DepartmentPage from './pages/DepartmentPage'
import CheckoutPage from './pages/CheckoutPage'
import InfoPage from './pages/InfoPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/department/:slug" element={<DepartmentPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/info/:topic" element={<InfoPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
