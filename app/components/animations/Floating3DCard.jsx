'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Floating3DCard({
  children,
  className = '',
  perspective = 800,
  tiltFactor = 5,
  scaleFactor = 1.02,
  glareOpacity = 0.2,
  disabled = false,
  ...props
}) {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Spring animation for smooth movement
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltFactor, -tiltFactor]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltFactor, tiltFactor]), springConfig)
  const scale = useSpring(isHovered ? scaleFactor : 1, springConfig)
  
  // Glare effect position
  const glareX = useSpring(useTransform(x, [-0.5, 0.5], ['30%', '70%']), springConfig)
  const glareY = useSpring(useTransform(y, [-0.5, 0.5], ['30%', '70%']), springConfig)
  
  // Handle mouse move
  const handleMouseMove = (event) => {
    if (!cardRef.current || disabled) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate normalized position (-0.5 to 0.5)
    const normalizedX = (event.clientX - centerX) / rect.width
    const normalizedY = (event.clientY - centerY) / rect.height
    
    // Update motion values
    x.set(normalizedX)
    y.set(normalizedY)
  }
  
  // Handle mouse enter/leave
  const handleMouseEnter = () => {
    if (disabled) return
    setIsHovered(true)
  }
  
  const handleMouseLeave = () => {
    if (disabled) return
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective,
        transformStyle: 'preserve-3d',
        scale,
      }}
      {...props}
    >
      {/* Card content */}
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        
        {/* Glare effect */}
        {!disabled && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${glareX}px ${glareY}px, rgba(255,255,255,${glareOpacity}), transparent)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}
