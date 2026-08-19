import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  className?: string
  tone?: 'default' | 'accent' | 'muted'
}

const tones = {
  default: 'border-border bg-elevated text-ink-secondary',
  accent: 'border-accent-blue/30 bg-accent-blue/10 text-accent-cyan',
  muted: 'border-border bg-transparent text-ink-muted',
}

export function Badge({ children, className, tone = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-caption',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
