'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxSection({ 
  children, 
  backgroundImage,
  speed = 0.3,
  backgroundOpacity = 0.7,
  minHeight = '400px',
  className = '',
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Create parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  
  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight }}
    >
      {/* Background image with parallax effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          y,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: backgroundOpacity
        }}
      />
      
      {/* Content with better contrast */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.section>
  )
}
