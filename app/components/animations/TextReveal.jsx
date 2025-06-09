'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function TextReveal({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.015,
  threshold = 0.3,
  once = true,
  ...props
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const [words, setWords] = useState([])
  
  // Split text into words and characters
  useEffect(() => {
    if (!text) return
    
    const wordsArray = text.split(' ').map((word, wordIndex) => ({
      word,
      wordIndex,
      characters: word.split('').map((char, charIndex) => ({
        char,
        charIndex,
        key: `${wordIndex}-${charIndex}`
      }))
    }))
    
    setWords(wordsArray)
  }, [text])
  
  // Start animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay * i
      }
    })
  }
  
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration
      }
    }
  }
  
  // Create component based on passed 'as' prop
  const Component = as
  
  return (
    <Component
      ref={ref}
      className={className}
      {...props}
    >
      <motion.span
        variants={container}
        initial="hidden"
        animate={controls}
        className="inline-block"
      >
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.characters.map((character) => (
              <motion.span
                key={character.key}
                variants={child}
                className="inline-block"
                style={{ 
                  whiteSpace: character.char === ' ' ? 'pre' : 'normal'
                }}
              >
                {character.char === ' ' ? '\u00A0' : character.char}
              </motion.span>
            ))}
            {wordIndex < words.length - 1 && <span> </span>}
          </span>
        ))}
      </motion.span>
    </Component>
  )
}
