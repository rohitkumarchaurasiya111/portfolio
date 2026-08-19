import { motion } from 'framer-motion'
import { GithubIcon } from '@/components/ui/BrandIcon'
import type { Project } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'

interface ProjectCardProps {
  project: Project
  onOpenCaseStudy: () => void
  index: number
}

export function ProjectCard({ project, onOpenCaseStudy, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
      className="card-surface group flex flex-col overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
    >
      <button
        onClick={onOpenCaseStudy}
        className="relative aspect-[16/10] overflow-hidden border-b border-border text-left"
        aria-label={`Open case study for ${project.title}`}
      >
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.05]"
        />
      </button>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <Badge>{project.category}</Badge>
          <Badge tone={project.status === 'Shipped' ? 'default' : 'muted'}>
            {project.status}
          </Badge>
        </div>

        <h3 className="font-semibold text-ink">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-small text-ink-secondary">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((t) => (
            <Badge key={t} tone="muted">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 pt-1">
          <button
            onClick={onOpenCaseStudy}
            className="link-underline text-small font-medium text-ink"
          >
            Case Study
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="link-underline text-small text-ink-secondary"
            >
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="ml-auto text-ink-muted transition-colors hover:text-ink"
            >
              <GithubIcon size={16} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
