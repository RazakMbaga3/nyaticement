'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/app/components/ui/NewProductCard'
import KeyFeatureCard from '@/app/components/ui/KeyFeatureCard'
import PackagingOption from '@/app/components/sections/PackagingOption'
import { useTranslations } from '@/app/hooks/useTranslations'
import { useLanguage } from '@/app/contexts/LanguageContext'

// Product data
const products = [
  {
    id: 1,
    image: '/images/products/super42.jpg',
    fallbackImage: '/images/products/super42.jpg',
    title: 'Nyati Super 42 (CEM II A-L 42.5R)',
    subtitle: '42.5R Grade Portland Limestone Cement',
    description: 'Designed for projects requiring rapid strength gain and long-term durability. Suitable for blocks making, precast, prestressed concrete, and high-grade concrete for high-strength structures like bridges and reservoirs.',
    features: [
      'High Early Strength',
      'High Final Compressive Strength',
      'High Soundness',
      'Optimal Fineness',
      'High Mechanical Strength'
    ],
    applications: [
      'Quality Blocks',
      'High Grade Concrete',
      'Reinforced Concrete Structures',
      'Hydraulic structures',
      'Ready mix Concrete (RMC)'
    ]
  },
  {
    id: 2,
    image: '/images/products/duramax42.jpg',
    fallbackImage: '/images/products/duramax42.jpg',
    title: 'Nyati Duramax 42 (CEM II A-L 42.5N)',
    subtitle: '42.5N Grade Portland Limestone Cement',
    description: 'A high-performance cement for strong, durable structures. Offers excellent workability and compressive strength, making it ideal for general construction projects.',
    features: [
      'Low Heat Generation',
      'Normal Initial Strength',
      'Enhanced Workability',
      'High Ultimate Compressive Strength'
    ],
    applications: [
      'High-Strength Durable Concrete',
      'Custom On-Site Mixes',
      'Hydraulic structures',
      'High Strength Concrete',
      'Ready mix Concrete (RMC)'
    ]
  },
  {
    id: 3,
    image: '/images/products/premiumOPC.jpg',
    fallbackImage: '/images/products/premiumOPC.jpg',
    title: 'Nyati Premium OPC (CEM I OPC 42.5N)',
    subtitle: 'Ordinary Portland Cement (OPC)',
    description: 'A premium cement known for unmatched strength, durability and exceptional performance. The go-to choice for critical structures and large-scale projects like skyscrapers, bridges, and reserviors.',
    features: [
      'High Early Strength',
      'High Final Compressive Strength',
      'Smooth Workability & Flowability'
    ],
    applications: [
      'Precast Marvels',
      'Best for Reinforced Concrete',
      'High-Grade Concrete',
      'Specialized Builds',
      'Ready-Mix Structures',
      'Large-Scale Projects'
    ]
  },
  {
    id: 4,
    image: '/images/products/max32.jpg',
    fallbackImage: '/images/products/max32.jpg',
    title: 'Nyati Max 32 (CEM II B-L 32.5N)',
    subtitle: '32.5N Grade Portland Cement',
    description: 'A reliable, general-purpose cement for everyday construction. Ideal for foundations, bricklaying, masonry, and road stabilization, it offers consistent strength, smooth workability, and durable results.',
    features: [
      'Normal Setting',
      'Enhanced Workability',
      'High Soundness',
      'Optimal Fineness',
      'Superior Adhesion'
    ],
    applications: [
      'Road Stabilization',
      'Mortars and Masonry',
      'plastering & flooring',
      'Cost-effective Block Making',
      'General civil engineering works'
    ]
  }
]
// Key features data
const keyFeatures = [
  {
    icon: '/images/products/Superior.png',
    title: 'Superior Performance'
  },
  {
    icon: '/images/products/workability.png',
    title: 'Enhanced Workability'
  },
  {
    icon: '/images/products/compressive.png',
    title: 'High Final Compressive Strength'
  },
  {
    icon: '/images/products/mechanical.png',
    title: 'High Mechanical Strength'
  },
  {
    icon: '/images/products/adhesion.png',
    title: 'Superior Adhesion'
  }
];

// Applications data updated to match the blog card layout
const applications = [
  {
    title: 'High-Quality Blocks',
    description: 'Nyati Cement empowers block-makers to create superior quality blocks, pavers, and concrete poles with exceptional strength and durability, ideal for both residential and commercial projects.',
    image: '/images/products/blocks.jpg',
  },
  {
    title: 'Customized On-Site Mixes',
    description: 'Nyati Cement combines with cement extenders like Fly Ash and Silica, allowing for customized concrete mixes tailored to specific project requirements.',
    image: '/images/products/custom-mix.jpg'
  },
  {
    title: 'High-Grade Concrete',
    description: 'Delivers exceptional load-bearing capacity and long-term durability for demanding large-scale construction projects, from high-rise buildings to infrastructure.',
    image: '/images/products/brt1.webp',
  },
  {
    title: 'Ready-Mix Concrete',
    description: 'Nyati Cement is ideal for Ready-Mix Concrete plants, ensuring consistent manufacturing of various concrete grades to meet the diverse needs of customers.',
    image: '/images/products/ready-mix.jpg',
  },
  {
    title: 'Hydraulic Structures',
    description: 'Engineered for projects demanding exceptional durability and water resistance, from dams and reservoirs to canals and water treatment facilities.',
    image: '/images/products/nyereredam.jpg',
  },
  {
    title: 'Reinforced Concrete Structures',
    description: 'Provides excellent adhesion between concrete and steel reinforcement, maximizing load-bearing capacity and ensuring structural integrity in buildings and infrastructure.',
    image: '/images/products/reinforced.jpg',
  },
  {
    title: 'Mortars & Masonry',
    description: 'Creates strong and reliable bonds in mortars and masonry applications for solid, lasting connections in residential and commercial construction projects.',
    image: '/images/products/masonry.jpg'
  },
  {
    title: 'Standard Construction',
    description: 'Perfect all-purpose solution for walls, floors, foundations, and general building projects with superior strength, durability, and workability.',
    image: '/images/products/construction.jpg',
  },
];

// Packaging options data
const packagingOptions = [
  {
    image: '/images/ALLNYATIBAGS.webp',
    title: '50 Kg Bags',
    description: 'Standard packaging ideal for small to medium projects. Easy to handle, transport, and store on any construction site.'
  },
  {
    image: '/images/products/jumbo.png',
    title: '1.5 Ton Jumbo Bags',
    description: 'Efficient solution for medium to large projects, reducing handling time and packaging waste while increasing productivity.'
  },
  {
    image: '/images/products/bulker1.png',
    title: 'Bulk Tankers',
    description: 'Perfect for large-scale projects, providing maximum efficiency with direct delivery to silos, eliminating packaging completely.'
  }
];

// Application card component redesigned to match the blog post format
const ApplicationCard = ({ application, index }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-sm shadow-md overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' }}
    >
      {/* Image Container with Category Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={application.image}
            alt={application.title}
            fill
            className="object-cover"
            onError={() => {
              console.log(`Error loading image: ${application.image}`);
              setImageError(true);
            }}
          />
        ) : (
          <Image
            src={application.fallbackImage || '/images/products/fallback.jpg'}
            alt={application.title}
            fill
            className="object-cover"
            onError={() => {
              console.log(`Error loading fallback image`);
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-nyati-navy mb-2">{application.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{application.description}</p>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  const ref = useRef(null)
  const [heroImageError, setHeroImageError] = useState(false)
  
  // Get language context and general translations
  const { language } = useLanguage();
  const { t } = useTranslations();
  
  // State for page-specific translations
  const [pageTranslations, setPageTranslations] = useState({});
  
  // Load page-specific translations
  useEffect(() => {
    const loadPageTranslations = async () => {
      try {
        const response = await import(`../translations/products-${language}.json`);
        setPageTranslations(response.default);
      } catch (error) {
        console.error('Error loading page translations:', error);
        // Fallback to English
        const fallback = await import('../translations/products-en.json');
        setPageTranslations(fallback.default);
      }
    };
    
    loadPageTranslations();
  }, [language]);
  
  // Helper function to get page translations
  const pt = (key) => {
    if (!key || !pageTranslations) {
      return key; // Return the key if it's empty or if there are no translations
    }
    
    // Handle nested keys (e.g., 'productsPage.hero.title')
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9])
  
  return (
    <div className="bg-gray-50">
      {/* Hero section with parallax effect */}
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
              src="/images/products/prod.jpg"
              alt={pt('productsPage.hero.title')}
              fill
              priority
              className="object-cover"
              onError={() => setHeroImageError(true)}
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
                <li><Link href="/" className="hover:text-nyati-orange transition-colors">{pt('productsPage.hero.breadcrumb.home')}</Link></li>
                <li><span className="text-white/60">/</span></li>
                <li><span className="text-white">{pt('productsPage.hero.breadcrumb.products')}</span></li>
              </motion.ol>
            </nav>

            {/* Hero Title & Content */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {pt('productsPage.hero.title')}
              <br />
              <span className="text-nyati-orange">{pt('productsPage.hero.highlight')}</span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {pt('productsPage.hero.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref} className="py-2 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {pt('productsPage.intro.text')}
            </p>
          </motion.div>            <div className="space-y-6">
            {Array.isArray(pageTranslations?.productsPage?.products) ? 
              pageTranslations.productsPage.products.map((product, index) => {
                // Get the base product data including images
                const productData = products[index] || {};
                
                // Create the complete product object combining translations and base data
                const combinedProduct = {
                  id: productData.id || index,
                  image: productData.image || '',
                  fallbackImage: productData.fallbackImage || '',
                  title: product.title || `Product ${index + 1}`,
                  description: product.description || '',
                  features: product.features || [],
                  applications: product.applications || []
                };
                
                // Debug log to help diagnose issues
                console.log(`Rendering translated product ${index}:`, combinedProduct);
                
                return (
                  <motion.div 
                    key={combinedProduct.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                  >
                    <ProductCard 
                      product={combinedProduct}
                      index={index}
                    />
                  </motion.div>
                );
              })
              :
              // Fallback to using hardcoded product data
              products.map((product, index) => {
                // Debug log
                console.log(`Rendering hardcoded product ${index}:`, product);
                
                return (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                  >
                    <ProductCard 
                      product={product}
                      index={index}
                    />
                  </motion.div>
                );
              })
            }
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-10 bg-nyati-navy relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 right-0 w-64 h-64 bg-nyati-orange/5 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-0 w-96 h-96 bg-nyati-navy/5 rounded-full"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nyati-orange mb-4">
              {pt('productsPage.features.title')}
            </h2>
            <p className="text-nyati-light-grey text-lg max-w-3xl mx-auto">
              {pt('productsPage.features.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.isArray(pageTranslations?.productsPage?.keyFeatures) ? 
              pageTranslations.productsPage.keyFeatures.map((feature, index) => (
                <KeyFeatureCard 
                  key={index}
                  icon={keyFeatures[index]?.icon || ''}
                  title={feature.title}
                  index={index}
                />
              ))
              :
              keyFeatures.map((feature, index) => (
                <KeyFeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  index={index}
                />
              ))
            }
          </div>
        </div>
      </section>
      
      {/* Applications Section - REDESIGNED AS BLOG CARD LAYOUT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-4">
              {pt('productsPage.applications.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
              {pt('productsPage.applications.description')}
            </p>
          </motion.div>
          
          {/* Blog Card Grid Layout */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {Array.isArray(pageTranslations?.productsPage?.applicationItems) ? 
              pageTranslations.productsPage.applicationItems.map((item, index) => (
                <ApplicationCard 
                  key={index} 
                  application={{
                    title: item.title,
                    description: item.description,
                    image: applications[index]?.image || '',
                    fallbackImage: '/images/products/fallback.jpg'
                  }} 
                  index={index} 
                />
              ))
              :
              applications.map((application, index) => (
                <ApplicationCard 
                  key={index} 
                  application={application} 
                  index={index} 
                />
              ))
            }
          </motion.div>
        </div>
      </section>
      
      {/* Packaging Options Section */}
      <section className="py-6 bg-gradient-to-b from-nyati-light-orange to-nyati-navy relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-nyati-orange/5"
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-nyati-navy/5"
          animate={{ 
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-4 mt-4">
              {pt('productsPage.packaging.title')}
            </h2>
            <p className="text-nyati-light-grey text-lg max-w-3xl mx-auto">
              {pt('productsPage.packaging.description')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Array.isArray(pageTranslations?.productsPage?.packaging?.options) ? 
              pageTranslations.productsPage.packaging.options.map((option, index) => (
                <PackagingOption 
                  key={index}
                  image={packagingOptions[index]?.image || ''}
                  title={option.title}
                  description={option.description}
                  index={index}
                />
              ))
              :
              packagingOptions.map((option, index) => (
                <PackagingOption 
                  key={index}
                  image={option.image}
                  title={option.title}
                  description={option.description}
                  index={index}
                />
              ))
            }
          </div>
        </div>
      </section>
      

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-nyati-navy to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl text-nyati-light-orange md:text-4xl font-bold mb-6">{pt('productsPage.cta.title')}</h2>
            <p className="text-xl mb-8 text-white/80">
              {pt('productsPage.cta.description')}
            </p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-nyati-orange hover:bg-nyati-navy text-white px-8 py-4 rounded-sm text-lg font-medium transition-colors duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {pt('productsPage.cta.button')}
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
