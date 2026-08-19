import { useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Copy, Loader2, Send } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Toast } from '@/components/ui/Toast'
import { socials } from '@/data/socials'
import { copyToClipboard } from '@/lib/utils'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const CONTACT_ENDPOINT = (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) || '/api/contact'
const emailSocial = socials.find((s) => s.icon === 'mail')
const emailAddress = emailSocial?.href.replace('mailto:', '') ?? ''
const phoneSocial = socials.find((s) => s.icon === 'phone')

export function Contact() {
  const nameRef = useRef<HTMLInputElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [copyToast, setCopyToast] = useState<string | null>(null)

  async function handleCopyEmail() {
    const ok = await copyToClipboard(emailAddress)
    setCopyToast(ok ? 'Copied!' : 'Could not copy')
    setTimeout(() => setCopyToast(null), 2000)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    }

    setFormState('loading')
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error || `Request failed with ${res.status}`)
      }

      setFormState('success')
      form.reset()
    } catch (err) {
      setFormState('error')
      setErrorMessage(
        err instanceof Error && err.message
          ? err.message
          : `Something went wrong sending that. Please try again or email ${emailAddress} directly.`,
      )
    }
  }

  return (
    <section id="contact" className="section">
      <div className="card-surface relative overflow-hidden rounded-lg px-6 py-14 md:px-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden="true" />

        <div className="relative mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something meaningful."
              description="Have an idea, product or engineering challenge? Let's talk."
              align="center"
              className="mb-8"
            />

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => nameRef.current?.focus()} showArrow>
                Start a Conversation
              </Button>
              <Button onClick={handleCopyEmail} aria-label="Copy email address" variant="secondary">
                Email Me
              </Button>
              {phoneSocial && (
                <Button href={phoneSocial.href} variant="secondary">
                  Call Me
                </Button>
              )}
              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-border text-ink-secondary transition-colors hover:text-ink"
              >
                <Copy size={16} />
              </button>
            </div>
            <div className="mt-3 flex justify-center">
              <Toast message={copyToast} />
            </div>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-12 grid grid-cols-1 max-w-2xl gap-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" htmlFor="name">
              <input
                ref={nameRef}
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="input"
                placeholder="you@company.com"
              />
            </Field>
          </div>

          <Field label="Subject" htmlFor="subject">
            <input
              id="subject"
              name="subject"
              type="text"
              required
              className="input"
              placeholder="What's this about?"
            />
          </Field>

          <Field label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="input resize-none"
              placeholder="Tell me a bit about the project or opportunity."
            />
          </Field>

          <div className="mt-2 flex flex-col items-center gap-4">
            <Button type="submit" disabled={formState === 'loading'} className="w-full sm:w-auto">
              {formState === 'loading' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </Button>

            {formState === 'success' && (
              <p role="status" className="text-small text-signal-green">
                Message sent — thanks for reaching out. I&rsquo;ll reply as soon as I can.
              </p>
            )}
            {formState === 'error' && (
              <p role="alert" className="max-w-md text-center text-small text-signal-red">
                {errorMessage}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div className="text-left">
      <label htmlFor={htmlFor} className="mb-2 block font-mono text-caption text-ink-muted">
        {label}
      </label>
      {children}
    </div>
  )
}
