import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const canHover =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const shouldEnable = !!canHover && !prefersReduced
    setEnabled(shouldEnable)
    document.documentElement.classList.toggle('custom-cursor', shouldEnable)
    return () => document.documentElement.classList.remove('custom-cursor')
  }, [])

  useEffect(() => {
    if (!enabled) return

    function handleMove(e: MouseEvent) {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visible) setVisible(true)
      const target = e.target as HTMLElement
      setHovering(!!target.closest(INTERACTIVE_SELECTOR))
    }
    function handleLeave() {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, visible])

  if (!enabled) return null

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[200] h-1.5 w-1.5 rounded-full bg-accent-cyan"
            style={{ x, y, translateX: '-50%', translateY: '-50%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          />
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full border border-accent-cyan/50"
            style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
            animate={{
              width: hovering ? 44 : 26,
              height: hovering ? 44 : 26,
              opacity: hovering ? 0.9 : 0.5,
            }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          />
        </>
      )}
    </AnimatePresence>
  )
}
