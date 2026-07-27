'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MagneticLinkProps {
  href: string
  className?: string
  children: React.ReactNode
  strength?: number
}

/**
 * A link that gently pulls toward the cursor when hovered, then springs
 * back on mouse-leave. Kept subtle (small default strength) so it reads as
 * quality/responsiveness rather than a gimmick.
 */
export default function MagneticLink({ href, className, children, strength = 0.35 }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reducedMotionPreference = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const prefersReducedMotion = mounted && reducedMotionPreference

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={prefersReducedMotion ? undefined : { x: springX, y: springY }}
      className="inline-block will-change-transform"
    >
      <Link
        ref={ref}
        href={href}
        className={className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    </motion.div>
  )
}
