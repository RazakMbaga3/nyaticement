'use client'
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/app/components/ui/Newsletter';
import { useLanguage } from '@/app/contexts/LanguageContext';

// Note: Metadata is removed from this file as it can't be exported from a client component

// Blog post categories with their respective colors
const categoriesData = {
  en: [
    { 
      id: 'technical-knowledge', 
      name: 'Technical Knowledge', 
      color: 'bg-blue-100 text-blue-800',
      description: 'In-depth technical articles on cement properties and applications'
    },
    { 
      id: 'construction-best-practices', 
      name: 'Construction Best Practices', 
      color: 'bg-amber-100 text-amber-800',
      description: 'Professional techniques and methodologies for optimal construction'
    },
    { 
      id: 'diy-home-building', 
      name: 'DIY & Home Building', 
      color: 'bg-green-100 text-green-800',
      description: 'Guides for homeowners and small-scale construction projects'
    },
    { 
      id: 'sustainability-innovation', 
      name: 'Sustainability & Innovation', 
      color: 'bg-teal-100 text-teal-800',
      description: 'Environmental initiatives and forward-thinking approaches'
    },
    { 
      id: 'industry-insights', 
      name: 'Industry Insights', 
      color: 'bg-violet-100 text-violet-800',
      description: 'Market trends and developments in the cement and construction sectors'
    },
    { 
      id: 'application-guides', 
      name: 'Application Guides', 
      color: 'bg-orange-100 text-orange-800',
      description: 'Specific use-cases and applications for different cement types'
    },
    { 
      id: 'customer-spotlights', 
      name: 'Customer Spotlights', 
      color: 'bg-red-100 text-red-800',
      description: 'Success stories and case studies featuring Nyati Cement products'
    }
  ],
  sw: [
    { 
      id: 'technical-knowledge', 
      name: 'Ujuzi wa Kiufundi', 
      color: 'bg-blue-100 text-blue-800',
      description: 'Makala za kina za kiufundi juu ya sifa za saruji na matumizi'
    },
    { 
      id: 'construction-best-practices', 
      name: 'Mbinu Bora za Ujenzi', 
      color: 'bg-amber-100 text-amber-800',
      description: 'Mbinu za kitaalamu na methodolojia kwa ujenzi bora'
    },
    { 
      id: 'diy-home-building', 
      name: 'DIY & Ujenzi wa Nyumba', 
      color: 'bg-green-100 text-green-800',
      description: 'Miongozo kwa wamiliki wa nyumba na miradi ya ujenzi mdogo'
    },
    { 
      id: 'sustainability-innovation', 
      name: 'Uendelevu & Ubunifu', 
      color: 'bg-teal-100 text-teal-800',
      description: 'Mipango ya mazingira na mitazamo ya mawazo ya mbele'
    },
    { 
      id: 'industry-insights', 
      name: 'Ufahamu wa Tasnia', 
      color: 'bg-violet-100 text-violet-800',
      description: 'Mienendo ya soko na maendeleo katika sekta ya saruji na ujenzi'
    },
    { 
      id: 'application-guides', 
      name: 'Miongozo ya Matumizi', 
      color: 'bg-orange-100 text-orange-800',
      description: 'Matumizi maalum na utumiaji wa aina tofauti za saruji'
    },
    { 
      id: 'customer-spotlights', 
      name: 'Taarifa za Wateja', 
      color: 'bg-red-100 text-red-800',
      description: 'Hadithi za mafanikio na tafiti za kesi zinazojumuisha bidhaa za Saruji ya Nyati'
    }
  ]
};

// All blog posts (published and upcoming)
const allPostsData = {
  en: [
    {
      id: 'building-your-dream-home',
      title: 'Building Your Dream Home with Nyati Cement: A Step-by-Step Guide',
      excerpt: 'Learn the complete process of home construction from foundation to finishing with quality Nyati Cement products.',
      image: '/images/blog/home.webp',
      date: 'April 3, 2025',
      category: 'DIY & Home Building',
      slug: '/blog/building-your-dream-home',
      status: 'published',
      readTime: '5 Minute Read'
    },
    {
      id: 'understanding-cement-grades',
      title: 'Understanding Cement Grades: Choosing the Right Nyati Cement for Your Project',
      excerpt: 'Learn how to select the perfect cement grade for your specific construction needs with our comprehensive guide.',
      image: '/images/blog/understanding-cement-grades.jpg',
      date: 'March 28, 2025',
      category: 'Technical Knowledge',
      slug: '/blog/understanding-cement-grades',
      status: 'published',
      readTime: '3 Minute Read'
    },
    {
      id: 'water-cement-ratio',
      title: 'The Role of Water-Cement Ratio in Concrete Durability',
      excerpt: 'Discover how the water-cement ratio affects concrete strength, durability, and overall performance.',
      image: '/images/blog/water-cement-ratio.jpg',
      date: 'March 26, 2025',
      category: 'Technical Knowledge',
      slug: '/blog/water-cement-ratio',
      status: 'published',
      readTime: '2 Minute Read'
    },
    {
      id: 'concrete-curing',
      title: 'Understanding Concrete Curing: Best Practices for Maximum Strength',
      excerpt: 'Master the art of proper concrete curing to achieve optimal strength and durability in your construction projects.',
      image: '/images/blog/concrete-curing.jpg',
      date: 'March 24, 2025',
      category: 'Construction Best Practices',
      slug: '/blog/concrete-curing',
      status: 'published',
      readTime: '1 Minute Read'
    },
    {
      id: 'compressive-strength',
      title: 'Why Compressive Strength Matters: Nyati Cement\'s Testing Standards',
      excerpt: 'Understand the importance of compressive strength testing and how Nyati ensures consistent quality.',
      image: '/images/blog/compression-test.jpg',
      date: 'March 22, 2025',
      category: 'Technical Knowledge',
      slug: '/blog/compressive-strength-testing',
      status: 'published',
      readTime: '2 Minute Read'
    },
    {
      id: 'infrastructure-boom',
      title: 'Tanzania\'s Infrastructure Boom: The Role of Quality Cement in Nation Building',
      excerpt: 'Explore how quality cement is driving infrastructure development across Tanzania.',
      image: '/images/blog/nyereredam.webp',
      date: 'March 20, 2025',
      category: 'Industry Insights',
      slug: '/blog/tanzania-infrastructure-boom',
      status: 'published',
      readTime: '3 Minute Read'
    },
    {
      id: 'monsoon-construction',
      title: 'Monsoon Construction Guide: Building with Cement During Rainy Seasons',
      excerpt: 'Essential tips for ensuring quality construction during Tanzania\'s rainy seasons.',
      image: '/images/blog/monsoon.webp',
      date: 'April 04, 2025',
      category: 'Construction Best Practices',
      slug: '/blog/monsoon-construction',
      status: 'published',
      readTime: '4 Minute Read'
    }
  ],
  sw: [
    {
      id: 'building-your-dream-home',
      title: 'Kujenga Nyumba ya Ndoto Yako kwa Saruji ya Nyati: Mwongozo wa Hatua kwa Hatua',
      excerpt: 'Jifunze mchakato kamili wa ujenzi wa nyumba kutoka msingi hadi kumalizia na bidhaa za ubora za Saruji ya Nyati.',
      image: '/images/blog/home.webp',
      date: 'Aprili 3, 2025',
      category: 'DIY & Ujenzi wa Nyumba',
      slug: '/blog/building-your-dream-home',
      status: 'published',
      readTime: '5 Dakika za Kusoma'
    },
    {
      id: 'understanding-cement-grades',
      title: 'Kuelewa Daraja (Grade) za Saruji: Kuchagua Saruji ya Nyati Sahihi kwa Mradi Wako',
      excerpt: 'Jifunze jinsi ya kuchagua daraja kamili la saruji kwa mahitaji yako maalum ya ujenzi kupitia mwongozo wetu wa kina.',
      image: '/images/blog/understanding-cement-grades.jpg',
      date: 'Machi 28, 2025',
      category: 'Ujuzi wa Kiufundi',
      slug: '/blog/understanding-cement-grades',
      status: 'published',
      readTime: '3 Dakika za Kusoma'
    },
    {
      id: 'water-cement-ratio',
      title: 'Athari ya Uwiano wa Maji na Saruji katika Udhabiti wa Zege',
      excerpt: 'Gundua jinsi uwiano wa maji-saruji unavyoathiri nguvu ya zege, udhabiti, na utendaji wa jumla.',
      image: '/images/blog/water-cement-ratio.jpg',
      date: 'Machi 26, 2025',
      category: 'Ujuzi wa Kiufundi',
      slug: '/blog/water-cement-ratio',
      status: 'published',
      readTime: '2 Dakika za Kusoma'
    },
    {
      id: 'concrete-curing',
      title: 'Kuelewa Uimarishaji wa Zege: Mbinu Bora kwa Nguvu ya Juu',
      excerpt: 'Kuwa mtaalamu wa sanaa ya utiaji dawa sahihi wa zege ili kupata nguvu bora na udhabiti katika miradi yako ya ujenzi.',
      image: '/images/blog/concrete-curing.jpg',
      date: 'Machi 24, 2025',
      category: 'Mbinu Bora za Ujenzi',
      slug: '/blog/concrete-curing',
      status: 'published',
      readTime: '1 Dakika za Kusoma'
    },
    {
      id: 'compressive-strength',
      title: 'Kwanini Nguvu ya Shinikizo la Saruji ni Muhimu: Viwango vya Upimaji vya Saruji ya Nyati',
      excerpt: 'Elewa umuhimu wa upimaji wa nguvu za kushindilia na jinsi Nyati inavyohakikisha ubora endelevu.',
      image: '/images/blog/compression-test.jpg',
      date: 'Machi 22, 2025',
      category: 'Ujuzi wa Kiufundi',
      slug: '/blog/compressive-strength-testing',
      status: 'published',
      readTime: '2 Dakika za Kusoma'
    },
    {
      id: 'infrastructure-boom',
      title: 'Ukuaji wa Miundombinu Tanzania: Jukumu la Saruji Bora katika Ujenzi wa Taifa',
      excerpt: 'Chunguza jinsi saruji bora inavyoendesha maendeleo ya miundombinu katika Tanzania.',
      image: '/images/blog/nyereredam.webp',
      date: 'Machi 20, 2025',
      category: 'Ufahamu wa Tasnia',
      slug: '/blog/tanzania-infrastructure-boom',
      status: 'published',
      readTime: '3 Dakika za Kusoma'
    },
    {
      id: 'monsoon-construction',
      title: 'Mwongozo wa Ujenzi kipindi cha Mvua: Kujenga na Saruji Wakati wa Msimu wa Mvua',
      excerpt: 'Vidokezo muhimu vya kuhakikisha ujenzi bora wakati wa msimu wa mvua Tanzania.',
      image: '/images/blog/monsoon.webp',
      date: 'Aprili 04, 2025',
      category: 'Mbinu Bora za Ujenzi',
      slug: '/blog/monsoon-construction',
      status: 'published',
      readTime: '4 Dakika za Kusoma'
    }
  ]
};

export default function BlogPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [translations, setTranslations] = useState({});
  const [categories, setCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  
  // Load blog-specific translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const response = await import(`../translations/blog-${language}.json`);
        setTranslations(response.default);
      } catch (error) {
        console.error('Error loading blog translations:', error);
        // Fallback to English
        const fallback = await import('../translations/blog-en.json');
        setTranslations(fallback.default);
      }
    };
    
    loadTranslations();
    
    // Set categories and posts based on current language
    setCategories(categoriesData[language] || categoriesData.en);
    setAllPosts(allPostsData[language] || allPostsData.en);
    
    // Reset selected category when language changes
    setSelectedCategory('All');
  }, [language]);

  // Helper function to get translations
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? allPosts 
    : allPosts.filter(post => post.category === selectedCategory);
    return (
    <div className="bg-gray-50">      
      {/* Hero Section with Modern Design */}
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
              src="/images/blog/hero.jpg"
              alt={t('hero.title')}
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
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
              <motion.ol 
                className="flex items-center space-x-2 text-sm text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{t('breadcrumbs.home')}</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">{t('breadcrumbs.blog')}</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'en' ? (
                <>
                  Industry Insights
                  <br />
                  <span className="text-nyati-orange">& Knowledge Base</span>
                </>
              ) : (
                <>
                  Ufahamu wa Tasnia
                  <br />
                  <span className="text-nyati-orange">& Kituo cha Maarifa</span>
                </>
              )}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {language === 'en' ? 
                'Expert advice, industry trends, and construction best practices to help you build better.' :
                'Ushauri wa wataalamu, mienendo ya tasnia, na mbinu bora za ujenzi kukusaidia kujenga vyema zaidi.'
              }
            </motion.p>
          </div>
        </div>
      </section>

      <main className="py-12">
        {/* Categories Filter Bar - Updated with click handlers */}
        <div className="bg-white shadow py-4 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
            <div className="flex space-x-2 pb-2">
              <button 
                className={`${selectedCategory === 'All' ? 'bg-nyati-orange text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} px-6 py-2 rounded-sm text-sm font-medium transition-colors`}
                onClick={() => setSelectedCategory('All')}
              >
                {language === 'en' ? 'All' : 'Zote'}
              </button>
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`${selectedCategory === category.name ? 'bg-nyati-orange text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} px-6 py-2 rounded-sm text-sm font-medium whitespace-nowrap transition-colors`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Main Blog Content - Using filtered posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Display message if no posts in category */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold text-nyati-navy mb-2">
                {language === 'en' ? 'No posts in this category yet' : 'Hakuna machapisho katika kategoria hii bado'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Please check back later or explore other categories.' : 'Tafadhali rudi baadaye au chunguza kategoria zingine.'}
              </p>
            </div>
          )}
          
          {/* Featured Posts - First Row */}
          {filteredPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {filteredPosts.slice(0, 3).map((post, index) => (
              <div key={post.id} className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={index === 0}
                  />
                  {post.status === 'upcoming' && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold px-3 py-1 bg-nyati-orange rounded-sm">
                        {language === 'en' ? 'Coming Soon' : 'Inakuja Hivi Karibuni'}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Category & Date */}
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-medium py-1 px-3 rounded-sm ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-nyati-orange transition-colors">
                    <Link href={post.slug}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
          
          {/* Remaining Posts - Second Row */}
          {filteredPosts.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredPosts.slice(3).map((post) => (
              <div key={post.id} className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {post.status === 'upcoming' && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-semibold px-3 py-1 bg-nyati-orange rounded-sm">
                        {language === 'en' ? 'Coming Soon' : 'Inakuja Hivi Karibuni'}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-5">
                  {/* Category & Date */}
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-medium py-1 px-3 rounded-sm ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 hover:text-nyati-orange transition-colors">
                    <Link href={post.slug}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-700">{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
        
        {/* Newsletter Section */}
        <section className="py-12 bg-nyati-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'en' ? 'Stay Updated with Nyati Cement' : 'Endelea Kupata Habari Mpya za Saruji ya Nyati'}
            </h2>
            <p className="text-xl text-nyati-orange mb-8">
              {language === 'en' 
                ? 'Subscribe to receive our latest articles, project showcases, and construction tips'
                : 'Jiandikishe kupokea makala zetu za hivi karibuni, maonyesho ya miradi, na vidokezo vya ujenzi'
              }
            </p>
            <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder={language === 'en' ? 'Your email address' : 'Anwani yako ya barua pepe'} 
                className="flex-1 px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-nyati-orange"
                required
              />
              <button 
                type="submit" 
                className="bg-nyati-orange hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors"
              >
                {language === 'en' ? 'Subscribe' : 'Jiandikishe'}
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

// Helper function to get category color based on category name
function getCategoryColor(categoryName) {
  const allCategories = [...categoriesData.en, ...categoriesData.sw];
  const category = allCategories.find(cat => cat.name === categoryName);
  return category ? category.color : 'bg-gray-100 text-gray-800';
}