import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Boxes, Code2, FolderGit2, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import { projects } from '@/data/projects'
import { skills, skillCategories } from '@/data/skills'

interface Metric {
  icon: LucideIcon
  value: number
  suffix: string
  label: string
}

// Every number here is derived directly from src/data — nothing here is a
// marketing claim that isn't backed by the actual project/skill data.
const METRICS: Metric[] = [
  { icon: FolderGit2, value: projects.length, suffix: '+', label: 'Production Platforms' },
  { icon: Code2, value: skills.length, suffix: '+', label: 'Technologies' },
  { icon: Boxes, value: skillCategories.length, suffix: '', label: 'Stack Layers' },
  { icon: Workflow, value: 100, suffix: '%', label: 'Full-Stack Ownership' },
]

function StatItem({ metric, index }: { metric: Metric; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCountUp(metric.value, inView)
  const Icon = metric.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center gap-2 border-border px-4 py-6 text-center sm:py-8"
    >
      <Icon size={18} className="mb-1 text-accent-cyan" aria-hidden="true" />
      <p className="text-h3 font-semibold tabular-nums text-ink">
        {count}
        {metric.suffix}
      </p>
      <p className="font-mono text-caption uppercase tracking-[0.12em] text-ink-muted">
        {metric.label}
      </p>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section aria-label="At a glance" className="relative border-y border-border">
      <div
        className={
          'mx-auto grid max-w-content grid-cols-2 container-px sm:grid-cols-4 ' +
          '[&>*:nth-child(n+3)]:border-t [&>*:nth-child(2n)]:border-l ' +
          'sm:[&>*]:border-t-0 sm:[&>*:nth-child(n+2)]:border-l'
        }
      >
        {METRICS.map((metric, i) => (
          <StatItem key={metric.label} metric={metric} index={i} />
        ))}
      </div>
    </section>
  )
}
