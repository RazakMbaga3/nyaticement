'use client'

import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  contentClassName = '',
}) {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (closeOnEsc && e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose, closeOnEsc])

  // Size mapping
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    full: 'max-w-full',
  }

  // Animation variants
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.15,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Transition show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeOnOverlayClick ? onClose : () => {}}
          >
            {/* Overlay */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
            </Transition.Child>

            {/* Modal content */}
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`w-full ${sizeClasses[size]} bg-white rounded-xl shadow-xl overflow-hidden`}
              >
                {/* Modal header */}
                {(title || showCloseButton) && (
                  <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                    {title && (
                      <h3 className="text-lg font-medium text-nyati-navy">
                        {title}
                      </h3>
                    )}
                    {showCloseButton && (
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nyati-orange"
                        onClick={onClose}
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                )}

                {/* Modal body */}
                <div className={`p-6 ${contentClassName}`}>{children}</div>
              </motion.div>
            </div>
          </Dialog>
        </Transition>
      )}
    </AnimatePresence>
  )
}
