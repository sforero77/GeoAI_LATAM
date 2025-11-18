// API Route para manejar suscripciones al newsletter
// Configura tu proveedor en data/site.js

import { siteConfig } from '../../data/site'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Email inválido' })
  }

  const { provider, buttondownUsername, mailchimpAudienceId } = siteConfig.newsletter

  try {
    // ==================== BUTTONDOWN ====================
    if (provider === 'buttondown' && buttondownUsername) {
      // Buttondown ofrece una API simple y gratuita
      // Docs: https://api.buttondown.email/v1/docs

      const API_KEY = process.env.BUTTONDOWN_API_KEY

      if (!API_KEY) {
        console.warn('BUTTONDOWN_API_KEY no configurada. Guardando email localmente.')
        // En desarrollo, solo loguea el email
        console.log('Newsletter subscription:', email)
        return res.status(200).json({
          message: '¡Gracias por suscribirte! Te mantendremos informado.'
        })
      }

      const response = await fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          tags: ['geoai-latam-website'],
        }),
      })

      if (response.ok) {
        return res.status(200).json({
          message: '¡Gracias por suscribirte! Revisa tu email para confirmar.'
        })
      }

      const data = await response.json()

      if (response.status === 400 && data.email) {
        return res.status(400).json({
          message: 'Este email ya está suscrito.'
        })
      }

      throw new Error(data.detail || 'Error al suscribir')
    }

    // ==================== MAILCHIMP ====================
    if (provider === 'mailchimp' && mailchimpAudienceId) {
      const API_KEY = process.env.MAILCHIMP_API_KEY
      const DC = API_KEY?.split('-')[1] // Data center from API key

      if (!API_KEY) {
        console.warn('MAILCHIMP_API_KEY no configurada')
        return res.status(200).json({
          message: '¡Gracias por tu interés! Pronto te contactaremos.'
        })
      }

      const response = await fetch(
        `https://${DC}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`,
        {
          method: 'POST',
          headers: {
            'Authorization': `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email_address: email,
            status: 'pending', // Double opt-in
          }),
        }
      )

      if (response.ok) {
        return res.status(200).json({
          message: '¡Gracias! Revisa tu email para confirmar la suscripción.'
        })
      }

      const data = await response.json()

      if (data.title === 'Member Exists') {
        return res.status(400).json({
          message: 'Este email ya está suscrito.'
        })
      }

      throw new Error(data.detail || 'Error al suscribir')
    }

    // ==================== RESEND ====================
    if (provider === 'resend') {
      const API_KEY = process.env.RESEND_API_KEY
      const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID

      if (!API_KEY || !AUDIENCE_ID) {
        console.warn('RESEND_API_KEY o RESEND_AUDIENCE_ID no configurados')
        return res.status(200).json({
          message: '¡Gracias por tu interés!'
        })
      }

      const response = await fetch(
        `https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        }
      )

      if (response.ok) {
        return res.status(200).json({
          message: '¡Gracias por suscribirte!'
        })
      }

      throw new Error('Error al suscribir con Resend')
    }

    // ==================== DEFAULT (Development) ====================
    // Sin proveedor configurado, solo loguea
    console.log('Newsletter subscription (no provider):', email)
    return res.status(200).json({
      message: '¡Gracias por tu interés! Te contactaremos pronto.'
    })

  } catch (error) {
    console.error('Newsletter error:', error)
    return res.status(500).json({
      message: 'Error al procesar la suscripción. Intenta de nuevo.'
    })
  }
}
