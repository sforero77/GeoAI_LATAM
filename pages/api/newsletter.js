// API Route para manejar suscripciones al newsletter
// Usa Vercel KV para almacenar los emails

import { kv } from '@vercel/kv'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email inválido' })
  }

  try {
    // Verificar si el email ya existe
    const exists = await kv.sismember('newsletter:emails', email.toLowerCase())

    if (exists) {
      return res.status(400).json({
        message: 'Este email ya está suscrito.'
      })
    }

    // Guardar el email en un Set de Redis
    await kv.sadd('newsletter:emails', email.toLowerCase())

    // Guardar metadata adicional (fecha de suscripción)
    await kv.hset(`newsletter:subscriber:${email.toLowerCase()}`, {
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
    })

    return res.status(200).json({
      message: '¡Gracias por suscribirte! Te mantendremos informado.'
    })

  } catch (error) {
    console.error('Newsletter error:', error)

    // Si KV no está configurado, loguear en desarrollo
    if (error.message?.includes('KV') || error.message?.includes('REDIS')) {
      console.log('Newsletter subscription (KV not configured):', email)
      return res.status(200).json({
        message: '¡Gracias por suscribirte!'
      })
    }

    return res.status(500).json({
      message: 'Error al procesar la suscripción. Intenta de nuevo.'
    })
  }
}
