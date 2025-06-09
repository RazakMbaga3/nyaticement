'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Testimonials({ 
  testimonials = [],
  autoplay = true,
  interval = 5000,
  className = ''
}) {
  // State for current testimonial
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Handle autoplay
  useEffect(() => {
    if (!autoplay || testimonials.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
    }, interval)
    
    return () => clearInterval(timer)
  }, [autoplay, interval, testimonials.length])
  
  // Handle navigation
  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }
  
  // No testimonials to show
  if (!testimonials.length) {
    return null
  }
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Testimonials */}
      <div className="relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ 
              opacity: currentIndex === index ? 1 : 0, 
              x: currentIndex === index ? 0 : 100,
              position: currentIndex === index ? 'relative' : 'absolute',
              top: 0,
              left: 0,
              zIndex: currentIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote icon */}
            <svg 
              className="w-10 h-10 text-nyati-orange/20 mb-4" 
              fill="currentColor" 
              viewBox="0 0 32 32" 
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            
            {/* Testimonial content */}
            <blockquote className="relative">
              <p className="text-lg font-medium text-gray-800 mb-4">
                "{testimonial.content}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center">
                {testimonial.image && (
                  <div className="flex-shrink-0 mr-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="text-base font-semibold text-nyati-navy">
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                  )}
                </div>
              </div>
            </blockquote>
          </motion.div>
        ))}
      </div>
      
      {/* Navigation dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-nyati-orange scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
