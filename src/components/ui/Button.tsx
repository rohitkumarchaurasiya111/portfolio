import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'sm'

const base =
  'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 ease-premium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-md',
  secondary:
    'bg-card/60 border border-border text-ink backdrop-blur-sm hover:border-border-strong hover:bg-elevated hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] rounded-md',
  ghost: 'text-ink-secondary hover:text-ink rounded-md',
}

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-small',
  sm: 'h-9 px-4 text-small',
}

interface SharedProps {
  variant?: Variant
  size?: Size
  showArrow?: boolean
  children: ReactNode
  className?: string
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', showArrow, children, className, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className)

    const Arrow = variant === 'primary' ? ArrowRight : ArrowUpRight
    const arrowClass =
      variant === 'primary'
        ? 'transition-transform duration-300 ease-premium group-hover:translate-x-1'
        : 'transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5'

    if ('href' in props && props.href !== undefined) {
      const { href, ...rest } = props as ButtonAsAnchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...rest}
        >
          {children}
          {showArrow && <Arrow size={16} className={arrowClass} />}
        </a>
      )
    }

    const { ...rest } = props as ButtonAsButton
    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...rest}>
        {children}
        {showArrow && <Arrow size={16} className={arrowClass} />}
      </button>
    )
  },
)

Button.displayName = 'Button'
