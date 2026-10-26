'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function PageProgress({
  color = '#F49545',
  height = 3,
  position = 'top',
  showOnlyWhenScrolling = false,
  showOnlyBelowFold = true,
  zIndex = 50,
}) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  })
  
  const [isVisible, setIsVisible] = useState(!showOnlyWhenScrolling && !showOnlyBelowFold)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isBelowFold, setIsBelowFold] = useState(false)
  
  // Handle scroll events
  useEffect(() => {
    let scrollTimer
    
    const handleScroll = () => {
      // Update scrolling state
      setIsScrolling(true)
      clearTimeout(scrollTimer)
      
      scrollTimer = setTimeout(() => {
        setIsScrolling(false)
      }, 300)
      
      // Check if below fold
      const isBelowFoldNow = window.scrollY > window.innerHeight * 0.1
      setIsBelowFold(isBelowFoldNow)
    }
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    
    // Initial check
    handleScroll()
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(scrollTimer)
    }
  }, [])
  
  // Update visibility based on props and scroll state
  useEffect(() => {
    const shouldBeVisible = 
      (!showOnlyWhenScrolling || isScrolling) && 
      (!showOnlyBelowFold || isBelowFold)
    
    setIsVisible(shouldBeVisible)
  }, [isScrolling, isBelowFold, showOnlyWhenScrolling, showOnlyBelowFold])
  
  // Position styles
  const positionStyles = {
    top: { top: 0, bottom: 'auto' },
    bottom: { bottom: 0, top: 'auto' }
  }
  
  return (
    <motion.div
      className="fixed left-0 right-0"
      style={{
        ...positionStyles[position],
        height,
        zIndex,
        transformOrigin: 'left',
        scaleX,
        backgroundColor: color,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    />
  )
}
