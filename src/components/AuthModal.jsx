import { useMemo, useState } from 'react'

const initialForm = { email: '', password: '' }

export default function AuthModal({ isOpen, onClose, onAuthenticate }) {
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState(initialForm)
  const [error, setError] = useState('')
  const [statusMessage, setStatusMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const title = useMemo(() => (mode === 'signin' ? 'Sign in to your account' : 'Create your account'), [mode])

  if (!isOpen) return null

  function updateField(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
    setStatusMessage('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const result = onAuthenticate({ ...form, email: form.email.trim().toLowerCase() }, mode)

    if (!result.success) {
      setError(result.message)
      return
    }

    setError('')
    setStatusMessage(result.message)

    if (mode === 'signup') {
      setMode('signin')
      setForm({ email: form.email.trim().toLowerCase(), password: '' })
      return
    }

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
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="Email address"
            required
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
          />
          <div className="relative">
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={updateField}
              placeholder="Password"
              required
              className="w-full rounded-xl border border-slate-300 px-3 py-2 pr-12 text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3l18 18" />
                  <path d="M10.58 10.58A2 2 0 0 0 12 14a2 2 0 0 0 1.42-.58" />
                  <path d="M9.88 5.09A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 11 7-1 2.26-2.8 4.14-5 5.3" />
                  <path d="M6.61 6.61C4.62 7.9 3 9.79 2 12c1.73 3.89 6 7 10 7 1.66 0 3.22-.36 4.61-1.01" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          <button className="w-full rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {error && <p className="mt-3 text-sm font-medium text-rose-700">{error}</p>}
        {statusMessage && <p className="mt-3 text-sm font-medium text-emerald-700">{statusMessage}</p>}

        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          <p className="font-semibold text-slate-700">Testing tip</p>
          <p>Create any email/password in Sign Up, then use those same credentials in Sign In.</p>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">
          {mode === 'signin' ? 'No account yet?' : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin')
              setError('')
              setStatusMessage('')
            }}
            className="font-semibold text-slate-700 underline"
          >
            {mode === 'signin' ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  )
}
