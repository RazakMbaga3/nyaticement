'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import OptimizedImage from './OptimizedImage'

export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  className = '',
  hoverEffect = true,
  footer,
  badges = [],
  horizontal = false,
  aspectRatio = '16/9',
  ...props
}) {
  // Set default image dimensions
  const imageProps = {
    width: 800,
    height: 450,
    ...image
  }
  
  // Card animation
  const cardAnimation = {
    whileHover: hoverEffect ? { 
      y: -5, 
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    } : {},
    transition: { duration: 0.2 }
  }
  
  const CardWrapper = href ? 
    ({ children }) => (
      <Link href={href} className="block h-full">
        {children}
      </Link>
    ) : 
    ({ children }) => <>{children}</>
  
  return (
    <CardWrapper>
      <motion.div 
        className={`bg-white rounded-xl overflow-hidden shadow-md h-full ${className} ${horizontal ? 'flex flex-col md:flex-row' : 'flex flex-col'}`}
        {...(hoverEffect ? cardAnimation : {})}
        {...props}
      >
        {/* Card Image */}
        {image && (
          <div 
            className={`${horizontal ? 'md:w-2/5' : 'w-full'}`}
            style={{ aspectRatio }}
          >
            <OptimizedImage
              src={image.src || image}
              alt={imageAlt || title || 'Card image'}
              width={imageProps.width}
              height={imageProps.height}
              className="h-full w-full"
              animation="zoom"
            />
          </div>
        )}
        
        {/* Card Content */}
        <div className={`flex flex-col ${horizontal ? 'md:w-3/5' : 'w-full'} p-5 flex-grow`}>
          {/* Badges */}
          {badges.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {badges.map((badge, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs font-medium rounded-full bg-nyati-orange/10 text-nyati-orange"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
          
          {/* Title */}
          {title && (
            <h3 className="text-lg font-bold text-nyati-navy mb-2">
              {title}
            </h3>
          )}
          
          {/* Description */}
          {description && (
            <p className="text-gray-600 mb-4 flex-grow">
              {description}
            </p>
          )}
          
          {/* Footer */}
          {footer && (
            <div className="mt-auto pt-4 border-t border-gray-100">
              {footer}
            </div>
          )}
        </div>
      </motion.div>
    </CardWrapper>
  )
}
