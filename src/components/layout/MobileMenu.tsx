import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { resumeUrl, socials } from '@/data/socials'
import { cn } from '@/lib/utils'

interface NavItem {
  id: string
  label: string
}

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  items: NavItem[]
  active: string
  onNavigate: (id: string) => void
}

export function MobileMenu({ open, onClose, items, active, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex h-16 items-center justify-between container-px">
            <span className="font-mono text-small font-semibold text-ink">RKC<span className="text-accent-cyan">.</span></span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <nav className="flex flex-1 flex-col justify-center container-px">
            <ul className="flex flex-col gap-2">
              {items.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate(item.id)
                    }}
                    className={cn(
                      'block py-3 text-h2 font-medium transition-colors',
                      active === item.id ? 'text-gradient' : 'text-ink-secondary active:text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <Button href={resumeUrl} download variant="primary" size="md" className="w-full">
                Download Resume
              </Button>
              <div className="flex items-center gap-6 pt-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon !== 'mail' && s.icon !== 'phone' ? '_blank' : undefined}
                    rel="noreferrer"
                    className="font-mono text-small text-ink-muted transition-colors hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
