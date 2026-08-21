// app/components/sections/products-slider.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from '@/app/hooks/useTranslations'

const products = [
  {
    id: 1,
    nameKey: 'products.items.425r.name',
    defaultName: 'Nyati Super 42 (CEM II A-L 42.5R)',
    image: '/images/products/super42.jpg',
    descriptionKey: 'products.items.425r.description',
    accent: 'bg-nyati-orange',
    specs: [
      'products.items.425r.specs.1',
      'products.items.425r.specs.2',
      'products.items.425r.specs.3',
    ]
  },
  {
    id: 2,
    nameKey: 'products.items.425n.name',
    defaultName: 'Nyati Duramax 42 (CEM II B-M 42.5N)',
    image: '/images/products/duramax42.jpg',
    descriptionKey: 'products.items.425n.description',
    accent: 'bg-[#F5C842]',
    specs: [
      'products.items.425n.specs.1',
      'products.items.425n.specs.2',
      'products.items.425n.specs.3',
    ]
  },
  {
    id: 3,
    nameKey: 'products.items.opc.name',
    defaultName: 'Nyati Premium OPC (CEM I OPC 42.5N)',
    image: '/images/products/premiumOPC.jpg',
    descriptionKey: 'products.items.opc.description',
    accent: 'bg-[#C8C8C8]',
    specs: [
      'products.items.opc.specs.1',
      'products.items.opc.specs.2',
      'products.items.opc.specs.3',
    ]
  },
  {
    id: 4,
    nameKey: 'products.items.325n.name',
    defaultName: 'Nyati Max 32 (CEM II B-L 32.5N)',
    image: '/images/products/max32.jpg',
    descriptionKey: 'products.items.325n.description',
    accent: 'bg-nyati-green',
    specs: [
      'products.items.325n.specs.1',
      'products.items.325n.specs.2',
      'products.items.325n.specs.3',
    ]
  }
]

export default function ProductsSlider() {
  const { t } = useTranslations();
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-end mb-12 pb-8 border-b border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-7 h-0.5 bg-nyati-orange" />
              <span className="text-nyati-navy text-xs font-bold tracking-[0.18em] uppercase">
                {t('products.title')}
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-nyati-navy">
              {t('products.sliderTitle')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:items-end gap-4"
          >
            <p className="text-gray-600 text-sm md:text-base md:text-right max-w-md">
              {t('products.sliderDescription')}
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center bg-nyati-orange hover:bg-nyati-navy text-white px-6 py-2.5 font-medium transition-colors duration-200 uppercase tracking-wider text-sm"
            >
              <span>{t('products.viewAll')}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="border-r border-b border-gray-200 flex flex-col group"
            >
              <div className={`h-1 w-full ${product.accent}`} />
              <div className="relative h-48 bg-nyati-navy/5 flex items-center justify-center p-6">
                <div className="relative h-full w-full">
                  <Image
                    src={product.image}
                    alt={t(product.nameKey) || product.defaultName}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base md:text-lg font-bold text-nyati-navy mb-2 leading-snug">
                  {t(product.nameKey) || product.defaultName}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {t(product.descriptionKey)}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {product.specs.map((specKey) => (
                    <li key={specKey} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="block w-1 h-1 mt-1.5 bg-nyati-orange flex-shrink-0" />
                      <span>{t(specKey)}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/products"
                  className="mt-auto pt-4 border-t border-gray-100 btn-outline"
                >
                  <span>{t('common.readMore')}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
