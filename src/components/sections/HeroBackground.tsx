import { useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function HeroBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* base radial + grid wash */}
      <div className="absolute inset-0 bg-grid-fade" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: 'var(--bg-dot-grid)', backgroundSize: '28px 28px' }}
      />

      {/* soft blurred color orbs */}
      <div
        className={cn(
          'absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-accent-blue/20 blur-[110px]',
          !reduceMotion && 'animate-orb-drift',
        )}
      />
      <div
        className={cn(
          'absolute -right-16 top-40 h-[22rem] w-[22rem] rounded-full bg-accent-violet/20 blur-[110px]',
          !reduceMotion && 'animate-orb-drift',
        )}
        style={{ animationDelay: '3s' }}
      />
      <div
        className={cn(
          'absolute bottom-0 left-1/3 h-[18rem] w-[18rem] rounded-full bg-accent-cyan/10 blur-[100px]',
          !reduceMotion && 'animate-orb-drift',
        )}
        style={{ animationDelay: '6s' }}
      />

      {/* very faint texture so the flat glows don't look plasticky */}
      <div className="absolute inset-0 bg-noise opacity-[0.025]" />

      {/* fade to page background at the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  )
}
