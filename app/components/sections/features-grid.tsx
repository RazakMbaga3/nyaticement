'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from '@/app/hooks/useTranslations'

export default function FeaturesGrid() {
  const { t } = useTranslations();
    const features = [
    {
      id: 1,
      title: t('quality.title'),
      image: '/images/img/nyati144.jpg',
      text: t('quality.description'),
      link: '/quality-control'
    },
    {
      id: 2,
      title: t('distribution.title') || t('distributionPage.title'),
      image: '/images/img/driver.png',
      text: t('distribution.description') || t('distributionPage.description'),
      link: '/distribution'
    },
    {
      id: 3,
      title: t('sustainability.title') || t('sustainabilityPage.title'),
      image: '/images/img/nyati92.jpg',
      text: t('sustainability.description') || t('sustainabilityPage.description'),
      link: '/sustainability'
    }
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section ref={ref} className="py-16 md:py-20 bg-[#F1ECE3]">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 pb-8 border-b border-nyati-navy/10"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-7 h-0.5 bg-nyati-orange" />
            <span className="text-nyati-navy text-xs font-bold tracking-[0.18em] uppercase">
              {t('homePage.featuresSubtitle')}
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-nyati-navy">
            {t('homePage.featuresTitle')}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 border-t border-l border-nyati-navy/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white border-r border-b border-nyati-navy/10 flex flex-col group"
            >
              <div className="relative h-[300px] overflow-hidden md:h-[400px] lg:h-56">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/90 via-nyati-navy/10 to-transparent"></div>
                <span className="absolute top-4 left-5 text-white/50 text-xs font-mono tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="absolute bottom-0 left-0 w-full text-lg font-bold text-white p-5">
                  {feature.title}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-600 text-sm mb-4 flex-1">
                  {feature.text}
                </p>
                <Link
                  href={feature.link}
                  className="mt-auto pt-4 border-t border-gray-100 btn-outline"
                >
                  <span>{t('common.readMore')}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
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
