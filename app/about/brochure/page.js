'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from '../../hooks/useTranslations'
import { useLanguage } from '../../contexts/LanguageContext'

export default function BrochurePage() {
  // Load bilingual content through our translation hook
  const { t, isLoading } = useTranslations();
  const { language } = useLanguage();
  const [brochureTranslations, setBrochureTranslations] = useState(null);

  // Load brochure-specific translations
  useEffect(() => {
    const loadBrochureTranslations = async () => {
      try {
        const translationModule = await import(`../../translations/brochure-${language}.json`);
        setBrochureTranslations(translationModule.default);
      } catch (error) {
        console.error('Error loading brochure translations', error);
        // Fallback to English if there's an error
        try {
          const translationModule = await import('../../translations/brochure-en.json');
          setBrochureTranslations(translationModule.default);
        } catch (fallbackError) {
          console.error('Error loading fallback translations', fallbackError);
        }
      }
    };

    if (!isLoading) {
      loadBrochureTranslations();
    }
  }, [isLoading, language]);

  // Return loading state until translations are ready
  if (isLoading || !brochureTranslations) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nyati-orange"></div>
      </div>
    );
  }

  return (
    <>
      {/* Brochure Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="flex flex-col lg:flex-row gap-10 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brochure Preview */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  className="relative h-[500px] w-full shadow-xl rounded-sm overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/images/aboutus/bro.png" 
                    alt={brochureTranslations.brochurePreview}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-bold">{brochureTranslations.brochureName}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Download Info */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-nyati-navy mb-6">{brochureTranslations.pageTitle}</h2>
                  <p className="text-gray-700 mb-6 text-lg">
                    {brochureTranslations.pageDescription}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{brochureTranslations.bulletPoints.products}</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{brochureTranslations.bulletPoints.quality}</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{brochureTranslations.bulletPoints.sustainability}</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{brochureTranslations.bulletPoints.history}</span>
                    </li>
                  </ul>
                  
                  {/* Download Button */}
                  <motion.a 
                    href="/PDF/Brochure2026.pdf" 
                    download
                    className="inline-flex items-center justify-center bg-nyati-orange hover:bg-nyati-navy text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors duration-300 shadow-lg w-full sm:w-auto"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {brochureTranslations.downloadButton}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
        {/* Additional Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-nyati-navy mb-4">{brochureTranslations.additionalResources.title}</h2>
            <motion.div
              className="h-1.5 w-0 bg-nyati-orange mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-gray-600 max-w-3xl mx-auto">
              {brochureTranslations.additionalResources.description}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Product Catalog */}
            <motion.div 
              className="bg-white rounded-sm shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <Link href="/products" className="block">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-sm bg-nyati-orange/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">{brochureTranslations.additionalResources.resources.catalog.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {brochureTranslations.additionalResources.resources.catalog.description}
                  </p>
                  <div className="flex items-center text-nyati-orange font-medium">
                    <span>{brochureTranslations.additionalResources.resources.catalog.linkText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Certifications */}
            <motion.div 
              className="bg-white rounded-sm shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <Link href="/about/certifications" className="block">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-sm bg-nyati-orange/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">{brochureTranslations.additionalResources.resources.certifications.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {brochureTranslations.additionalResources.resources.certifications.description}
                  </p>
                  <div className="flex items-center text-nyati-orange font-medium">
                    <span>{brochureTranslations.additionalResources.resources.certifications.linkText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
            
            {/* Contact Sales */}
            <motion.div 
              className="bg-white rounded-sm shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <Link href="/contact" className="block">
                <div className="p-6">
                  <div className="w-16 h-16 rounded-sm bg-nyati-orange/10 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-nyati-navy mb-2">{brochureTranslations.additionalResources.resources.contact.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {brochureTranslations.additionalResources.resources.contact.description}
                  </p>
                  <div className="flex items-center text-nyati-orange font-medium">
                    <span>{brochureTranslations.additionalResources.resources.contact.linkText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}