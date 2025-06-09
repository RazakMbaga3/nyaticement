'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TabGroup({
  tabs,
  defaultTab = 0,
  onChange,
  orientation = 'horizontal',
  variant = 'underline',
  className = '',
}) {
  // State for active tab
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  // Handle tab change
  const handleTabChange = (index) => {
    setActiveTab(index)
    if (onChange) {
      onChange(index)
    }
  }
  
  // Variant styles
  const variantStyles = {
    underline: {
      container: 'border-b border-gray-200',
      tab: 'text-gray-500 hover:text-nyati-navy relative px-4 py-2',
      activeTab: 'text-nyati-orange font-medium',
      indicator: 'absolute bottom-0 left-0 h-0.5 bg-nyati-orange'
    },
    pills: {
      container: 'p-1 bg-gray-100 rounded-lg',
      tab: 'text-gray-500 hover:text-gray-700 rounded-md px-4 py-2',
      activeTab: 'text-nyati-navy bg-white shadow font-medium',
      indicator: 'hidden'
    },
    buttons: {
      container: '',
      tab: 'text-gray-500 hover:text-gray-700 border border-gray-300 rounded-md px-4 py-2',
      activeTab: 'text-white bg-nyati-navy border-nyati-navy font-medium',
      indicator: 'hidden'
    }
  }
  
  // Orientation styles
  const orientationStyles = {
    horizontal: 'flex space-x-2',
    vertical: 'flex flex-col space-y-2'
  }
  
  // Get styles
  const {
    container: containerStyle,
    tab: tabStyle,
    activeTab: activeTabStyle,
    indicator: indicatorStyle
  } = variantStyles[variant] || variantStyles.underline
  
  return (
    <div className={className}>
      {/* Tab navigation */}
      <div className={`${containerStyle} ${orientationStyles[orientation]}`}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`
              ${tabStyle} 
              ${activeTab === index ? activeTabStyle : ''}
              transition-all duration-200 ease-in-out
            `}
            onClick={() => handleTabChange(index)}
            aria-selected={activeTab === index}
            role="tab"
          >
            {variant === 'underline' && activeTab === index && (
              <motion.span
                className={`${indicatorStyle} w-full`}
                layoutId="tab-indicator"
                transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab content */}
      <div className="mt-4">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  )
}
