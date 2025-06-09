'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingIndicator() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  
  // Listen for route changes to show loading indicator
  useEffect(() => {
    // When route changes, show loader
    const handleStart = () => setIsLoading(true)
    
    // When route change completes, hide loader
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 300) // Small delay for smoother transition
    }
    
    // Add event listeners
    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)
    
    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [pathname, searchParams])
  
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-nyati-orange/20 z-50"
          initial={{ scaleX: 0, opacity: 1, transformOrigin: 'left' }}
          animate={{ 
            scaleX: [0, 0.3, 0.6, 0.9], 
            opacity: 1 
          }}
          exit={{ 
            scaleX: 1, 
            opacity: 0,
            transition: { duration: 0.2 } 
          }}
          transition={{
            scaleX: { 
              duration: 1.5, 
              ease: [0.4, 0.0, 0.2, 1] 
            }
          }}
        >
          <motion.div 
            className="h-full bg-nyati-orange"
            animate={{ 
              width: ['0%', '100%'],
              transition: { duration: 1.5, repeat: Infinity }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
