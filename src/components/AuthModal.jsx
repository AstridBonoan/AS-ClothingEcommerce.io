import { useMemo, useState } from 'react'

const initialForm = { name: '', email: '', password: '' }

export default function AuthModal({ isOpen, onClose, onSignIn }) {
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState(initialForm)

  const title = useMemo(() => (mode === 'signin' ? 'Sign in to your account' : 'Create your account'), [mode])

  if (!isOpen) return null

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const displayName = mode === 'signup' ? form.name.trim() || 'New Shopper' : form.email.split('@')[0]
    onSignIn(displayName)
    setForm(initialForm)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700"
          >
            Close
          </button>
        </div>

        <div className="mb-4 flex rounded-full bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setMode('signin')}
            className={`w-1/2 rounded-full py-2 text-sm font-semibold ${
              mode === 'signin' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setMode('signup')}
            className={`w-1/2 rounded-full py-2 text-sm font-semibold ${
              mode === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          {mode === 'signup' && (
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Full name"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          )}
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="Email address"
            required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={updateField}
            placeholder="Password"
            required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <button className="w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-500">
          {mode === 'signin' ? 'No account yet?' : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="font-semibold text-slate-700 underline"
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}
