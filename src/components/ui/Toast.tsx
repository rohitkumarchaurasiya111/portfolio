import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

interface ToastProps {
  message: string | null
  tone?: 'success' | 'error'
}

export function Toast({ message, tone = 'success' }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.96 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-elevated px-3.5 py-1.5 font-mono text-caption text-ink shadow-card"
        >
          {tone === 'success' ? (
            <CheckCircle2 size={14} className="text-signal-green" />
          ) : (
            <XCircle size={14} className="text-signal-red" />
          )}
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
