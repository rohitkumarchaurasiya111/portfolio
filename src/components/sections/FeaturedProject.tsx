import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/ui/BrandIcon'
import type { Project } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface FeaturedProjectProps {
  project: Project
  onOpenCaseStudy: () => void
}

export function FeaturedProject({ project, onOpenCaseStudy }: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface group overflow-hidden rounded-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border md:aspect-auto md:border-b-0 md:border-r">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone="accent">Featured</Badge>
            <Badge>{project.category}</Badge>
            <Badge tone={project.status === 'Shipped' ? 'default' : 'muted'}>
              {project.status}
            </Badge>
          </div>

          <h3 className="text-h3 font-semibold text-ink">{project.title}</h3>
          <p className="mt-3 text-small text-ink-secondary">{project.description}</p>

          <ul className="mt-5 space-y-2">
            {project.features.slice(0, 3).map((f) => (
              <li key={f} className="flex gap-2.5 text-small text-ink-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <Badge key={t} tone="muted">
                {t}
              </Badge>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="sm" onClick={onOpenCaseStudy}>
              Case Study
            </Button>
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer" variant="secondary" size="sm" showArrow>
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-small text-ink-secondary transition-colors hover:text-ink"
                aria-label={`${project.title} source code on GitHub`}
              >
                <GithubIcon size={16} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
