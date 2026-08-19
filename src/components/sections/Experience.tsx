import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { experience } from '@/data/experience'
import { education } from '@/data/education'

export function Experience() {
  const timelineRef = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 60%'],
  })
  const fillHeight = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow="Experience" title="Where the work has happened." />

      <ol ref={timelineRef} className="relative pl-8 md:pl-10">
        {/* base track */}
        <span className="absolute inset-y-0 left-0 w-px bg-border" aria-hidden="true" />
        {/* illuminated fill that grows as the section scrolls into view */}
        <motion.span
          className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-cyan to-accent-violet"
          style={{ scaleY: fillHeight, height: '100%' }}
          aria-hidden="true"
        />

        {experience.map((item, i) => (
          <motion.li
            key={item.role + item.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[calc(2rem+3.5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent-cyan bg-bg shadow-glow md:-left-[calc(2.5rem+3.5px)]" />

            <div className="mb-1.5 flex flex-wrap items-center gap-2">
              {item.period ? (
                <span className="font-mono text-caption text-ink-muted">{item.period}</span>
              ) : (
                <span className="rounded border border-dashed border-border font-mono text-caption text-ink-muted px-2 py-0.5">
                  add dates
                </span>
              )}
              {item.current && (
                <Badge tone="accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
                  Current
                </Badge>
              )}
            </div>

            <h3 className="font-semibold text-ink">{item.role}</h3>
            <p className="text-small text-ink-secondary">
              {item.org} <span className="text-ink-muted">— {item.location}</span>
            </p>
            <p className="mt-3 max-w-2xl text-small text-ink-secondary">{item.summary}</p>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-small text-ink-secondary">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>

      <div id="education" className="mt-16 border-t border-border pt-12">
        <p className="eyebrow mb-6">Education</p>
        {education.map((edu) => (
          <div key={edu.institution} className="flex items-start gap-4">
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-card">
              <GraduationCap size={18} className="text-accent-cyan" />
            </span>
            <div>
              <h3 className="font-semibold text-ink">{edu.institution}</h3>
              <p className="text-small text-ink-secondary">{edu.credential}</p>
              <p className="mt-1 font-mono text-caption text-ink-muted">
                {edu.detail}
                {edu.period && ` · ${edu.period}`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
