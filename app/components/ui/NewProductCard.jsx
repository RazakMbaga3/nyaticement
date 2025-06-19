'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from '../../hooks/useTranslations';

export default function NewProductCard({ product, index }) {
  const { t } = useTranslations();
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Extract product details with safe fallbacks
  const {
    image = '',
    fallbackImage = '',
    title = 'Product Title',
    description = 'Product Description',
    features = [],
    applications = []
  } = product || {};
  
  // Debug info
  useEffect(() => {
    console.log(`ProductCard rendering: ${title}`, { 
      image, 
      fallbackImage, 
      imageLoaded, 
      imageError,
      index 
    });
  }, [title, image, fallbackImage, imageLoaded, imageError, index]);
  
  // Determine which image to show
  const imageToShow = imageError && fallbackImage ? fallbackImage : image;
  
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
      whileHover={{ y: -5 }}
      layout
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Container */}
        <motion.div 
          className="lg:w-2/5 p-4 flex items-center justify-center bg-gray-50 relative overflow-hidden"
          layoutId={`image-container-${index}`}
        >
          <div className="relative h-80 w-full">
            {/* Next.js Image with Error Handling */}
            <Image 
              src={imageToShow}
              alt={title}
              fill
              className="object-contain transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 500px"
              priority={true}
              onLoadingComplete={() => setImageLoaded(true)}
              onError={() => {
                console.error(`Error loading image: ${imageToShow}`);
                if (!imageError) {
                  setImageError(true);
                }
              }}
            />
            
            {/* Show placeholder while loading */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="animate-pulse bg-gray-200 h-48 w-48 rounded-md"></div>
              </div>
            )}
            
            {/* Fallback if both images fail */}
            {imageError && !fallbackImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <span className="text-gray-500 text-sm">Image not available</span>
              </div>
            )}
          </div>
          
          {/* Hover effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-nyati-navy/10 to-transparent opacity-0 transition-opacity duration-300"
            whileHover={{ opacity: 1 }}
          />
        </motion.div>
        
        {/* Content Container */}
        <div className="lg:w-3/5 p-6">
          {/* Product Title */}
          <motion.h2 
            className="text-2xl font-bold mb-3 text-nyati-navy"
            layoutId={`title-${index}`}
          >
            {title}
          </motion.h2>
          
          {/* Product Description */}
          <motion.p 
            className="text-gray-700 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          
          {/* Features and Applications */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Features Column */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-nyati-orange flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-nyati-navy">{t('ui.features', 'Features')}</h3>
              </div>
              
              {/* Features List */}
              <ul className="space-y-2 mb-6 md:mb-0">
                {features.slice(0, isExpanded ? features.length : 3).map((feature, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                  >
                    <svg className="h-5 w-5 text-nyati-orange mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Applications Column */}
            <div className="md:w-1/2">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 rounded-full bg-nyati-green flex items-center justify-center mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg text-nyati-navy">{t('ui.applications', 'Applications')}</h3>
              </div>
              
              {/* Applications List */}
              <ul className="space-y-2">
                {applications.slice(0, isExpanded ? applications.length : 3).map((application, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (idx * 0.1) }}
                  >
                    <svg className="h-5 w-5 text-nyati-green mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{application}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          
          {/* Show More/Less Button */}
          {((features.length > 3) || (applications.length > 3)) && (
            <motion.button 
              className="mt-4 text-nyati-orange text-sm font-medium flex items-center hover:text-nyati-navy transition-colors duration-300"
              onClick={() => setIsExpanded(!isExpanded)}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {isExpanded ? (
                <>
                  {t('ui.showLess', 'Show Less')}
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  {t('ui.showMore', 'Show More')}
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
