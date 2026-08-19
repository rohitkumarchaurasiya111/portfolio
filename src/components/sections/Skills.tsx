import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TechIcon } from '@/components/ui/TechIcon'
import { skills, skillCategories, type SkillCategory } from '@/data/skills'
import { cn } from '@/lib/utils'

export function Skills() {
  const [active, setActive] = useState<SkillCategory | 'All'>('All')

  const visible = active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Tech Stack"
        title="A toolkit built for shipping, not showing off."
        description="Technologies I reach for daily, organized by where they sit in the stack."
      />

      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {(['All', ...skillCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 font-mono text-caption uppercase tracking-wide transition-colors duration-300',
              active === cat
                ? 'border-accent-blue/40 bg-accent-blue/10 text-accent-cyan'
                : 'border-border bg-card text-ink-secondary hover:text-ink',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.ul
        layout
        className="grid grid-cols-2 gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((skill) => (
            <motion.li
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col items-center gap-2.5 overflow-hidden rounded-md border border-border bg-card px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-glow"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    'radial-gradient(120px 80px at 50% 0%, rgb(var(--color-accent-blue) / 0.12), transparent)',
                }}
                aria-hidden="true"
              />
              <TechIcon
                iconKey={skill.iconKey}
                name={skill.name}
                className="relative h-7 w-7 text-ink-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-accent-cyan"
              />
              <span className="relative text-small text-ink-secondary transition-colors duration-300 group-hover:text-ink">
                {skill.name}
              </span>
              <span className="relative font-mono text-[10px] leading-tight text-ink-muted">
                {skill.blurb}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  )
}
