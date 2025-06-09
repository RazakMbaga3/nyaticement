'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Create context
const ToastContext = createContext(null)

// Toast types
const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
  WARNING: 'warning',
}

// Toast variants
const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20,
    transition: { duration: 0.2 }
  }
}

// Toast component
function Toast({ id, message, type, onClose, autoClose = true, duration = 5000 }) {
  // Auto close toast after duration
  useState(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose(id)
      }, duration)
      
      return () => clearTimeout(timer)
    }
  }, [autoClose, duration, id, onClose])
  
  // Toast colors
  const colors = {
    [TOAST_TYPES.SUCCESS]: {
      bg: 'bg-green-50',
      border: 'border-green-500',
      text: 'text-green-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    [TOAST_TYPES.ERROR]: {
      bg: 'bg-red-50',
      border: 'border-red-500',
      text: 'text-red-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    },
    [TOAST_TYPES.WARNING]: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-500',
      text: 'text-yellow-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    [TOAST_TYPES.INFO]: {
      bg: 'bg-blue-50',
      border: 'border-blue-500',
      text: 'text-blue-800',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    }
  }
  
  const { bg, border, text, icon } = colors[type] || colors[TOAST_TYPES.INFO]
  
  return (
    <motion.div
      layout
      className={`flex items-start p-4 mb-3 max-w-sm w-full rounded-lg shadow-lg border-l-4 ${bg} ${border}`}
      variants={toastVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className={`ml-3 ${text} flex-grow`}>
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => onClose(id)}
        className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 inline-flex h-8 w-8 text-gray-500 hover:text-gray-700"
      >
        <span className="sr-only">Close</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

// Toast provider component
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])
  
  // Remove toast
  const removeToast = useCallback((id) => {
    setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id))
  }, [])
  
  // Add toast
  const addToast = useCallback((message, type = TOAST_TYPES.INFO, options = {}) => {
    const id = Date.now().toString()
    
    setToasts(prevToasts => [
      ...prevToasts,
      {
        id,
        message,
        type,
        ...options
      }
    ])
    
    return id
  }, [])
  
  // Convenience methods
  const success = useCallback((message, options) => 
    addToast(message, TOAST_TYPES.SUCCESS, options), [addToast])
  
  const error = useCallback((message, options) => 
    addToast(message, TOAST_TYPES.ERROR, options), [addToast])
  
  const info = useCallback((message, options) => 
    addToast(message, TOAST_TYPES.INFO, options), [addToast])
  
  const warning = useCallback((message, options) => 
    addToast(message, TOAST_TYPES.WARNING, options), [addToast])
  
  // Value to provide
  const value = {
    addToast,
    removeToast,
    success,
    error,
    info,
    warning
  }
  
  return (
    <ToastContext.Provider value={value}>
      {children}
      
      {/* Toast container */}
      <div className="fixed top-0 right-0 p-4 w-full max-w-sm z-50 flex flex-col items-end">
        <AnimatePresence>
          {toasts.map(toast => (
            <Toast 
              key={toast.id}
              onClose={removeToast}
              {...toast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

// Hook to use toast
export function useToast() {
  const context = useContext(ToastContext)
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  
  return context
}
