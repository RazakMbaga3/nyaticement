'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from './Button'

export default function Form({
  onSubmit,
  fields,
  submitText = 'Submit',
  submitIntent = 'primary',
  submitSize = 'md',
  isSubmitting = false,
  className = '',
  successMessage = 'Your form has been submitted successfully!',
  errorMessage = 'There was an error submitting your form. Please try again.',
  ...props
}) {
  // Form state
  const [formState, setFormState] = useState({})
  const [errors, setErrors] = useState({})
  const [formStatus, setFormStatus] = useState(null) // null, 'success', 'error'
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({ ...errors, [name]: null })
    }
  }
  
  // Validate form
  const validateForm = () => {
    const newErrors = {}
    
    fields.forEach(field => {
      // Skip validation if field is not required and empty
      if (!field.required && (!formState[field.name] || formState[field.name].trim() === '')) {
        return
      }
      
      // Check for required fields
      if (field.required && (!formState[field.name] || formState[field.name].trim() === '')) {
        newErrors[field.name] = `${field.label} is required`
      }
      
      // Email validation
      if (field.type === 'email' && formState[field.name] && !validateEmail(formState[field.name])) {
        newErrors[field.name] = 'Please enter a valid email address'
      }
      
      // Phone validation
      if (field.type === 'tel' && formState[field.name] && !validatePhone(formState[field.name])) {
        newErrors[field.name] = 'Please enter a valid phone number'
      }
      
      // Custom validation
      if (field.validate && formState[field.name]) {
        const customError = field.validate(formState[field.name])
        if (customError) {
          newErrors[field.name] = customError
        }
      }
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  // Email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  // Phone validation
  const validatePhone = (phone) => {
    return /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone)
  }
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    const isValid = validateForm()
    if (!isValid) return
    
    try {
      // Call onSubmit function with form data
      await onSubmit(formState)
      
      // Clear form and show success message
      setFormState({})
      setFormStatus('success')
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }
  }
  
  // Generate form fields
  const renderFields = () => {
    return fields.map((field) => {
      const { type, name, label, placeholder, required, options, className = '', ...rest } = field
      
      // Common props for all inputs
      const commonProps = {
        id: name,
        name,
        value: formState[name] || '',
        onChange: handleChange,
        required,
        placeholder,
        className: `w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-nyati-orange focus:border-transparent ${errors[name] ? 'border-red-500' : 'border-gray-300'} ${className}`,
        ...rest
      }
      
      // Render different input types
      switch (type) {
        case 'textarea':
          return (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <textarea 
                rows="4"
                {...commonProps}
              />
              {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          )
          
        case 'select':
          return (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <select {...commonProps}>
                <option value="">Select {label}</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          )
          
        case 'checkbox':
          return (
            <div key={name} className="mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={name}
                  name={name}
                  checked={!!formState[name]}
                  onChange={(e) => setFormState({ ...formState, [name]: e.target.checked })}
                  className="h-4 w-4 text-nyati-orange focus:ring-nyati-orange border-gray-300 rounded"
                />
                <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
                  {label}{required && <span className="text-red-500 ml-1">*</span>}
                </label>
              </div>
              {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          )
          
        case 'radio':
          return (
            <div key={name} className="mb-4">
              <span className="block text-sm font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
              </span>
              <div className="space-y-2">
                {options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`${name}-${option.value}`}
                      name={name}
                      value={option.value}
                      checked={formState[name] === option.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-nyati-orange focus:ring-nyati-orange border-gray-300"
                    />
                    <label htmlFor={`${name}-${option.value}`} className="ml-2 block text-sm text-gray-700">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
              {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          )
          
        default:
          return (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}{required && <span className="text-red-500 ml-1">*</span>}
              </label>
              <input 
                type={type} 
                {...commonProps}
              />
              {errors[name] && (
                <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
              )}
            </div>
          )
      }
    })
  }
  
  // Status message animation
  const statusAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 }
  }
  
  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-4 ${className}`}
      noValidate
      {...props}
    >
      {/* Status messages */}
      {formStatus && (
        <motion.div
          key={formStatus}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={statusAnimation}
          className={`p-4 rounded-lg ${formStatus === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}
        >
          {formStatus === 'success' ? successMessage : errorMessage}
        </motion.div>
      )}
      
      {/* Form fields */}
      {renderFields()}
      
      {/* Submit button */}
      <div className="mt-6">
        <Button
          type="submit"
          intent={submitIntent}
          size={submitSize}
          disabled={isSubmitting}
          className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
        >
          {isSubmitting ? 'Submitting...' : submitText}
        </Button>
      </div>
    </form>
  )
}
