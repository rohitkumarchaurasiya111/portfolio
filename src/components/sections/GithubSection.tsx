import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, GitFork, RefreshCcw } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcon'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const GITHUB_USERNAME = 'rohitkumarchaurasiya111'

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
}

type FetchState = 'loading' | 'success' | 'error' | 'empty'

export function GithubSection() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [state, setState] = useState<FetchState>('loading')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let cancelled = false
    setState('loading')

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API responded with ${res.status}`)
        return res.json() as Promise<Repo[]>
      })
      .then((data) => {
        if (cancelled) return
        const owned = data
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6)
        setRepos(owned)
        setState(owned.length > 0 ? 'success' : 'empty')
      })
      .catch(() => {
        if (!cancelled) setState('error')
      })

    return () => {
      cancelled = true
    }
  }, [attempt])

  return (
    <section id="github" className="section">
      <SectionHeading
        eyebrow="Open Source"
        title="Open source & engineering."
        description={`Public repositories from github.com/${GITHUB_USERNAME}, pulled live from the GitHub API.`}
      />

      {state === 'loading' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card-surface h-40 animate-pulse rounded-lg" />
          ))}
        </div>
      )}

      {state === 'error' && (
        <div className="card-surface flex flex-col items-center gap-4 rounded-lg px-6 py-14 text-center">
          <p className="text-small text-ink-secondary">
            Couldn&rsquo;t load repositories right now — GitHub&rsquo;s public API may be rate
            limited.
          </p>
          <Button size="sm" variant="secondary" onClick={() => setAttempt((a) => a + 1)}>
            <RefreshCcw size={14} />
            Retry
          </Button>
        </div>
      )}

      {state === 'empty' && (
        <div className="card-surface rounded-lg px-6 py-14 text-center text-small text-ink-secondary">
          No public repositories to show yet.
        </div>
      )}

      {state === 'success' && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface flex flex-col rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="mb-3 flex items-center justify-between">
                <GithubIcon size={16} className="text-ink-muted" />
                <div className="flex items-center gap-3 font-mono text-caption text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </div>
              <h3 className="truncate font-semibold text-ink">{repo.name}</h3>
              <p className="mt-2 line-clamp-2 flex-1 text-small text-ink-secondary">
                {repo.description ?? 'No description provided.'}
              </p>
              {repo.language && <Badge className="mt-4 self-start">{repo.language}</Badge>}
            </motion.a>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Button
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          size="sm"
          showArrow
        >
          View full profile on GitHub
        </Button>
      </div>
    </section>
  )
}
