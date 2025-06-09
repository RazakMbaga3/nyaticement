'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProgressiveImage({
  src,
  alt,
  width,
  height,
  placeholderSrc, // Optional, low-quality placeholder
  aspectRatio,
  className = '',
  containerClassName = '',
  priority = false,
  quality = 85,
  sizes = '100vw',
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(!!placeholderSrc)
  
  // Calculate placeholder dimensions for aspect ratio
  const getPlaceholderDimensions = () => {
    if (width && height) {
      return { width, height }
    }
    
    if (aspectRatio) {
      const [w, h] = aspectRatio.split('/').map(Number)
      return { width: 100, height: 100 * (h / w) }
    }
    
    return { width: 100, height: 100 }
  }
  
  // Generate CSS aspect ratio
  const getAspectRatio = () => {
    if (aspectRatio) {
      return aspectRatio
    }
    
    if (width && height) {
      return `${width}/${height}`
    }
    
    return undefined
  }
  
  // Handle main image load
  const handleMainImageLoad = () => {
    setIsLoaded(true)
    setTimeout(() => {
      setShowPlaceholder(false)
    }, 500) // Fade out placeholder after main image loads
  }
  
  // Calculate placeholder dimensions
  const placeholderDimensions = getPlaceholderDimensions()
  
  return (
    <div 
      className={`relative overflow-hidden ${containerClassName}`}
      style={{ aspectRatio: getAspectRatio() }}
    >
      {/* Main image */}
      <motion.div
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${className}`}
          onLoad={handleMainImageLoad}
          priority={priority}
          quality={quality}
          sizes={sizes}
          {...props}
        />
      </motion.div>
      
      {/* Placeholder */}
      {showPlaceholder && (
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {placeholderSrc ? (
            <Image
              src={placeholderSrc}
              alt={alt}
              width={placeholderDimensions.width}
              height={placeholderDimensions.height}
              className={`w-full h-full object-cover ${className}`}
              priority={true}
              quality={10}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 animate-pulse" />
          )}
        </motion.div>
      )}
    </div>
  )
}
