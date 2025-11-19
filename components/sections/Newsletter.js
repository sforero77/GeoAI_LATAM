import { useState } from 'react'
import { SectionTitle } from '../ui'

export const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    profesion: '',
    intereses: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.email) {
      setStatus('error')
      setMessage('Por favor ingresa tu email')
      return
    }

    if (!formData.nombre) {
      setStatus('error')
      setMessage('Por favor ingresa tu nombre')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message || '¡Gracias por suscribirte!')
        setFormData({ email: '', nombre: '', profesion: '', intereses: '' })
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
        className="mx-auto flex max-w-xl flex-col gap-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Tu nombre *"
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur disabled:opacity-50"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com *"
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur disabled:opacity-50"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            name="profesion"
            value={formData.profesion}
            onChange={handleChange}
            placeholder="Profesión (opcional)"
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur disabled:opacity-50"
          />
          <input
            type="text"
            name="intereses"
            value={formData.intereses}
            onChange={handleChange}
            placeholder="Intereses en GeoAI (opcional)"
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-geo-green backdrop-blur disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="mx-auto rounded-full bg-geo-green px-8 py-3 text-sm font-semibold text-geo-dark hover:bg-geo-green-light transition disabled:opacity-50"
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
