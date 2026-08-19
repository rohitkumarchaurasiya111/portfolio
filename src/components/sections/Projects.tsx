import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Modal } from '@/components/ui/Modal'
import { FeaturedProject } from '@/components/sections/FeaturedProject'
import { ProjectCard } from '@/components/sections/ProjectCard'
import { ProjectCaseStudy } from '@/components/sections/ProjectCaseStudy'
import { projects, featuredProject, secondaryProjects, type ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/utils'

const AVAILABLE_CATEGORIES = Array.from(
  new Set(projects.map((p) => p.category)),
) as ProjectCategory[]

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All')
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  const filteredSecondary = useMemo(
    () =>
      filter === 'All'
        ? secondaryProjects
        : secondaryProjects.filter((p) => p.category === filter),
    [filter],
  )

  const showFeatured = filter === 'All' || featuredProject.category === filter
  const activeProject = projects.find((p) => p.slug === openSlug) ?? null

  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected engineering work."
        description="Each project below is a real, ongoing platform — shown with the actual problem it solves, not just a screenshot."
      />

      <div className="mb-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {(['All', ...AVAILABLE_CATEGORIES] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 font-mono text-caption uppercase tracking-wide transition-colors duration-300',
              filter === cat
                ? 'border-accent-blue/40 bg-accent-blue/10 text-accent-cyan'
                : 'border-border bg-card text-ink-secondary hover:text-ink',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showFeatured && (
          <motion.div
            key="featured"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <FeaturedProject
              project={featuredProject}
              onOpenCaseStudy={() => setOpenSlug(featuredProject.slug)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {filteredSecondary.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSecondary.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                onOpenCaseStudy={() => setOpenSlug(project.slug)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        !showFeatured && (
          <p className="py-16 text-center text-small text-ink-muted">
            No projects in this category yet.
          </p>
        )
      )}

      <Modal open={!!activeProject} onClose={() => setOpenSlug(null)} labelledBy="case-study-title">
        {activeProject && <ProjectCaseStudy project={activeProject} titleId="case-study-title" />}
      </Modal>
    </section>
  )
}
