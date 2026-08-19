import { brandIconPaths } from '@/data/brandIconPaths'
import { cn } from '@/lib/utils'

interface BrandIconProps {
  size?: number
  className?: string
}

export function GithubIcon({ size = 16, className }: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-label="GitHub"
      className={cn('shrink-0', className)}
    >
      <path d={brandIconPaths.github} />
    </svg>
  )
}

// simple-icons no longer distributes a LinkedIn mark, so this is an original
// monogram badge rather than a reproduction of LinkedIn's logo artwork.
export function LinkedinIcon({ size = 16, className }: BrandIconProps) {
  return (
    <span
      role="img"
      aria-label="LinkedIn"
      className={cn('inline-flex shrink-0 items-center justify-center rounded-[3px] border border-current font-sans font-bold leading-none', className)}
      style={{ width: size, height: size, fontSize: size * 0.62 }}
    >
      in
    </span>
  )
}
