import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      <p className="eyebrow mb-4 flex items-center gap-2">
        <span
          className={cn(
            'h-px w-6 bg-gradient-to-r from-accent-blue to-accent-cyan',
            align === 'center' && 'hidden',
          )}
        />
        {eyebrow}
      </p>
      <h2 className="text-h2 font-semibold text-balance text-ink">{title}</h2>
      {description && (
        <p className="mt-4 max-w-xl text-body text-ink-secondary">{description}</p>
      )}
    </motion.div>
  )
}
