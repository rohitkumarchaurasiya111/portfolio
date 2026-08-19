import { brandIconPaths } from '@/data/brandIconPaths'

interface TechIconProps {
  /** Slug into brandIconPaths, e.g. "react". Omit for stacks without a published mark. */
  iconKey?: string
  name: string
  className?: string
}

export function TechIcon({ iconKey, name, className }: TechIconProps) {
  const path = iconKey ? brandIconPaths[iconKey] : undefined

  if (path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        aria-label={`${name} logo`}
      >
        <path d={path} />
      </svg>
    )
  }

  // Designed fallback for stacks without a published brand mark (e.g. C#, SQL) —
  // a monogram rather than a broken image or a missing icon.
  return (
    <span
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span className="font-mono text-[0.55em] font-semibold tracking-tight">
        {name.slice(0, 2).toUpperCase()}
      </span>
    </span>
  )
}
