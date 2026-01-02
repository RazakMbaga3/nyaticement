'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/app/contexts/LanguageContext'
import { useTranslations } from '@/app/hooks/useTranslations'
import { newsArticles as allNewsArticles } from './newsData'

// Assume these components are properly implemented in your project
import NewsSlider from './components/NewsSlider'
import NewsGallery from './components/NewsGallery'
import Newsletter from '@/app/components/ui/Newsletter'

export default function NewsPage() {
  // Get language context and general translations
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslations()
  
  // State for page-specific translations
  const [pageTranslations, setPageTranslations] = useState({})
  
  // Load page-specific translations
  useEffect(() => {
    const loadPageTranslations = async () => {
      try {
        const response = await import(`../translations/news-${language}.json`)
        setPageTranslations(response.default)
      } catch (error) {
        console.error('Error loading page translations:', error)
        // Fallback to English
        const fallback = await import('../translations/news-en.json')
        setPageTranslations(fallback.default)
      }
    }
    
    loadPageTranslations()
  }, [language])
  
  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'newsPage.hero.title')
    const keys = key.split('.')
    let value = pageTranslations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key not found: ${key}`)
        return key // Return the key if not found
      }
    }
    
    return value === null || value === undefined ? key : value
  }
  // State for parallax scrolling effect
  const [scrollY, setScrollY] = useState(0)
  // State for news category filtering
  const [activeCategory, setActiveCategory] = useState('all')
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
  // Ref for scroll animations
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

  // Parallax and animation effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  }
  
  // Get language-specific articles
  const newsArticles = allNewsArticles.map(article => {
    return {
      ...article,
      title: language === 'sw' && article.title_sw ? article.title_sw : article.title,
      excerpt: language === 'sw' && article.excerpt_sw ? article.excerpt_sw : article.excerpt,
      author: language === 'sw' && article.author_sw ? article.author_sw : article.author,
      image: article.mainImage || article.image // Use mainImage from newsData.js or fallback to image
    };
  });

  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter articles based on active category and search query
  const filteredArticles = sortedArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured articles
  const featuredArticles = filteredArticles.filter(article => article.featured);
  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sw' ? 'sw-TZ' : 'en-US', options);
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section with parallax effect */}
      <section className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Image */}            <div className="absolute inset-0">
            <Image 
              src="/images/crb.webp"
              alt="Latest News and Updates"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy via-nyati-navy/80 to-nyati-navy/60 opacity-90 z-10"></div>
          </div>

          {/* Animated Decorative Elements */}
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-nyati-orange/10 rounded-sm blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-0 left-1/4 w-40 h-40 bg-nyati-green/10 rounded-sm blur-xl"
            animate={{ 
              scale: [1, 1.15, 1],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.1, 0.03] 
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse",
              delay: 1.5
            }}
            className="absolute bottom-10 left-10 w-80 h-80 bg-nyati-orange/5 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="container mx-auto px-4 h-full relative z-10">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            {/* Breadcrumb Navigation */}            <nav className="mb-6">
              <motion.ol 
                className="flex items-center space-x-2 text-sm text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('newsPage.hero.breadcrumbs.home') || 'Home'}</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">{pt('newsPage.hero.breadcrumbs.news') || 'News'}</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {pt('newsPage.hero.title') || 'Latest News'}
              <br />
              <span className="text-nyati-orange">{pt('newsPage.hero.titleSpan') || '& Updates'}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {pt('newsPage.hero.description') || 'Stay informed about our latest developments, achievements, and community initiatives.'}
            </motion.p>
          </div>
        </div>
      </section>

      <main className="pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Introduction Section */}          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-nyati-navy text-2xl md:text-3xl font-bold mb-4 font-futura">{pt('newsPage.introduction.title') || 'BUILDING STRONGER COMMUNITIES'}</h2>
            <p className="text-gray-700">
              {pt('newsPage.introduction.description') || 'Discover how Lake Cement is leading the industry with innovative technology, superior products, and meaningful community initiatives. Our news section showcases our commitment to excellence in everything we do.'}
            </p>
          </motion.div>
          
         
          {/* Featured News (Larger Cards) */}
          {featuredArticles.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >              <div className="flex items-center mb-8">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                <h2 className="text-2xl font-bold text-nyati-navy px-6 flex items-center font-futura">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
                  </svg>
                  {pt('newsPage.sections.featured') || 'FEATURED NEWS'}
                </h2>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </motion.div>
                      {article.tag && (
                        <div className="absolute top-0 left-0 m-4">
                          <span className="bg-nyati-orange text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide">
                            {article.tag}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-0 right-0 m-4">                        <span className={`text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                          article.category === 'company' ? 'bg-nyati-navy' :
                          article.category === 'csr' ? 'bg-nyati-green' :
                          'bg-nyati-orange'
                        }`}>
                          {article.category === 'company' ? (pt('newsPage.categories.company') || 'Company') :
                           article.category === 'csr' ? 'CSR' :
                           (pt('newsPage.categories.product') || 'Product')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-nyati-navy group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {article.excerpt}
                      </p>                      {article.link ? (
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                        >
                          {pt('newsPage.actions.readMore') || 'Read More'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`} 
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                        >
                          {pt('newsPage.actions.readMore') || 'Read More'}
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* All News Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-navy px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                {pt('newsPage.sections.allNews') || 'ALL NEWS'}
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image 
                        src={typeof article.image === 'string' && article.image.startsWith('/') ? article.image : '/images/news/Geza Bus Station.webp'}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 m-3">                        <span className={`text-white text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                          article.category === 'company' ? 'bg-nyati-navy' :
                          article.category === 'csr' ? 'bg-nyati-green' :
                          'bg-nyati-orange'
                        }`}>
                          {article.category === 'company' ? (pt('newsPage.categories.company') || 'Company') :
                           article.category === 'csr' ? 'CSR' :
                           (pt('newsPage.categories.product') || 'Product')}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-nyati-navy group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>                      <Link href={`/news/${article.id}`} className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors">
                        {pt('newsPage.actions.readMore') || 'Read More'}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (              <div className="text-center p-10 bg-gray-50 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">{pt('newsPage.noResults.title') || 'No news articles found'}</h3>
                <p className="text-gray-500">{pt('newsPage.noResults.description') || 'Try adjusting your search or filter criteria'}</p>
              </div>
            )}
          </motion.section>
          
          {/* Our Impact Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
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
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-green rounded-sm"></div>
          </div>
        </div>
      </main>
    </div>
  )
}