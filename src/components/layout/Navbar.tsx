import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { resumeUrl } from '@/data/socials'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(id: string) {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:px-6 md:pt-4">
        <nav
          className={cn(
            'flex h-14 w-full max-w-content items-center justify-between rounded-2xl border px-4 transition-all duration-500 ease-premium md:h-16 md:px-5',
            scrolled
              ? 'border-border bg-bg/70 shadow-card backdrop-blur-xl'
              : 'border-transparent bg-transparent',
          )}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
            className="font-mono text-small font-semibold tracking-tight text-ink"
            aria-label="Rohit Kumar Chaurasiya — back to top"
          >
            RKC<span className="text-accent-cyan">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                  }}
                  className={cn(
                    'relative block rounded-full px-4 py-2 text-small transition-colors duration-300',
                    active === item.id ? 'text-ink' : 'text-ink-secondary hover:text-ink',
                  )}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-3 -bottom-[1px] h-px bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-violet"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button href={resumeUrl} download variant="secondary" size="sm">
                Download Resume
              </Button>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink md:hidden"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={18} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={NAV_ITEMS}
        active={active}
        onNavigate={handleNavClick}
      />
    </>
  )
}
