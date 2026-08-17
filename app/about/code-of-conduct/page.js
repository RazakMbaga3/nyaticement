'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';
import codeOfConductEn from '../../translations/code-of-conduct-en.json';
import codeOfConductSw from '../../translations/code-of-conduct-sw.json';

// Icons for core values
const icons = {
  "balance-scale": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  "hands-helping": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
    </svg>
  ),
  "handshake": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  "users": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  "random": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  "user-secret": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  ),
  "laptop": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  "building": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  "file-contract": (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
}

export default function CodeOfConductPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();

  // Page-specific translations, statically bundled (no client round-trip, no
  // build-time "missing" false alarms from an async load that hasn't resolved yet)
  const pageTranslations = language === 'sw' ? codeOfConductSw : codeOfConductEn;

  // Helper function to get page translations with fallback
  const pt = (key) => {
    try {
      // Support nested keys using dot notation (e.g., 'hero.title')
      const keys = key.split('.');
      let value = pageTranslations;
      
      for (const k of keys) {
        value = value?.[k];
      }
      
      return value || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };
  return (
    <div className="bg-gray-50">
      {/* Set page title and meta based on language */}
      <title>{pt('meta.title')}</title>
      <meta name="description" content={pt('meta.description')} />
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[60vh] overflow-hidden bg-nyati-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/career7.jpg"
            alt={pt('meta.title')}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy via-nyati-navy/85 to-nyati-navy/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-end h-full max-w-4xl pb-14">
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('hero.breadcrumbs.home')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">{pt('hero.breadcrumbs.about')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><span className="text-white">{pt('hero.breadcrumbs.current')}</span></li>
              </ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pt('hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('hero.titleSpan')}</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/75 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {pt('hero.description')}
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('hero.stats.compliance.value')}</div>
                <div className="text-white text-sm">{pt('hero.stats.compliance.label')}</div>
              </div>
              <div className="bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('hero.stats.corruption.value')}</div>
                <div className="text-white text-sm">{pt('hero.stats.corruption.label')}</div>
              </div>
              <div className="hidden md:block bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('hero.stats.support.value')}</div>
                <div className="text-white text-sm">{pt('hero.stats.support.label')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 max-w-5xl py-8">
        {/* Introduction with Card Layout */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-200 p-6 mb-8"
        >
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="md:w-1/4">
              <div className="w-16 h-16 bg-nyati-orange flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-nyati-navy">{pt('introduction.title')}</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-700 leading-relaxed">
                {pt('introduction.content')}
              </p>
            </div>
          </div>
        </motion.section>        {/* Core Values Section - Horizontal Layout */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-blue-200"></div>
            <h2 className="text-xl md:text-2xl font-bold px-4 text-nyati-navy">{pt('coreValues.title')}</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-blue-200"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pageTranslations?.coreValues?.values?.map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-nyati-light-orange/10 border border-gray-200 p-4 flex items-start transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mr-4 text-nyati-navy flex-shrink-0">
                  {icons[value.icon]}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-nyati-navy">{value.title}</h3>
                  <p className="text-sm text-gray-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>        {/* Guidelines Section with Compact Accordion */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center mb-6">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent to-blue-200"></div>
            <h2 className="text-xl md:text-2xl font-bold px-4 text-nyati-navy">{pt('guidelines.title')}</h2>
            <div className="h-px flex-grow bg-gradient-to-l from-transparent to-blue-200"></div>
          </div>

          <div className="space-y-2">
            {pageTranslations?.guidelines?.items?.map((guideline, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full px-4 py-3 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    <span className="w-8 h-8 bg-gray-100 flex items-center justify-center mr-3 text-nyati-navy">
                      {icons[guideline.icon]}
                    </span>
                    <span className="font-medium">{guideline.title}</span>
                  </div>
                  <motion.span 
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-500"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <motion.div 
                  initial={false}
                  animate={{ 
                    height: activeAccordion === index ? 'auto' : 0,
                    opacity: activeAccordion === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 border-t border-gray-100">
                    {guideline.contentList ? (
                      <>
                        <p className="text-gray-700 text-sm">{guideline.contentList.intro}</p>
                        <ul className="list-none mt-4 space-y-2">
                          {guideline.contentList.items.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-nyati-orange mr-2 mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </span>
                              <div>
                                <span className="font-bold">{item.title}</span> {item.description}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="text-gray-700 text-sm">{guideline.content}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}