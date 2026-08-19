import { useEffect, useRef, useState } from 'react'

/**
 * Animates from 0 to `end` over `duration` ms once `start` becomes true (e.g. on
 * scroll into view). Jumps straight to the final value when reduced motion is
 * preferred, instead of skipping the number entirely.
 */
export function useCountUp(end: number, start: boolean, duration = 1200): number {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setValue(end)
      return
    }

    let raf: number
    const startTime = performance.now()

    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out-cubic, matches the site's premium easing feel
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start, end, duration])

  return value
}
