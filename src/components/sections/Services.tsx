import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { services } from '@/data/services'

export function Services() {
  return (
    <section id="services" className="section">
      <SectionHeading eyebrow="Services" title="What I build." />

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden bg-card p-7 transition-colors duration-300 hover:bg-elevated"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-6xl font-bold leading-none text-ink/[0.04] transition-colors duration-300 group-hover:text-accent-blue/10"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="relative mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-elevated text-accent-cyan transition-colors duration-300 group-hover:border-accent-blue/40">
                <Icon size={18} />
              </span>
              <p className="relative font-mono text-caption text-ink-muted">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="relative mt-1 font-semibold text-ink">{service.title}</h3>
              <p className="relative mt-2 text-small text-ink-secondary">{service.description}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
