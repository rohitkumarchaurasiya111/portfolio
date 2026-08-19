import { motion, useReducedMotion } from 'framer-motion'

interface Tier {
  id: string
  label: string
  items: string
}

// Kept accurate to the real stack used across the projects in src/data/projects.ts —
// this is a technical diagram, not marketing copy, so it stays honest.
const TIERS: Tier[] = [
  { id: 'frontend', label: 'FRONTEND', items: 'React · Tailwind CSS' },
  { id: 'api', label: 'API LAYER', items: 'Spring Boot · REST APIs' },
  { id: 'data', label: 'DATA', items: 'MySQL · MongoDB' },
  { id: 'deploy', label: 'DEPLOYMENT', items: 'Docker · Jenkins' },
]

export function HeroVisual() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-md md:max-w-none">
      <div
        className="absolute -inset-10 -z-10 rounded-full bg-accent-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="glass-panel overflow-hidden rounded-lg">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-red/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
          </div>
          <span className="font-mono text-caption text-ink-muted">system.map</span>
          <span className="flex items-center gap-1.5 font-mono text-caption text-signal-green">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-green animate-pulse-dot" />
            live
          </span>
        </div>

        {/* layered architecture */}
        <div className="relative px-5 py-7 md:px-7 md:py-8">
          <ol className="relative flex flex-col">
            {TIERS.map((tier, i) => (
              <li key={tier.id} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 rounded-md border border-border-strong bg-elevated px-3.5 py-3 md:px-4 md:py-3.5"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    {!reduceMotion && (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-50" />
                    )}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted md:text-caption">
                      {tier.label}
                    </p>
                    <p className="truncate text-[11px] text-ink md:text-small">{tier.items}</p>
                  </div>
                </motion.div>

                {i < TIERS.length - 1 && (
                  <div className="relative flex h-6 items-center justify-start pl-[1.6rem] md:h-7 md:pl-[1.85rem]">
                    <svg width="2" height="100%" className="absolute left-[1.6rem] top-0 h-full md:left-[1.85rem]">
                      <line
                        x1="1"
                        y1="0"
                        x2="1"
                        y2="100%"
                        stroke="url(#vlineGrad)"
                        strokeWidth="2"
                        strokeDasharray="3 5"
                        className={reduceMotion ? undefined : 'animate-[dash_1.2s_linear_infinite]'}
                      />
                    </svg>
                  </div>
                )}
              </li>
            ))}
          </ol>

          <svg width="0" height="0" aria-hidden="true">
            <defs>
              <linearGradient id="vlineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="rgb(var(--color-accent-blue))" />
                <stop offset="1" stopColor="rgb(var(--color-accent-violet))" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* status footer: git + deploy */}
        <div className="flex flex-col gap-2 border-t border-border px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="truncate font-mono text-caption text-ink-secondary">
            <span className="text-accent-cyan">feat:</span> optimize search across 5,000+ notes
          </p>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-signal-green/30 bg-signal-green/10 px-2.5 py-0.5 font-mono text-caption text-signal-green">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-green" />
            deployed
          </span>
        </div>
      </div>
    </div>
  )
}
