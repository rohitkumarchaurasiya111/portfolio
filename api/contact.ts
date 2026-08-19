import type { VercelRequest, VercelResponse } from '@vercel/node'

interface ContactPayload {
  name?: unknown
  email?: unknown
  subject?: unknown
  message?: unknown
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAX_FIELD_LENGTH = 5000

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

/** Escapes a value before it's interpolated into the plain-text email body. */
function sanitize(value: string): string {
  return value.replace(/[\r\n]+/g, ' ').slice(0, MAX_FIELD_LENGTH)
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  const body = req.body as ContactPayload
  const { name, email, subject, message } = body ?? {}

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(subject) ||
    !isNonEmptyString(message)
  ) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'That email address doesn\u2019t look valid.' })
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL
  // Must be a sender on a domain verified with Resend — defaults to Resend's
  // shared sandbox address, which only delivers to the account owner's own inbox.
  const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error('Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured.')
    return res.status(500).json({
      error: 'This form isn\u2019t configured yet on the server. Please email directly instead.',
    })
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Portfolio Contact Form <${CONTACT_FROM_EMAIL}>`,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${sanitize(subject)}`,
        text: `New message from the portfolio contact form.\n\nName: ${sanitize(name)}\nEmail: ${sanitize(email)}\n\n${sanitize(message)}`,
      }),
    })

    if (!resendRes.ok) {
      const errText = await resendRes.text()
      console.error('Resend API error:', resendRes.status, errText)
      return res.status(502).json({ error: 'Failed to send the message. Please try again shortly.' })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact handler error:', err)
    return res.status(500).json({ error: 'Unexpected server error. Please try again shortly.' })
  }
}
