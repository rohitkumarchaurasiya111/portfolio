import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center container-px text-center">
      <div className="pointer-events-none fixed inset-0 bg-grid-fade" aria-hidden="true" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-display font-semibold text-gradient"
      >
        404
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-sm text-body text-ink-secondary"
      >
        You found a route that doesn&rsquo;t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="mt-9 flex flex-col gap-3 xs:flex-row"
      >
        <Button href="/">Back Home</Button>
        <Button href="/#projects" variant="secondary">
          View Projects
        </Button>
      </motion.div>
    </main>
  )
}
