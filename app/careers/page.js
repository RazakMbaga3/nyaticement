'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { useTranslations } from '@/app/hooks/useTranslations'
import careersEn from '../translations/careers-en.json'
import careersSw from '../translations/careers-sw.json'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function CareersPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  // Page-specific translations, statically bundled (no client round-trip, no
  // build-time "missing" false alarms from an async load that hasn't resolved yet)
  const pageTranslations = language === 'sw' ? careersSw : careersEn;

  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'careersPage.hero.title')
    const keys = key.split('.');
    let value = pageTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key if not found
      }
    }
    
    return value === null || value === undefined ? key : value;
  };

  // Slide data
  const slides = [
    {
      image: '/images/career1.jpg',
      title: 'Join Our Team',
      alt: 'Careers at Lake Cement'
    },
    {
      image: '/images/career2.jpg',
      title: 'Build Your Career',
      alt: 'Career Development'
    },
    {
      image: '/images/career4.jpg',
      title: 'Growth Opportunities',
      alt: 'Professional Growth'
    }
  ];

  // Handle automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[60vh] overflow-hidden bg-nyati-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/career5.jpg"
            alt="Join Our Team"
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
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('careersPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><span className="text-white">{pt('careersPage.hero.breadcrumb.careers')}</span></li>
              </ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pt('careersPage.hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('careersPage.hero.highlight')}</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/75 max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {pt('careersPage.hero.description')}
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('careersPage.hero.metrics.teamMembers.count')}</div>
                <div className="text-white text-sm">{pt('careersPage.hero.metrics.teamMembers.label')}</div>
              </div>
              <div className="bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('careersPage.hero.metrics.departments.count')}</div>
                <div className="text-white text-sm">{pt('careersPage.hero.metrics.departments.label')}</div>
              </div>
              <div className="hidden md:block bg-nyati-navy p-4">
                <div className="text-nyati-orange text-2xl font-bold mb-1">{pt('careersPage.hero.metrics.growthFocus.count')}</div>
                <div className="text-white text-sm">{pt('careersPage.hero.metrics.growthFocus.label')}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="relative bg-white min-h-screen z-10 border border-gray-200 mt-12">
          <div className="bg-white w-full h-full">
            <main className="py-16">
                <div className="container mx-auto px-4 max-w-6xl">
                  {/* Mission Statement - More compact */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-10 bg-white p-6 border border-gray-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-nyati-orange/10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-nyati-navy">{pt('careersPage.mission.title')}</h2>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {pt('careersPage.mission.description')}
                    </p>
                  </motion.div>

                  {/* Career Values Section - Horizontal scroll for mobile, grid for desktop */}
                  <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="mb-10"
                  >
                    <div className="flex items-center mb-6">
                      <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                      <h2 className="text-xl font-bold px-4 text-nyati-navy">{pt('careersPage.joinTeam.title')}</h2>
                      <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {Array.isArray(pageTranslations?.careersPage?.joinTeam?.values) ? 
                        pageTranslations.careersPage.joinTeam.values.map((value, index) => (
                          <motion.div 
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 p-5 flex items-start transition-all duration-300"
                          >
                            <div className="mr-4 bg-nyati-navy/5 p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />}
                                {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                                {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2 text-blue-900">{value.title}</h3>
                              <p className="text-gray-700 text-sm">
                                {value.description}
                              </p>
                            </div>
                          </motion.div>
                        ))
                        : 
                        <>
                          <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 p-5 flex items-start transition-all duration-300"
                          >
                            <div className="mr-4 bg-nyati-navy/5 p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2 text-blue-900">Innovation</h3>
                              <p className="text-gray-700 text-sm">
                                We foster a culture of innovation and continuous improvement in all aspects of our operations.
                              </p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 p-5 flex items-start transition-all duration-300"
                          >
                            <div className="mr-4 bg-nyati-navy/5 p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2 text-blue-900">Teamwork</h3>
                              <p className="text-gray-700 text-sm">
                                We believe in the power of collaboration and working together to achieve common goals.
                              </p>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 p-5 flex items-start transition-all duration-300"
                          >
                            <div className="mr-4 bg-nyati-navy/5 p-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="text-lg font-bold mb-2 text-blue-900">Excellence</h3>
                              <p className="text-gray-700 text-sm">
                                We are committed to maintaining the highest standards in everything we do.
                              </p>
                            </div>
                          </motion.div>
                        </>
                      }
                    </div>
                  </motion.section>

                  {/* Image and Benefits Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
                    {/* Image Section - Compact */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="lg:col-span-5 relative border border-gray-200 overflow-hidden h-80"
                    >
                      <Image 
                        src="/images/LakeCementStaffs121.jpg" 
                        alt="Graduates Together" 
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <h3 className="text-lg text-nyati-light-orange font-bold">{pt('careersPage.futureLeaders.title')}</h3>
                        <p className="text-sm text-white/90">{pt('careersPage.futureLeaders.description')}</p>
                      </div>
                    </motion.div>

                    {/* Benefits Section - Compact grid */}
                    <motion.div 
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={containerVariants}
                      className="lg:col-span-7"
                    >
                      <div className="flex items-center mb-4">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                        <h2 className="text-xl font-bold px-4 text-nyati-navy">{pt('careersPage.whyWorkWithUs.title')}</h2>
                        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Array.isArray(pageTranslations?.careersPage?.whyWorkWithUs?.benefits) ? 
                          pageTranslations.careersPage.whyWorkWithUs.benefits.map((benefit, index) => (
                            <motion.div 
                              key={index}
                              variants={cardVariants}
                              className="bg-white border border-gray-200 p-4 flex items-start transition-all duration-300"
                            >
                              <div className="mr-3 flex-shrink-0 bg-nyati-navy/5 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                                  {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />}
                                  {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-base font-bold mb-1 text-blue-900">{benefit.title}</h3>
                                <p className="text-gray-700 text-sm">{benefit.description}</p>
                              </div>
                            </motion.div>
                          ))
                          :
                          <>
                            <motion.div 
                              variants={cardVariants}
                              className="bg-white border border-gray-200 p-4 flex items-start transition-all duration-300"
                            >
                              <div className="mr-3 flex-shrink-0 bg-nyati-navy/5 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-base font-bold mb-1 text-blue-900">Competitive Compensation</h3>
                                <p className="text-gray-700 text-sm">Attractive salary packages and benefits that recognize your contributions.</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              variants={cardVariants}
                              className="bg-white border border-gray-200 p-4 flex items-start transition-all duration-300"
                            >
                              <div className="mr-3 flex-shrink-0 bg-nyati-navy/5 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-base font-bold mb-1 text-blue-900">Meaningful Work</h3>
                                <p className="text-gray-700 text-sm">Be part of Tanzania's infrastructure and development journey.</p>
                              </div>
                            </motion.div>
                            
                            <motion.div 
                              variants={cardVariants}
                              className="bg-white border border-gray-200 p-4 flex items-start transition-all duration-300"
                            >
                              <div className="mr-3 flex-shrink-0 bg-nyati-navy/5 p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-base font-bold mb-1 text-blue-900">Inclusive Environment</h3>
                                <p className="text-gray-700 text-sm">A diverse workplace that values different perspectives.</p>
                              </div>
                            </motion.div>
                          </>
                        }
                      </div>
                    </motion.div>
                  </div>                  {/* CTA Section - Matching the original design with image */}
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12"
                  >
                    <div className="bg-nyati-navy overflow-hidden relative border-t-2 border-nyati-orange">
                      {/* Right side image */}
                      <div className="absolute right-0 top-0 h-full w-full md:w-1/3 lg:w-2/5 z-0">
                        <div className="relative w-full h-full">
                          <Image
                            src="/images/LakeCementStaffs91.jpg"
                            alt="Join Our Team"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Content container */}
                      <div className="relative z-10 p-6 lg:p-8 flex flex-col lg:flex-row items-start justify-between">
                        <div className="flex-1 mb-6 lg:mb-0 max-w-2xl pr-0 md:pr-4">
                          <motion.h2 
                            className="text-2xl lg:text-3xl font-bold text-white mb-3"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                          >
                            {pt('careersPage.cta.title')}
                          </motion.h2>
                          <motion.p 
                            className="text-lg text-white/90 leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                          >
                            {pt('careersPage.cta.description')} <span className="font-semibold text-nyati-light-orange">{pt('careersPage.cta.emailLabel')}</span>
                          </motion.p>
                          
                          <motion.div
                            className="mt-6"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                          >
                            <Link 
                              href="/contact" 
                              className="inline-block bg-nyati-orange hover:bg-nyati-orange/90 text-white font-semibold px-8 py-4 transition-all duration-300"
                            >
                              {pt('careersPage.cta.buttonText')}
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                </div>
              </main>
            </div>
            {/* Additional white space to ensure footer overlap */}
            <div className="bg-white h-32"></div>
          </div>
        </div>
      </div>
  )
}
