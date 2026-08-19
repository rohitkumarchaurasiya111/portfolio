import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const DISCIPLINES = [
  'Full-Stack Development',
  'Backend engineering',
  'API development',
  'Database architecture',
  'Authentication',
  'System Design',
  'Deployment',
  'Debugging',
  'Performance optimization',
]

const STATS = [
  { value: 'IIT Madras', label: 'INSTITUTE' },
  { value: 'M.Tech CSE', label: 'PROGRAM' },
  { value: '5,000+', label: 'Users Served' },
  { value: 'Software Engineering Intern', label: 'EXPERIENCE'},
  { value: 'B.Tech CSE — KIIT, 9.75 CGPA', label: 'Bachelor' },
]

// What the work actually spans, per project — not a skill-rating claim.
const FOCUS_AREAS = ['Architecture', 'Scalability', 'Performance', 'Product']

export function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About" title="Engineering with a product mindset." />

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-body text-ink-secondary">
            I’m a first-year M.Tech Computer Science and Engineering student at IIT Madras with hands-on experience building full-stack applications through internships and personal projects. I’ve worked on production systems, backend APIs, automation workflows, and scalable web applications — including platforms serving 5,000+ users. I enjoy turning real-world problems into reliable, intuitive products, with a strong focus on backend engineering, system design, performance, and user experience.

          </p>

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-3">
            {DISCIPLINES.map((d) => (
              <li
                key={d}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-small text-ink-secondary"
              >
                {d}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="card-surface overflow-hidden rounded-lg"
        >
          <div className="flex items-center gap-4 border-b border-border px-6 py-4">
            <img
              src="/profile.jpg"
              alt="Rohit Kumar Chaurasiya"
              className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
              loading="lazy"
            />
            <p className="eyebrow">Developer Profile</p>
          </div>
          <div className="divide-y divide-border px-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between py-5">
                <dt className="font-mono text-caption uppercase tracking-[0.14em] text-ink-muted">
                  {stat.label}
                </dt>
                <dd className="text-h3 font-semibold text-ink">{stat.value}</dd>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-border px-6 py-5">
            {FOCUS_AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-elevated px-3 py-1 font-mono text-caption text-ink-secondary"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
                {area}
              </span>
            ))}
          </div>
        </motion.dl>
      </div>
    </section>
  )
}
