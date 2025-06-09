'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CountdownTimer({
  targetDate,
  onComplete,
  className = '',
  digitClassName = '',
  labelClassName = '',
  showLabels = true,
  labels = {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
  },
  format = 'full', // 'full', 'compact', or 'minimal'
  endMessage = 'Expired',
  ...props
}) {
  // State for remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false
  })
  
  // Calculate remaining time
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const difference = target - now
      
      if (difference <= 0) {
        // Target date has passed
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true
        })
        
        if (onComplete) {
          onComplete()
        }
        
        return
      }
      
      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        expired: false
      })
    }
    
    // Initial calculation
    calculateTimeLeft()
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000)
    
    // Cleanup
    return () => clearInterval(timer)
  }, [targetDate, onComplete])
  
  // Format number with leading zero
  const formatNumber = (num) => {
    return num.toString().padStart(2, '0')
  }
  
  // Animation variants
  const variants = {
    animate: (custom) => ({
      y: [0, -10, 0],
      transition: {
        duration: 0.5,
        delay: custom * 0.1
      }
    })
  }
  
  // Determine what to show based on format
  const getTimeUnits = () => {
    switch (format) {
      case 'minimal':
        // Only show the largest non-zero unit
        if (timeLeft.days > 0) return [{ value: timeLeft.days, label: labels.days }]
        if (timeLeft.hours > 0) return [{ value: timeLeft.hours, label: labels.hours }]
        if (timeLeft.minutes > 0) return [{ value: timeLeft.minutes, label: labels.minutes }]
        return [{ value: timeLeft.seconds, label: labels.seconds }]
      
      case 'compact':
        // Skip days if 0
        return timeLeft.days > 0 
          ? [
              { value: timeLeft.days, label: labels.days },
              { value: timeLeft.hours, label: labels.hours }
            ]
          : [
              { value: timeLeft.hours, label: labels.hours },
              { value: timeLeft.minutes, label: labels.minutes },
              { value: timeLeft.seconds, label: labels.seconds }
            ]
      
      case 'full':
      default:
        // Show all units
        return [
          { value: timeLeft.days, label: labels.days },
          { value: timeLeft.hours, label: labels.hours },
          { value: timeLeft.minutes, label: labels.minutes },
          { value: timeLeft.seconds, label: labels.seconds }
        ]
    }
  }
  
  if (timeLeft.expired) {
    return (
      <div className={className} {...props}>
        <p>{endMessage}</p>
      </div>
    )
  }
  
  return (
    <div className={`flex space-x-4 ${className}`} {...props}>
      {getTimeUnits().map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.div
            custom={index}
            animate="animate"
            variants={variants}
            className={`flex items-center justify-center bg-nyati-navy text-white rounded-lg w-16 h-16 text-2xl font-bold ${digitClassName}`}
          >
            {formatNumber(unit.value)}
          </motion.div>
          
          {showLabels && (
            <span className={`text-sm mt-1 text-gray-600 ${labelClassName}`}>
              {unit.label}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
