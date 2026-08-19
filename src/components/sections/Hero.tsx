import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { HeroPhotoCard } from '@/components/sections/HeroPhotoCard'
import { HeroBackground } from '@/components/sections/HeroBackground'
import { socials } from '@/data/socials'

const HIGHLIGHT_STACK = ['React', 'Java', 'Spring Boot', 'MySQL', 'Python']

const githubHref = socials.find((s) => s.icon === 'github')?.href ?? '#'

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 md:pt-16"
    >
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-1 items-center gap-14 container-px py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10 md:py-20">
        <div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
            </span>
            <span className="font-mono text-caption uppercase tracking-[0.14em] text-ink-secondary">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-display font-semibold text-balance text-ink"
          >
            Hi, I&rsquo;m Rohit Kumar Chaurasiya —{' '}
            <span className="text-gradient">Software Engineer.</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 font-mono text-small uppercase tracking-[0.12em] text-accent-cyan"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-body text-ink-secondary"
          >
            First-year M.Tech Computer Science and Engineering student at IIT Madras with hands-on experience in full-stack development through internships and projects — building scalable backend systems, working with relational databases, and developing production-ready web applications.

          </motion.p>

          <motion.ul
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {HIGHLIGHT_STACK.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-small text-ink-secondary"
              >
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-3 xs:flex-row xs:items-center"
          >
            <Button onClick={() => scrollTo('projects')} showArrow className="w-full xs:w-auto">
              View Projects
            </Button>
            <Button
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="w-full xs:w-auto"
            >
              GitHub
            </Button>
            <Button
              onClick={() => scrollTo('contact')}
              variant="secondary"
              showArrow
              className="w-full xs:w-auto"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={reduceMotion ? undefined : 'animate-float'}
        >
          <HeroPhotoCard />
        </motion.div>
      </div>
    </section>
  )
}