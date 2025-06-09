'use client'

import { motion } from 'framer-motion'

export default function SectionHeader({ 
  title, 
  subtitle, 
  alignment = 'center',
  titleSize = 'default',
  subtitleSize = 'default',
  withLine = true,
  className = '',
  ...props 
}) {
  // Determine text alignment classes
  const alignmentClasses = {
    'left': 'text-left',
    'center': 'text-center mx-auto',
    'right': 'text-right ml-auto',
  }
  
  // Determine title size classes
  const titleSizeClasses = {
    'small': 'text-2xl md:text-3xl',
    'default': 'text-3xl md:text-4xl lg:text-5xl',
    'large': 'text-4xl md:text-5xl lg:text-6xl',
  }
  
  // Determine subtitle size classes
  const subtitleSizeClasses = {
    'small': 'text-base',
    'default': 'text-lg md:text-xl',
    'large': 'text-xl md:text-2xl',
  }
  
  // Determine line position
  const linePositionClasses = {
    'left': 'after:left-0',
    'center': 'after:left-1/2 after:-translate-x-1/2',
    'right': 'after:right-0',
  }
  
  return (
    <div 
      className={`max-w-3xl mb-12 ${alignmentClasses[alignment]} ${className}`}
      {...props}
    >
      {title && (
        <motion.h2 
          className={`font-bold mb-4 tracking-tight text-nyati-navy ${titleSizeClasses[titleSize]} ${
            withLine ? `relative pb-4 ${linePositionClasses[alignment]} after:absolute after:bottom-0 after:h-1 after:w-16 after:bg-nyati-orange` : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      
      {subtitle && (
        <motion.p 
          className={`text-gray-600 mt-4 max-w-3xl ${subtitleSizeClasses[subtitleSize]}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
