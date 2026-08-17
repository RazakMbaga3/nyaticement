'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Newsletter from '@/app/components/ui/Newsletter';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useTranslations } from '@/app/hooks/useTranslations';
import csrEn from '../../translations/csr-en.json';
import csrSw from '../../translations/csr-sw.json';

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

const bulletPoint = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function EnhancedCSRPage() {
  // Refs for scroll animations
  const contentRef = useRef(null);
  const parallaxRef = useRef(null);

  // Scroll progress for parallax effect
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  // Transform for parallax movement
  const y = useTransform(parallaxProgress, [0, 1], [0, 100]);
  // Get language context and translations
  const { language } = useLanguage();
  const { t } = useTranslations();

  // Page-specific translations, statically bundled (no client round-trip, no
  // build-time "missing" false alarms from an async load that hasn't resolved yet)
  const pageTranslations = language === 'sw' ? csrSw : csrEn;
  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'csrPage.hero.title')
    const keys = key.split('.');
    let value = pageTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // If the key is not found, check if it might be a direct key without nesting
        if (pageTranslations && typeof pageTranslations === 'object' && key in pageTranslations) {
          return pageTranslations[key];
        }
        console.warn(`Translation key not found: ${key}`);
        return key; // Return the key if not found
      }
    }
    
    // Make sure we're returning a valid string, not an object
    if (value !== null && typeof value === 'object') {
      console.warn(`Translation value is an object, not a string: ${key}`);
      return key;
    }
    
    return value === null || value === undefined ? key : value;
  };  const csrInitiatives = Array.isArray(pageTranslations?.csrPage?.initiatives) 
    ? pageTranslations.csrPage.initiatives 
    : [
      {
        title: "SOCIETY",
        description: "In order to build a strong relationship with the surrounding community, we provide:",
        bullets: [
          { icon: "🎓", text: "Support to <strong>education</strong>" },
          { icon: "🤝", text: "<strong>Meaningful programs</strong> through reputed NGO partners" },
          { icon: "🏥", text: "<strong>Health programs</strong> through camps" }
        ],
        image: "/images/aboutus/csr_1.png",
        altText: "School education illustration"
      },
      {
        title: "ENVIRONMENT",
        description: "In order to minimise our impact on the environment and cut pollution and waste, we have undertaken following initiatives:",
        bullets: [
          { icon: "♻️", text: "Conducting energy conservation and waste reduction campaigns" },
          { icon: "💡", text: "Substituting power guzzling bulbs and equipment with energy-efficient alternatives" },
          { icon: "🏭", text: "Procuring the coal for the power plant from local sources in order to maintain a smaller carbon footprint" }
        ],
        image: "/images/aboutus/csr_2.png",
        altText: "Environmental sustainability illustration"
      },
      {
        title: "EMPLOYEES & SUPPLIERS",
        description: "We continuously engage with our employees and suppliers in order to align their expectations with our ambitions. Here are some ways in which we maintain a mutually enriching relationship with these stakeholders:",
        bullets: [
          { icon: "🔍", text: "By being open and honest about our products, their benefit and their limitation" },
          { icon: "📋", text: "Going beyond the minimum legal requirement when dealing with employees and promoting best practice in the workplace" }
        ],
        image: "/images/aboutus/csr_3.png",
        altText: "Employees and suppliers illustration"
      }
    ];
  // News articles data with bilingual support
  const newsArticles = [
    {
      id: 3,
      titles: {
        en: "Nyati Cement Donates Cement Bags for School Construction",
        sw: "Nyati Cement Yatoa Mifuko ya Saruji kwa Ajili ya Ujenzi wa Shule"
      },
      excerpts: {
        en: "Nyati Cement Donates 400 bags to the Bagamoyo District Commissioner for the construction of School. Showing our commitment to CSR and support for education infrastructure development in local communities.",
        sw: "Nyati Cement yatoa mifuko 400 kwa Mkuu wa Wilaya ya Bagamoyo kwa ajili ya ujenzi wa Shule. Ikionyesha dhamira yetu ya CSR na msaada kwa maendeleo ya miundombinu ya elimu katika jamii za ndani."
      },
      date: "2016-11-25",
      image: "/images/news/5.jpg",
      category: "csr",
      pillar: "education",
      featured: true
    },
    {
      id: 5,
      titles: {
        en: "Lake Cement Leads Blood Donation Drive to Save Lives",
        sw: "Lake Cement Yaongoza Kampeni ya Kutoa Damu kuokoa Maisha"
      },
      excerpts: {
        en: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
        sw: "Lake Cement imeonyesha uwajibikaji wa kijamii kupitia kampeni yenye athari ya kutoa damu katika kiwanda chetu. Mpango huu unalenga kushughulikia upungufu mkubwa wa ugavi wa damu katika mfumo wa afya wa Tanzania na kuonyesha dhamira yetu ya afya na ustawi wa jamii."
      },
      date: "2017-05-17",
      image: "/images/news/damu4.webp",
      category: "csr",
      pillar: "health",
      link: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html"
    },
    {
      id: 9,
      titles: {
        en: "Nyati Cement Hands Over Kigamboni Bus Terminal",
        sw: "Nyati Cement Wakabidhi Stendi ya Kigamboni"
      },
      excerpts: {
        en: "Nyati Cement has officially handed over the newly constructed Kigamboni Bus Terminal to the District Commissioner. The company invested 46 million shillings in this infrastructure project, demonstrating its commitment to supporting community development.",
        sw: "Nyati Cement imekabidhi rasmi Stendi mpya ya Mabasi ya Kigamboni kwa Mkuu wa Wilaya. Kampuni ilitumia shilingi milioni 46 katika mradi huu wa miundombinu, ikionyesha dhamira yake ya kusaidia maendeleo ya jamii."
      },
      date: "2022-11-08",
      image: "/images/news/bs2.webp",
      category: "csr",
      pillar: "community",
      featured: true,
      link: "https://www.michuzi.co.tz/2022/11/nyati-cement-wakabidhi-stendi-ya-kigamboni.html"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    // Use correct locale based on language
    return date.toLocaleDateString(language === 'sw' ? 'sw-TZ' : 'en-US', options);
  };

  // Helper function to get localized content based on current language
  const getLocalizedContent = (content, language) => {
    return content[language] || content['en']; // Fallback to English if translation not available
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[55vh] lg:min-h-[60vh] overflow-hidden bg-nyati-navy">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news/csrhero.webp"
            alt="Corporate Social Responsibility"
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
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('csrPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><Link href="/about" className="hover:text-nyati-orange transition-colors">{pt('csrPage.hero.breadcrumb.about')}</Link></li>
                <li><span className="text-white/40">/</span></li>
                <li><span className="text-white">{pt('csrPage.hero.breadcrumb.csr')}</span></li>
              </ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[0.98]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pt('csrPage.hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('csrPage.hero.highlight')}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/75 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {pt('csrPage.hero.description')}
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-12">
        {/* CSR Initiatives Section */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >            <h2 className="text-3xl font-bold text-nyati-green mb-4">
              {pt('csrPage.approach.title')}
            </h2>
            <p className="text-gray-700 max-w-4xl mx-auto">
              {pt('csrPage.approach.description')}
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {csrInitiatives.map((initiative, index) => (
              <motion.div 
                key={index}
                variants={cardVariant}
                whileHover="hover"
                className="bg-white border border-gray-200 overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nyati-navy mb-4">{initiative.title}</h3>
                  <p className="text-gray-700 mb-6">{initiative.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {initiative.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 text-2xl text-nyati-orange">{bullet.icon}</span>
                        <span 
                          className="text-gray-700" 
                          dangerouslySetInnerHTML={{ __html: bullet.text }}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="relative h-40 w-full">
                    <Image 
                      src={initiative.image}
                      alt={initiative.altText}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Impact Stories Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 py-4"
        >
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-6">              <h2 className="text-3xl font-bold text-nyati-green mb-4">
                {pt('csrPage.impactStories.title')}
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                {pt('csrPage.impactStories.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.slice(0, 3).map((article) => (
                <motion.div 
                  key={article.id}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-gray-200 overflow-hidden"
                >                  <div className="relative h-52 overflow-hidden">
                    <Image 
                      src={article.image} 
                      alt={getLocalizedContent(article.titles, language)} 
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />                    <div className="absolute top-0 right-0 m-3">
                      <span className="bg-nyati-green text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                        {pt(`csrPage.pillars.${article.pillar === 'health' ? 'healthcare' : article.pillar}.name`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-gray-500 mb-2">
                      {formatDate(article.date)}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-nyati-green line-clamp-2">
                      {getLocalizedContent(article.titles, language)}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {getLocalizedContent(article.excerpts, language)}
                    </p>
                    <Link 
                      href={`/news/${article.id}`}
                      className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors"
                    >                      {pt('csrPage.impactStories.readMore')}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                href="/news" 
                className="inline-flex items-center px-6 py-3 bg-nyati-green text-white hover:bg-nyati-green/90 transition-colors"
              >                {pt('csrPage.impactStories.viewAll')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Get Involved Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white py-6"
        >
          <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-2">            <h2 className="text-3xl font-bold text-nyati-green mb-4">
              {pt('csrPage.getInvolved.title')}
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {pt('csrPage.getInvolved.description')}
            </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-200 p-8"
            >
              <div className="w-16 h-16 bg-nyati-green/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>              <h3 className="text-xl font-bold text-nyati-navy mb-2">
                {pt('csrPage.getInvolved.partnership.title')}
              </h3>
              <p className="text-gray-700 mb-2">
                {pt('csrPage.getInvolved.partnership.description')}
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-5 py-2 bg-nyati-orange text-white hover:bg-nyati-orange/90 transition-colors"
              >
                {pt('csrPage.getInvolved.partnership.button')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-200 p-8"
            >
              <div className="w-16 h-16 bg-nyati-green/10 flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>              <h3 className="text-xl font-bold text-nyati-navy mb-2">
                {pt('csrPage.getInvolved.support.title')}
              </h3>
              <p className="text-gray-700 mb-2">
                {pt('csrPage.getInvolved.support.description')}
              </p>
              <Link 
                href="/news"
                className="inline-flex items-center px-5 py-2 bg-nyati-green text-white hover:bg-nyati-green/90 transition-colors"
              >
                {pt('csrPage.getInvolved.support.button')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Newsletter />
        </motion.div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-nyati-green via-nyati-orange to-nyati-navy"></div>
        </div>
      </main>
    </div>
  )
}