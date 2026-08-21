'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';
import plantEn from '../../translations/plant-en.json';
import plantSw from '../../translations/plant-sw.json';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 } 
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Container for staggered animations
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hover animation for feature cards
const featureCardHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Plant features data
const plantFeatures = [
  {
    image: '/images/aboutus/the_plant-1.png',
    title: '10 MW Captive Power Plant',
    description: 'Tanzania\'s first cement plant to have captive power plant, ensuring uninterrupted production with consistent quality and enhanced equipment efficiency.'
  },
  {
    image: '/images/aboutus/the_plant-2.png',
    title: 'Expert Management',
    description: 'Managed, maintained and operated by a team of qualified cement industry professionals with over 20 years of experience.'
  },
  {
    image: '/images/aboutus/the_plant-3.png',
    title: 'Automated Packing',
    description: 'Equipped with a fully automated electronic packing machine to maintain a consistently accurate package weight.'
  },
  {
    image: '/images/aboutus/the_plant-4.png',
    title: 'Vertical Roller Mill',
    description: 'Tanzania\'s First cement plant with vertical roller mill for higher energy efficiency.'
  },
  {
    image: '/images/aboutus/the_plant-5.png',
    title: 'Clinker Storage',
    description: 'A closed clinker storage yard for storing 30,000 MT clinker.'
  },
  {
    image: '/images/aboutus/the_plant-6.png',
    title: 'Stacker and Reclaimer',
    description: 'Equipped with Stacker and Reclaimer for a homogenised feed to the raw mill.'
  }
];

export default function PlantPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  
  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  // Page-specific translations, statically bundled (no client round-trip, no
  // build-time "missing" false alarms from an async load that hasn't resolved yet)
  const pageTranslations = language === 'sw' ? plantSw : plantEn;

  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'plantPage.hero.title')
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

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[60vh] overflow-hidden bg-nyati-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/slideshow/1.jpeg"
            alt="Our Manufacturing Plant"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy via-nyati-navy/85 to-nyati-navy/25"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-end h-full max-w-4xl pb-14">
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-white/70">
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('plantPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">{pt('plantPage.hero.breadcrumb.about')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><span className="text-white">{pt('plantPage.hero.breadcrumb.plant')}</span></li>
              </ol>
            </nav>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pt('plantPage.hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('plantPage.hero.highlight')}</span>
            </motion.h1>
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {Array.isArray(pageTranslations?.plantPage?.hero?.stats) ? (
                pageTranslations.plantPage.hero.stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`bg-nyati-navy p-4 ${index === 5 ? 'hidden md:block' : ''}`}
                  >
                    <div className="text-nyati-orange text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white text-sm">{stat.label}</div>
                  </div>
                ))
              ) : (
                <>
                  <div className="bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">1M Tons</div>
                    <div className="text-white text-sm">Annual Capacity</div>
                  </div>
                  <div className="bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">Own</div>
                    <div className="text-white text-sm">Power</div>
                  </div>
                  <div className="bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">Own</div>
                    <div className="text-white text-sm">Clinker</div>
                  </div>
                  <div className="bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">Integrated</div>
                    <div className="text-white text-sm">Manufacturing</div>
                  </div>
                  <div className="bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">Enhanced</div>
                    <div className="text-white text-sm">Sustainability</div>
                  </div>
                  <div className="hidden md:block bg-nyati-navy p-4">
                    <div className="text-nyati-orange text-2xl font-bold mb-1">ISO</div>
                    <div className="text-white text-sm">Certified</div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 max-w-6xl py-12">
        {/* Introduction */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >          <motion.p 
            variants={slideUp}
            className="text-lg text-gray-700 max-w-4xl mx-auto text-center"
          >
            {pt('plantPage.introduction')}
          </motion.p>
        </motion.div>

        {/* Features Grid */}        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Array.isArray(pageTranslations?.plantPage?.features) 
            ? pageTranslations.plantPage.features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={slideUp}
                initial="rest"
                whileHover="hover"
                animate="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white border border-gray-200 overflow-hidden h-full"
              >
                <div className="p-6 flex items-start">
                  <div className="w-16 h-16 relative flex-shrink-0 mr-4">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={64}
                      height={64} 
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-nyati-orange">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
            : plantFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                variants={slideUp}
                initial="rest"
                whileHover="hover"
                animate="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white border border-gray-200 overflow-hidden h-full"
              >
                <div className="p-6 flex items-start">
                  <div className="w-16 h-16 relative flex-shrink-0 mr-4">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={64}
                      height={64} 
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-nyati-orange">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </motion.div>
      </main>
    </div>
  );
}