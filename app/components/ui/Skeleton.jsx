'use client'

import { motion } from 'framer-motion'

// Basic skeleton component
export function Skeleton({
  className = '',
  width = '100%',
  height = '20px',
  rounded = 'rounded-md',
  animate = true,
  ...props
}) {
  return (
    <div
      className={`bg-gray-200 ${rounded} ${className}`}
      style={{ 
        width, 
        height,
        backgroundImage: animate 
          ? 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.05) 80%)' 
          : 'none',
        backgroundSize: animate ? '200% 100%' : 'auto',
        animation: animate ? 'shimmer 1.5s infinite' : 'none'
      }}
      {...props}
    />
  )
}

// Text skeleton with multiple lines
export function TextSkeleton({
  lines = 3,
  className = '',
  lastLineWidth = '80%',
  lineHeight = '20px',
  lineGap = '12px',
  animate = true,
}) {
  return (
    <div className={`space-y-[${lineGap}] ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          width={index === lines - 1 ? lastLineWidth : '100%'}
          height={lineHeight}
          animate={animate}
        />
      ))}
    </div>
  )
}

// Card skeleton
export function CardSkeleton({
  hasImage = true,
  imageHeight = '200px',
  hasTitle = true,
  titleWidth = '80%',
  titleHeight = '24px',
  hasDescription = true,
  descriptionLines = 2,
  hasFooter = false,
  footerHeight = '40px',
  className = '',
  animate = true,
}) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      {/* Image skeleton */}
      {hasImage && (
        <Skeleton 
          width="100%" 
          height={imageHeight} 
          rounded="rounded-none"
          animate={animate}
        />
      )}
      
      {/* Content skeleton */}
      <div className="p-4 space-y-4">
        {/* Title skeleton */}
        {hasTitle && (
          <Skeleton 
            width={titleWidth} 
            height={titleHeight}
            animate={animate}
          />
        )}
        
        {/* Description skeleton */}
        {hasDescription && (
          <TextSkeleton 
            lines={descriptionLines} 
            animate={animate}
          />
        )}
      </div>
      
      {/* Footer skeleton */}
      {hasFooter && (
        <div className="p-4 border-t border-gray-100">
          <Skeleton 
            width="100%" 
            height={footerHeight}
            animate={animate}
          />
        </div>
      )}
    </div>
  )
}

// Grid of card skeletons
export function CardGridSkeleton({
  count = 3,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 'gap-6',
  ...cardProps
}) {
  // Generate CSS grid class
  const gridClass = `grid ${gap} ${
    typeof columns === 'object'
      ? Object.entries(columns)
          .map(([breakpoint, value]) => {
            return `${breakpoint === 'sm' ? '' : `${breakpoint}:`}grid-cols-${value}`;
          })
          .join(' ')
      : `grid-cols-${columns}`
  }`;
  
  return (
    <div className={gridClass}>
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} {...cardProps} />
      ))}
    </div>
  )
}

// Shimmer animation CSS
export function SkeletonStyles() {
  return (
    <style jsx global>{`
      @keyframes shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `}</style>
  )
}
