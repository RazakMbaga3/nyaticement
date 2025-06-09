'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Section({
  children,
  className = '',
  as = 'section',
  id,
  padding = 'py-16 md:py-24',
  backgroundColor = 'bg-white',
  maxWidth = 'max-w-7xl',
  animate = true,
  customAnimation,
  ...props
}) {
  const Component = as
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Default animation
  const defaultAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0],
      }
    }
  }
  
  // Use custom animation if provided, otherwise use default
  const animation = customAnimation || defaultAnimation
  
  return (
    <Component
      id={id}
      className={`${padding} ${backgroundColor} ${className}`}
      ref={ref}
      {...props}
    >
      <motion.div
        className={`container mx-auto px-4 sm:px-6 ${maxWidth}`}
        initial={animate ? "hidden" : false}
        animate={animate && isInView ? "visible" : false}
        variants={animation}
      >
        {children}
      </motion.div>
    </Component>
  )
}
