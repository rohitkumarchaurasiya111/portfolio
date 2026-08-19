import { GithubIcon } from '@/components/ui/BrandIcon'
import type { Project } from '@/data/projects'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

interface ProjectCaseStudyProps {
  project: Project
  titleId: string
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <h3 className="eyebrow mb-3">{title}</h3>
      {children}
    </div>
  )
}

export function ProjectCaseStudy({ project, titleId }: ProjectCaseStudyProps) {
  return (
    <div>
      <div className="aspect-[16/8] w-full overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6 md:p-10">
        <div className="mb-3 flex flex-wrap items-center gap-1.5">
          <Badge>{project.category}</Badge>
          <Badge tone={project.status === 'Shipped' ? 'default' : 'muted'}>{project.status}</Badge>
        </div>

        <h2 id={titleId} className="text-h3 font-semibold text-ink md:text-h2">
          {project.title}
        </h2>

        <CaseSection title="Overview">
          <p className="text-body text-ink-secondary">{project.description}</p>
        </CaseSection>

        <CaseSection title="Problem">
          <p className="text-body text-ink-secondary">{project.caseStudy.problem}</p>
        </CaseSection>

        <CaseSection title="Solution">
          <p className="text-body text-ink-secondary">{project.caseStudy.solution}</p>
        </CaseSection>

        <CaseSection title="Architecture">
          <p className="mb-5 text-body text-ink-secondary">{project.caseStudy.architecture}</p>
          <div className="flex flex-col gap-0">
            {project.caseStudy.flow.map((step, i) => (
              <div key={step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border-strong bg-elevated font-mono text-caption text-accent-cyan">
                    {i + 1}
                  </span>
                  {i < project.caseStudy.flow.length - 1 && (
                    <span className="my-1 h-full w-px flex-1 bg-border" />
                  )}
                </div>
                <p className="pb-6 pt-0.5 text-small text-ink-secondary">{step}</p>
              </div>
            ))}
          </div>
        </CaseSection>

        <CaseSection title="Technologies">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </CaseSection>

        <CaseSection title="Key Features">
          <ul className="space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-2.5 text-small text-ink-secondary">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                {f}
              </li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection title="Challenges & Engineering Decisions">
          <p className="text-body text-ink-secondary">{project.caseStudy.challenges}</p>
        </CaseSection>

        <CaseSection title="Results">
          <p className="text-body text-ink-secondary">{project.caseStudy.results}</p>
        </CaseSection>

        <CaseSection title="Lessons Learned">
          <p className="text-body text-ink-secondary">{project.caseStudy.lessonsLearned}</p>
        </CaseSection>

        {(project.liveUrl || project.githubUrl) && (
          <div className="flex flex-wrap gap-3 border-t border-border pt-6">
            {project.liveUrl && (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer" size="sm" showArrow>
                Live Product
              </Button>
            )}
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="sm"
              >
                <GithubIcon size={15} />
                Source Code
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
