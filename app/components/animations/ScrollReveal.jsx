'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// This component adds a scroll-triggered animation
export default function ScrollReveal({ 
  children, 
  threshold = 0.2,
  duration = 0.7,
  delay = 0,
  direction = "up", // "up", "down", "left", "right"
  distance = 50,
  ...props 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true,
    threshold 
  })
  
  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch(direction) {
      case "up": return { y: distance, opacity: 0 };
      case "down": return { y: -distance, opacity: 0 };
      case "left": return { x: distance, opacity: 0 };
      case "right": return { x: -distance, opacity: 0 };
      default: return { y: distance, opacity: 0 };
    }
  }
  
  // Calculate animation target
  const getAnimationTarget = () => {
    switch(direction) {
      case "up":
      case "down": 
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  }
  
  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={isInView ? getAnimationTarget() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Improved easing curve
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
