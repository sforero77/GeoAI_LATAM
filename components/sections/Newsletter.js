import { useState } from 'react'
import { SectionTitle } from '../ui'

export const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setStatus('error')
      setMessage('Por favor ingresa tu email')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || '¡Gracias por suscribirte!')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Error al suscribirse')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Error de conexión. Intenta de nuevo.')
    }
  }

  return (
    <section id="newsletter" className="mx-auto max-w-3xl px-4 pb-20 md:px-8">
      <SectionTitle
        kicker="Newsletter"
        title="No te pierdas nada"
        subtitle="Tutoriales, proyectos y recursos GeoAI cada dos semanas"
      />

      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-xl flex-col items-center gap-3 md:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          disabled={status === 'loading'}
          className="w-full flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-geo-green px-6 py-3 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition disabled:opacity-50"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
        </button>
      </form>

      {message && (
        <p
          className={`mt-3 text-center text-sm ${
            status === 'success' ? 'text-geo-green' : 'text-red-400'
          }`}
        >
          {message}
        </p>
      )}

      {status === 'idle' && (
        <p className="mt-3 text-center text-xs text-white/60">
          Sin spam. Solo contenido de valor.
        </p>
      )}
    </section>
  )
}

export default Newsletter
