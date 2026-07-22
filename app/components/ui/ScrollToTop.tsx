'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScrollToTopProps {
  showAtHeight?: number;
  position?: 'left' | 'right';
  bottomOffset?: number;
  sideOffset?: number;
}

export default function ScrollToTop({
  showAtHeight = 300,
  position = 'right',
  bottomOffset = 30,
  sideOffset = 30,
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Update visibility based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAtHeight)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll)
  }, [showAtHeight])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Position styles
  const positionStyles: Record<'left' | 'right', { left: number | string; right: number | string }> = {
    right: {
      right: sideOffset,
      left: 'auto'
    },
    left: {
      left: sideOffset,
      right: 'auto'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-0 z-50 p-3 rounded-full bg-nyati-navy text-white shadow-lg"
          style={{
            bottom: bottomOffset,
            ...positionStyles[position]
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
