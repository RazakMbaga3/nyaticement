'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07
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
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const imageVariant = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

const downloadButtonVariant = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export default function CertificationsClient({ certifications }) {
  const parallaxRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  // State for page-specific translations
  const [pageTranslations, setPageTranslations] = useState({});
  const [translatedCertifications, setTranslatedCertifications] = useState(certifications);
  
  // Load page-specific translations
  useEffect(() => {
    const loadPageTranslations = async () => {
      try {
        const response = await import(`../../translations/certifications-${language}.json`);
        setPageTranslations(response.default);
        // If we have translated categories, use them instead of the hardcoded ones
        if (response.default?.certificationsPage?.categories) {
          setTranslatedCertifications(response.default.certificationsPage.categories);
        }
      } catch (error) {
        console.error('Error loading page translations:', error);
        // Fallback to English
        try {
          const fallback = await import('../../translations/certifications-en.json');
          setPageTranslations(fallback.default);
          if (fallback.default?.certificationsPage?.categories) {
            setTranslatedCertifications(fallback.default.certificationsPage.categories);
          }
        } catch (fallbackError) {
          console.error('Error loading fallback translations:', fallbackError);
          // Keep using the prop certifications as a last resort
          setTranslatedCertifications(certifications);
        }
      }
    };
    
    loadPageTranslations();
  }, [language, certifications]);
  
  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'certificationsPage.hero.title')
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

  // Filter out empty categories and combine Last two categories
  const filteredCertifications = translatedCertifications.filter(section => section.category);

  // Awards data (images located in public/images/certifications/awards)
  const awardsData = [
    {
      title: {
        en: 'AOSH 2024 - 1st Runner Up (Head Office)',
        sw: 'AOSH 2024 - Mshindi wa Pili (Makao Makuu)'
      },
      year: '2024',
      description: {
        en: '1st Runner Up for our Head Office in the Office Support category at AOSH 2024. Shows our commitment to safety and health in corporate offices. Recognized by OSHA.',
        sw: 'Mshindi wa pili Makao Makuu, kitengo cha Usaidizi wa Ofisi, AOSH 2024. Inaonyesha kujitolea kwetu kwa usalama na afya ofisini. Imethibitishwa na OSHA.'
      },
      image: '/images/certifications/awards/38cca972-e934-4ba2-a292-98428e89452c.webp'
    },
    {
      title: {
        en: 'Certificate of Sponsorship',
        sw: 'Cheti cha Udhamini'
      },
      year: 'February 23, 2022',
      description: {
        en: 'Awarded for supporting the 4th International Mineral and Mining Conference. Highlights our commitment to Tanzania’s mining sector. Presented by Ministry of Minerals.',
        sw: 'Imetolewa kwa kusaidia Mkutano wa 4 wa Kimataifa wa Madini na Migodi. Inaonyesha kujitolea kwetu sekta ya madini Tanzania. Imewasilishwa na Wizara ya Madini.'
      },
      image: '/images/certifications/awards/014cbba6-3cbc-41d7-97d4-087c2f029a58.webp'
    },
    {
      title: {
        en: 'Occupational Safety and Health (AOSH) Award',
        sw: 'Tuzo ya Usalama na Afya Kazini (AOSH)'
      },
      year: '2024',
      description: {
        en: 'Recognized for top safety standards in cement manufacturing. Awarded during World Day for Safety and Health at Work. Presented by OSHA.',
        sw: 'Imetambuliwa kwa viwango bora vya usalama kwenye utengenezaji wa saruji. Tuzo ya Siku ya Usalama na Afya Kazini. Imewasilishwa na OSHA.'
      },
      image: '/images/certifications/awards/d6571d79-903b-4438-86fa-09389806a79d.webp'
    },
    {
      title: {
        en: 'Occupational Safety and Health (AOSH) Award - Manufacturing Sector',
        sw: 'Tuzo ya Usalama na Afya Kazini (AOSH)- Sekta ya Uzalishaji'
      },
      year: '2021',
      description: {
        en: 'Awarded for excellence in workplace safety in manufacturing. Recognizes our safe operations across all sectors. Presented by OSHA.',
        sw: 'Imetunukiwa kwa ubora wa usalama kazini sekta ya uzalishaji. Inatambua usalama wa shughuli zetu zote. Imewasilishwa na OSHA.'
      },
      image: '/images/certifications/awards/c1c23faf-deb7-494c-bb5e-1541f23ddd6f (1).webp'
    },
    {
      title: {
        en: 'Best Winner in Occupational Safety and Health (AOSH) Award',
        sw: 'Mshindi Bora wa Tuzo ya Usalama na Afya Kazini (AOSH)'
      },
      year: '2016',
      description: {
        en: 'Honored for outstanding commitment to a safe and healthy workplace. Early recognition of our safety culture. Presented by OSHA.',
        sw: 'Imetambuliwa kwa kujitolea kwa mazingira salama na yenye afya kazini. Tuzo ya awali ya utamaduni wa usalama. Imewasilishwa na OSHA.'
      },
      image: '/images/certifications/awards/7787bf48-6961-41ed-a861-05089c2e6d2a.webp'
    },
    {
      title: {
        en: 'Water Resources Management Recognition',
        sw: 'Kutambuliwa kwa Usimamizi wa Rasilimali za Maji'
      },
      year: '2022',
      description: {
        en: 'Recognized for responsible water management and environmental stewardship. Awarded by WRBWB. Shows our commitment to sustainability.',
        sw: 'Imetambuliwa kwa usimamizi bora wa maji na utunzaji wa mazingira. Tuzo ya WRBWB. Inaonyesha kujitolea kwetu kwa uendelevu.'
      },
      image: '/images/certifications/awards/8b06153a-d54b-499e-9af5-1ff9a103b463.webp'
    },
    {
      title: {
        en: 'TANESCO Kigamboni Region Appreciation',
        sw: 'Shukrani kutoka TANESCO Kigamboni'
      },
      year: '',
      description: {
        en: 'Appreciation for strong partnerships and continued support to TANESCO Kigamboni. Recognizes our valuable relationship with utilities.',
        sw: 'Shukrani kwa ushirikiano imara na msaada endelevu kwa TANESCO Kigamboni. Inatambua uhusiano wetu na watoa huduma.'
      },
      image: '/images/certifications/awards/73e69476-9992-482d-84a5-c9f5de3842ab.webp'
    },
    {
      title: {
        en: 'Cheti cha Shukrani (Kigamboni Municipal Council)',
        sw: 'Cheti cha Shukrani (Halmashauri ya Manispaa ya Kigamboni)'
      },
      year: '',
      description: {
        en: 'Certificate of appreciation for leadership and cooperation with Kimbiji Ward. Highlights our support for community development.',
        sw: 'Cheti cha shukrani kwa uongozi na ushirikiano na jamii ya Kimbiji. Inaonyesha mchango wetu kwa maendeleo ya jamii.'
      },
      image: '/images/certifications/awards/d48e5422-450b-4f03-b343-120433f9e635.webp'
    },
    {
      title: {
        en: 'Cheti cha Shukrani (TALGWU)',
        sw: 'Cheti cha Shukrani (TALGWU)'
      },
      year: '2024',
      description: {
        en: 'Honored for supporting workers’ rights and social events during International Women’s Day. Presented by TALGWU.',
        sw: 'Imetambuliwa kwa kusaidia haki za wafanyakazi na matukio ya kijamii Siku ya Wanawake Duniani. Imewasilishwa na TALGWU.'
      },
      image: '/images/certifications/awards/a3a8adb5-c318-48c5-a996-95556d2aea16.webp'
    },
    {
      title: {
        en: 'Cheti cha Kuwa Mwajiri Bora (Best Employer)',
        sw: 'Cheti cha Kuwa Mwajiri Bora (Mwajiri Bora)'
      },
      year: '2015-2016',
      description: {
        en: 'Recognized as Best Employer for excellent labor relations and employee welfare. Awarded by TUICO.',
        sw: 'Imetambuliwa kama Mwajiri Bora kwa mahusiano bora ya kazi na ustawi wa wafanyakazi. Tuzo ya TUICO.'
      },
      image: '/images/certifications/awards/9ede846d-6613-41e1-873d-e9539b865fde.webp'
    },
    {
      title: {
        en: 'Occupational Safety and Health (AOSH) Certificate of Award',
        sw: 'Cheti cha Tuzo ya Usalama na Afya Kazini (AOSH)'
      },
      year: 'April 28, 2021',
      description: {
        en: 'Winner for safety excellence in manufacturing on World Day for Safety and Health at Work. Presented by Prime Minister’s Office.',
        sw: 'Mshindi wa ubora wa usalama katika uzalishaji Siku ya Usalama na Afya Kazini. Imewasilishwa na Ofisi ya Waziri Mkuu.'
      },
      image: '/images/certifications/awards/a2c55ea4-5707-4fe3-8739-3a7014201976.webp'
    },
    {
      title: {
        en: "District Commissioner's Office Appreciation Award",
        sw: 'Tuzo ya Shukrani ya Ofisi ya Mkuu wa Wilaya'
      },
      year: 'March 26, 2020',
      description: {
        en: 'Awarded for significant contribution to Kigamboni development and community support. Presented by District Commissioner.',
        sw: 'Imetolewa kwa mchango mkubwa katika maendeleo ya Kigamboni na msaada kwa jamii. Imewasilishwa na Mkuu wa Wilaya.'
      },
      image: '/images/certifications/awards/dce7aed3-6613-4c45-9dad-07ca6e687d83.webp'
    }
  ].sort((a, b) => {
    // Sort by year/date descending
    const parseYear = (y) => {
      if (!y) return 0;
      if (/\d{4}$/.test(y)) return parseInt(y.slice(-4));
      if (/\d{4}/.test(y)) return parseInt(y.match(/\d{4}/)[0]);
      return 0;
    };
    return parseYear(b.year) - parseYear(a.year);
  });

  // AwardsSection component (bilingual gallery with modal)
  function AwardsSection({ items = [] }) {
    const [openIndex, setOpenIndex] = useState(null);
    const { language } = useLanguage();
    const lang = language === 'sw' ? 'sw' : 'en';

    return (
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-nyati-navy"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {lang === 'sw' ? 'Tuzo' : 'Awards'}
            </motion.h2>
            <div className="h-px flex-grow ml-6 bg-gradient-to-r from-gray-200 to-transparent"></div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((a, i) => (
              <motion.button
                key={`${a.title[lang]}-${i}`}
                onClick={() => setOpenIndex(i)}
                className="bg-white rounded-sm shadow-soft overflow-hidden text-left p-4 flex flex-col items-start"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-full h-40 mb-3 bg-gray-50 rounded-sm p-3">
                  <Image src={a.image} alt={a.title[lang]} fill className="object-contain" />
                </div>
                <div className="text-sm font-semibold text-nyati-navy">{a.title[lang]}</div>
                {a.year && a.year.trim() ? <div className="text-xs text-gray-500">{a.year}</div> : null}
                {a.description[lang] ? <div className="text-xs text-gray-600 mt-2">{a.description[lang]}</div> : null}
              </motion.button>
            ))}
          </motion.div>

          {openIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setOpenIndex(null)}>
              <div className="bg-white rounded-sm overflow-hidden max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="relative w-full h-[70vh]">
                  <Image src={items[openIndex].image} alt={items[openIndex].title[lang]} fill className="object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{items[openIndex].title[lang]}</h3>
                  {items[openIndex].year && items[openIndex].year.trim() ? <div className="text-xs text-gray-500 mb-2">{items[openIndex].year}</div> : null}
                  {items[openIndex].description[lang] ? <p className="text-sm text-gray-700 mt-2">{items[openIndex].description[lang]}</p> : null}
                  <div className="mt-3 text-right">
                    <button onClick={() => setOpenIndex(null)} className="px-3 py-1 bg-nyati-navy text-white rounded-sm">{lang === 'sw' ? 'Funga' : 'Close'}</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <div className="bg-gray-50">      {/* Hero Section with Modern Design */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image 
              src="/images/certifications/CERTIMG.jpg"
              alt="Our Certifications"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/95 via-nyati-navy/40 to-transparent"></div>
          </div>

          {/* Animated Decorative Elements */}
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.15, 0.05] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="absolute top-20 right-10 w-64 h-64 bg-nyati-orange/10 rounded-full blur-3xl"
          />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.05, 0.1, 0.05] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute bottom-20 left-20 w-56 h-56 bg-nyati-green/10 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            {/* Breadcrumb */}
            <motion.nav 
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('certificationsPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">{pt('certificationsPage.hero.breadcrumb.about')}</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">{pt('certificationsPage.hero.breadcrumb.certifications')}</span></li>
              </ol>
            </motion.nav>            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
            {language === 'sw' ? 'Vyeti na Tuzo' : 'Certifications & Awards'}
            </motion.h1>
            
            <motion.p
              className="text-lg text-white/90 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {pt('certificationsPage.hero.description')}
            </motion.p>

            <motion.div 
              className="h-1 w-24 bg-nyati-orange mt-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </div>
        </div>
      </section>

      {/* Certifications Grid Section */}      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {filteredCertifications.map((section, sectionIndex) => (
            <div key={section.category} className="mb-16 last:mb-0">
              <div className="flex items-center mb-8">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold text-nyati-navy"
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {section.category}
                </motion.h2>
                <div className="h-px flex-grow ml-6 bg-gradient-to-r from-gray-200 to-transparent"></div>
              </div>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {section.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariant}
                    whileHover="hover"
                    className="bg-white rounded-sm shadow-soft overflow-hidden group"
                  >
                    <div className="p-6">
                      {item.image && (
                        <div className="relative">
                          <motion.div 
                            className="mb-6 relative h-28 bg-gray-50 rounded-sm p-4 overflow-hidden"
                            variants={imageVariant}
                            whileHover="hover"
                          >
                            <Image
                              src={item.image}
                              alt={item.alt || item.title}
                              fill
                              className="object-contain"
                            />
                          </motion.div>
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-nyati-navy mb-3 group-hover:text-nyati-orange transition-colors">
                        {item.title}
                      </h3>
                      {item.subItems && item.subItems.length > 0 && (
                        <ul className="list-none space-y-2 text-gray-600 text-sm mb-6">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className="text-nyati-orange mr-2">•</span>
                              {subItem}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {item.downloadLink && (
                        <Link 
                          href={item.downloadLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-nyati-navy text-white rounded-sm hover:bg-nyati-navy/90 transition-all group/button"
                        >
                          <motion.span 
                            variants={downloadButtonVariant}
                            initial="rest"
                            whileHover="hover"
                            className="flex items-center"
                          >                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-5 w-5 mr-2 group-hover/button:-translate-y-0.5 transition-transform" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                              />
                            </svg>
                            {pt('certificationsPage.downloadButton')}
                          </motion.span>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Trophies Section */}
      <AwardsSection items={Array.isArray(pageTranslations?.certificationsPage?.awards) ? pageTranslations.certificationsPage.awards : awardsData} />
    </div>
  );
}
