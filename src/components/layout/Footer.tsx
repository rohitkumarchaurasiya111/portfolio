import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcon'
import { resumeUrl, socials } from '@/data/socials'

const iconMap = { github: GithubIcon, linkedin: LinkedinIcon, mail: Mail, phone: Phone }

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-40" aria-hidden="true" />

      <div className="mx-auto grid max-w-content gap-10 container-px py-14 sm:grid-cols-3 md:py-16">
        <div>
          <p className="font-mono text-small font-semibold text-ink">
            ROHIT<span className="text-accent-cyan">.</span>
          </p>
          <p className="mt-2 font-mono text-caption uppercase tracking-[0.14em] text-ink-muted">
            Software Engineer
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="eyebrow mb-3">Navigation</p>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(item.id)
                  }}
                  className="link-underline text-small text-ink-secondary hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-3">Connect</p>
          <ul className="space-y-2">
            {socials.map((s) => {
              const Icon = iconMap[s.icon]
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.icon !== 'mail' && s.icon !== 'phone' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-small text-ink-secondary transition-colors hover:text-ink"
                  >
                    <Icon size={15} />
                    {s.label}
                  </a>
                </li>
              )
            })}
            <li>
              <a
                href={resumeUrl}
                download
                className="text-small text-ink-secondary transition-colors hover:text-ink"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-content flex-col gap-2 border-t border-border container-px py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <p className="font-mono text-caption text-ink-muted">© 2026</p>
        <p className="font-mono text-caption text-ink-muted">Built with modern web technologies.</p>
      </div>
    </footer>
  )
}
