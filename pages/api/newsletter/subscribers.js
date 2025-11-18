// API Route para obtener la lista de suscriptores
// GET /api/newsletter/subscribers

import { kv } from '@vercel/kv'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  // Protección básica con API key (configura ADMIN_API_KEY en Vercel)
  const apiKey = req.headers['x-api-key']
  const adminKey = process.env.ADMIN_API_KEY

  if (adminKey && apiKey !== adminKey) {
    return res.status(401).json({ message: 'No autorizado' })
  }

  try {
    // Obtener todos los emails del Set
    const emails = await kv.smembers('newsletter:emails')

    // Obtener metadata de cada suscriptor
    const subscribers = await Promise.all(
      emails.map(async (email) => {
        const data = await kv.hgetall(`newsletter:subscriber:${email}`)
        return data || { email, subscribedAt: 'N/A' }
      })
    )

    // Ordenar por fecha de suscripción (más recientes primero)
    subscribers.sort((a, b) =>
      new Date(b.subscribedAt) - new Date(a.subscribedAt)
    )

    return res.status(200).json({
      total: subscribers.length,
      subscribers
    })

  } catch (error) {
    console.error('Error fetching subscribers:', error)
    return res.status(500).json({
      message: 'Error al obtener suscriptores'
    })
  }
}
