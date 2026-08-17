'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';
import aboutUsEn from '../../translations/about-us-en.json';
import aboutUsSw from '../../translations/about-us-sw.json';

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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    }
  },
  hover: { 
    y: -5, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2 
    }
  }
};

// Component for compact info cards
const CompactInfoCard = ({ title, imageSrc, description, linkPath, index }) => {
  // Get language context to access the translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white border border-gray-200 overflow-hidden flex flex-col h-full"
    >
      <div className="relative h-32 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 to-transparent">
          <div className="absolute bottom-3 left-3">
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-3 flex-grow">
        <p className="text-sm text-gray-700">{description}</p>
        <motion.a 
          href={linkPath}
          className="mt-2 text-nyati-orange text-sm font-medium inline-block"
          whileHover={{ x: 5 }}
        >
          {t('learnMore')} &rarr;
        </motion.a>
      </div>
    </motion.div>
  );
};

// Core Values Card Component
const CoreValueCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white border border-gray-200 overflow-hidden relative group"
    >
      <div className={`p-5 transition-all duration-300 ${isHovered ? 'bg-nyati-light-orange bg-opacity-5' : ''}`}>
        <div className="flex mb-3">
          <div className="w-12 h-12 bg-nyati-orange/10 flex items-center justify-center mr-3">
            <span className="text-nyati-orange text-xl">{icon}</span>
          </div>
          <h3 className="text-lg font-bold text-nyati-navy self-center">{title}</h3>
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <p className="text-sm text-nyati-navy">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Advantage Item Component
const AdvantageItem = ({ title, description, index }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white border border-gray-200 overflow-hidden"
    >
      <div className="flex items-center">
        <div className="bg-nyati-orange w-2 self-stretch"></div>
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-nyati-orange text-lg font-bold">{index + 1}</span>
        </div>
        <div className="p-3">
          <h3 className="text-nyati-navy font-bold">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutUsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  const [activeVisionMission, setActiveVisionMission] = useState(null);

  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  // Page-specific translations, statically bundled (no client round-trip, no
  // build-time "missing" false alarms from an async load that hasn't resolved yet)
  const pageTranslations = language === 'sw' ? aboutUsSw : aboutUsEn;

  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'aboutUsPage.hero.title')
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

  const advantages = [
    {
      title: "Integrated Manufacturing",
      description: "Full control over production process ensures consistent quality and reliability."
    },
    {
      title: "Own Power for Uninterrupted Production",
      description: "10MW thermal power plant guarantees continuous operations independent of grid issues."
    },
    {
      title: "Own Clinker",
      description: "In-house clinker production maintains quality control from raw materials to final product."
    },
    {
      title: "Consistent Quality",
      description: "Rigorous testing at every stage ensures our cement meets the highest standards every time."
    },
    {
      title: "Better Energy-Efficiency",
      description: "Modern equipment and processes minimize energy consumption and reduce environmental impact."
    },
    {
      title: "Enhanced Sustainability",
      description: "Commitment to sustainable practices in production and community engagement."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[60vh] overflow-hidden bg-nyati-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutus/group1.jpg"
            alt="About Lake Cement"
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
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('aboutUsPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">{pt('aboutUsPage.hero.breadcrumb.about')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><span className="text-white">{pt('aboutUsPage.hero.breadcrumb.aboutUs')}</span></li>
              </ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pt('aboutUsPage.hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('aboutUsPage.hero.highlight')}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/75 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {pt('aboutUsPage.hero.description')}
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeIn}
              className="mb-8"
            >
              <motion.div className="flex items-center mb-4">
                <motion.h1 
                  variants={slideUp}
                  className="text-nyati-orange text-2xl md:text-3xl font-bold"
                >
                  {pt('aboutUsPage.aboutSection.title')}
                </motion.h1>
                <div className="h-px flex-grow bg-gray-200 ml-4"></div>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                className="space-y-2 mb-8 bg-white p-6 border border-gray-200"
              >
                {Array.isArray(pageTranslations?.aboutUsPage?.aboutSection?.paragraphs) ?
                  pageTranslations.aboutUsPage.aboutSection.paragraphs.map((paragraph, index) => (
                    <motion.p 
                      key={index}
                      variants={slideUp}
                      className="text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace(
                          pt('aboutUsPage.aboutSection.brandName'),
                          `<strong class="text-nyati-orange">${pt('aboutUsPage.aboutSection.brandName')}</strong>`
                        )
                      }}
                    />
                  ))
                :
                  <>
                    <motion.p 
                      variants={slideUp}
                      className="text-sm md:text-base"
                    >
                      Lake Cement Ltd is a specialist in cement manufacturing with a state-of-the-art fully integrated cement plant, with a captive 10MW thermal power plant. Our plant is located in the Kigamboni district of Dar es Salaam and has an installed capacity of 1,000,000 MT per annum.
                    </motion.p>
                    <motion.p 
                      variants={slideUp}
                      className="text-sm md:text-base"
                    >
                      We produce consistent high quality cement for which we have leveraged best-in-class technologies and extensive sectoral experience. We started production in 2014 under the <strong className="text-nyati-orange">Nyati Cement</strong> brand. <strong className="text-nyati-orange">Nyati Cement</strong> is now the leading cement brand not only in Tanzania, but also has prominence in Rwanda, Burundi and other neighboring countries.
                    </motion.p>
                  </>
                }
              </motion.div>

              {/* Enhanced Mission & Vision Section */}
              <motion.div 
                variants={fadeIn}
                className="mb-12"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    variants={cardVariant}
                    whileHover="hover"
                    onMouseEnter={() => setActiveVisionMission('mission')}
                    onMouseLeave={() => setActiveVisionMission(null)}
                    className={`transition-all duration-300 border overflow-hidden ${activeVisionMission === 'mission' ? 'bg-nyati-navy border-nyati-navy' : 'bg-white border-gray-200'}`}
                  >
                    <div className="p-6">
                      <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'mission' ? 'text-nyati-orange' : 'text-nyati-orange'}`}>
                        {pt('aboutUsPage.missionVision.mission.title')}
                      </h2>
                      <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'mission' ? 'text-white' : 'text-gray-700'}`}> 
                        {pt('aboutUsPage.missionVision.mission.description')}
                      </p>
                    </div>
                  </motion.div>
                  <motion.div 
                    variants={cardVariant}
                    whileHover="hover"
                    onMouseEnter={() => setActiveVisionMission('vision')}
                    onMouseLeave={() => setActiveVisionMission(null)}
                    className={`transition-all duration-300 border overflow-hidden ${activeVisionMission === 'vision' ? 'bg-nyati-orange border-nyati-orange' : 'bg-white border-gray-200'}`}
                  >
                    <div className="p-6">
                      <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'vision' ? 'text-white' : 'text-nyati-navy'}`}>
                        {pt('aboutUsPage.missionVision.vision.title')}
                      </h2>
                      <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'vision' ? 'text-white' : 'text-gray-700'}`}>
                        {pt('aboutUsPage.missionVision.vision.description')}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Core Values Section */}
              <motion.div
                variants={fadeIn}
                className="mb-12"
              >
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-nyati-navy">{pt('aboutUsPage.coreValues.title')}</h2>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  {Array.isArray(pageTranslations?.aboutUsPage?.coreValues?.values) ?
                    pageTranslations.aboutUsPage.coreValues.values.map((value, index) => (
                      <CoreValueCard 
                        key={index}
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                      />
                    ))
                    :
                    <>
                      <CoreValueCard 
                        icon="⚖️"
                        title="Integrity"
                        description="Honest and accurate reporting of performance, both internally and externally, creating an environment conducive to proper business conduct."
                      />
                      <CoreValueCard 
                        icon="🤝"
                        title="Responsibility"
                        description="Protecting our stakeholders' interests is our responsibility, making it the core of all our policies and management decisions."
                      />
                      <CoreValueCard 
                        icon="🔒"
                        title="Trust"
                        description="We are the trustees of the trust reposed on us by our stakeholders, guiding our actions and decisions at every level."
                      />
                      <CoreValueCard 
                        icon="👥"
                        title="Cooperative Effort"
                        description="We recognize that our society and surrounding communities are important stakeholders, making us responsible to practice good corporate citizenship."
                      />
                    </>
                  }
                </div>
              </motion.div>
              
              {/* Lake Cement Advantage Section */}
              <motion.div
                variants={fadeIn}
                className="mb-12"
              >
                <div className="bg-nyati-navy p-6 border-t-2 border-nyati-orange mb-6">
                  <h2 className="text-xl font-bold text-white mb-1">{pt('aboutUsPage.advantage.title')}</h2>
                  <p className="text-white/80 text-sm">{pt('aboutUsPage.advantage.description')}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-3">
                  {Array.isArray(pageTranslations?.aboutUsPage?.advantage?.advantages) ?
                    pageTranslations.aboutUsPage.advantage.advantages.map((advantage, index) => (
                      <AdvantageItem 
                        key={index}
                        title={advantage.title}
                        description={advantage.description}
                        index={index}
                      />
                    ))
                    :
                    advantages.map((advantage, index) => (
                      <AdvantageItem 
                        key={index}
                        title={advantage.title}
                        description={advantage.description}
                        index={index}
                      />
                    ))
                  }
                </div>
              </motion.div>              {/* Info Cards Section - Compact Grid */}
              <motion.div 
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-4"
              >
                {Array.isArray(pageTranslations?.aboutUsPage?.infoCards) ?
                  pageTranslations.aboutUsPage.infoCards.map((card, index) => (
                    <CompactInfoCard 
                      key={index}
                      title={card.title}
                      imageSrc={`/images/aboutus/img${index + 1}.jpg`}
                      description={card.description}
                      linkPath={card.linkPath}
                      index={index}
                    />
                  ))
                :
                  <>
                    <CompactInfoCard 
                      title="THE PLANT"
                      imageSrc="/images/aboutus/img1.jpg"
                      description="Our integrated cement manufacturing unit, spread in an area of over 100 hectares, is the most modern, fully automated and energy-efficient plant of its kind in East Africa."
                      linkPath="/about/plant"
                      index={0}
                    />
                    
                    <CompactInfoCard 
                      title="CSR"
                      imageSrc="/images/aboutus/img2.jpg"
                      description="In addition to being a profitable corporate entity, we also strive to be a responsible corporate citizen. Our CSR initiatives traverse a wide spectrum of stakeholders."
                      linkPath="/about/csr"
                      index={1}
                    />
                    
                    <CompactInfoCard 
                      title="CODE OF CONDUCT"
                      imageSrc="/images/aboutus/img3.jpg"
                      description="Our Code of Conduct helps maintain the standard of business conduct at Lake Cement and ensures compliance with legal requirements."
                      linkPath="/about/code-of-conduct"
                      index={2}
                    />
                  </>
                }
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}