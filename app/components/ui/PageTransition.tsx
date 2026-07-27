'use client'

import { usePathname } from 'next/navigation'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

const COVER_DURATION = 0.35 // panel sliding in from off-screen left to cover the viewport
const HOLD_DURATION = 0.08 // brief hold while fully covered
const REVEAL_DURATION = 0.35 // panel sliding out to off-screen right
const TOTAL_DURATION = COVER_DURATION + HOLD_DURATION + REVEAL_DURATION
const CONTENT_FADE_DELAY = COVER_DURATION + HOLD_DURATION * 0.5 // content fades in while still hidden under the panel

// x is expressed as a fraction of the panel's own width via translateX percentages
const T1 = COVER_DURATION / TOTAL_DURATION
const T2 = (COVER_DURATION + HOLD_DURATION) / TOTAL_DURATION

/**
 * Branded route-change transition. On every path change, a navy panel with
 * an orange leading edge slides in from off-screen left to fully cover the
 * viewport, holds briefly, then slides out to off-screen right — revealing
 * the new page underneath, which fades in during the hold. Purely
 * cosmetic: Next.js has already rendered the new route by the time this
 * plays, so it never blocks or delays navigation.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reducedMotionPreference = useReducedMotion()
  // Avoid SSR/client hydration mismatch: useReducedMotion() can't read the
  // media query on the server, so only trust it once mounted client-side.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const prefersReducedMotion = mounted && reducedMotionPreference

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <>
      <motion.div
        key={`content-${pathname}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: CONTENT_FADE_DELAY, ease: 'easeOut' }}
      >
        {children}
      </motion.div>

      <motion.div
        key={`sweep-${pathname}`}
        className="pointer-events-none fixed inset-0 z-[100] bg-nyati-navy"
        aria-hidden="true"
        initial={{ x: '-100%' }}
        animate={{ x: ['-100%', '0%', '0%', '100%'] }}
        transition={{ duration: TOTAL_DURATION, times: [0, T1, T2, 1], ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-y-0 right-0 w-1.5 bg-nyati-orange"
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0] }}
          transition={{ duration: COVER_DURATION + HOLD_DURATION, times: [0, 0.9, 1] }}
        />
      </motion.div>
    </>
  )
}
