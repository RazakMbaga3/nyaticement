'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { generatePlaceholder } from '@/app/lib/image-utils'

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = '100vw',
  priority = false,
  loading = 'lazy',
  className = '',
  quality = 85,
  animation = 'fade', // fade, zoom, none
  objectFit = 'cover',
  objectPosition = 'center',
  onClick,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [blurDataURL, setBlurDataURL] = useState('')
  
  // Generate placeholder on mount
  useEffect(() => {
    setBlurDataURL(generatePlaceholder(width, height, '#f0f0f0'))
  }, [width, height])
  
  // Animation variants
  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5 } }
    },
    zoom: {
      hidden: { opacity: 0, scale: 1.05 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    },
    none: {
      hidden: {},
      visible: {}
    }
  }
  
  return (
    <motion.div 
      className={`overflow-hidden ${className}`}
      style={{ position: 'relative', width: '100%', height: '100%' }}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={variants[animation]}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt || 'Image'}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={loading}
        quality={quality}
        placeholder="blur"
        blurDataURL={blurDataURL}
        onLoad={() => setIsLoaded(true)}
        style={{
          objectFit,
          objectPosition,
          width: '100%',
          height: '100%',
        }}
        {...props}
      />
    </motion.div>
  )
}
