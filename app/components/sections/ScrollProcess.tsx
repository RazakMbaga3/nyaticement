'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export interface ScrollProcessStep {
  title: string
  text: string
}

interface ScrollProcessProps {
  heading: string
  steps: ScrollProcessStep[]
}

const VH_PER_STEP = 90 // scroll distance (in vh) dedicated to each step

/**
 * Scroll-scrubbed process story: pins a panel in the viewport while the
 * container scrolls past, cross-fading between steps and driving a
 * progress rail. Falls back to a plain stacked list under reduced-motion
 * or on small screens, where pinning feels awkward rather than premium.
 */
export default function ScrollProcess({ heading, steps }: ScrollProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotionPreference = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setMounted(true)
    const check = () => setIsSmallScreen(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const prefersReducedMotion = mounted && reducedMotionPreference
  const useStaticLayout = mounted ? (prefersReducedMotion || isSmallScreen) : true

  // Measured directly from the container's own bounding rect on scroll,
  // rather than via Framer Motion's useScroll offset strings — this page
  // loads translations asynchronously and content above this section
  // changes height after first paint, and useScroll's offset calculation
  // was observed to lock in against a stale position from before that
  // reflow, permanently skewing every step boundary by roughly one step.
  useEffect(() => {
    if (useStaticLayout) return
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const scrollableDistance = rect.height - window.innerHeight
      if (scrollableDistance <= 0) return
      const progress = Math.min(1, Math.max(0, -rect.top / scrollableDistance))
      const index = Math.min(steps.length - 1, Math.max(0, Math.round(progress * (steps.length - 1))))
      setActiveStep(index)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [useStaticLayout, steps.length])

  if (useStaticLayout) {
    return (
      <section className="mb-8">
        <h2 className="text-xl font-bold text-nyati-navy mb-4">{heading}</h2>
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-gray-50 p-5 border border-gray-200 border-t-4 border-t-nyati-orange"
            >
              <div className="text-nyati-orange font-bold text-xl mb-2">{step.title}</div>
              <p className="text-sm text-nyati-dark-grey">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative mb-8"
      style={{ height: `${VH_PER_STEP * steps.length}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl w-full">
          <div className="eyebrow text-xs font-bold tracking-[0.18em] uppercase text-nyati-orange mb-3">
            {heading}
          </div>

          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Progress rail */}
            <div className="col-span-2 flex flex-col gap-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="relative h-8 w-0.5 bg-gray-200 overflow-hidden">
                    <motion.div
                      className="absolute inset-x-0 top-0 bg-nyati-orange"
                      initial={false}
                      animate={{ height: i <= activeStep ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span
                    className={`text-xs font-bold tabular-nums transition-colors duration-300 ${
                      i === activeStep ? 'text-nyati-navy' : 'text-gray-300'
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Active step content */}
            <div className="col-span-10 relative h-64">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex flex-col justify-center"
                  initial={false}
                  animate={{
                    opacity: i === activeStep ? 1 : 0,
                    y: i === activeStep ? 0 : 16,
                  }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  style={{ pointerEvents: i === activeStep ? 'auto' : 'none' }}
                >
                  <div className="text-8xl font-bold text-nyati-orange/15 font-futura leading-none mb-2 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-nyati-navy mb-3 -mt-12 relative z-10">
                    {step.title.replace(/^0\d\.\s*/, '')}
                  </h3>
                  <p className="text-base text-nyati-dark-grey max-w-2xl relative z-10">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
