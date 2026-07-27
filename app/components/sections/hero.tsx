// app/components/sections/hero.tsx
'use client'

import { motion, AnimatePresence, Variants, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTranslations } from '@/app/hooks/useTranslations'
import MagneticLink from '@/app/components/ui/MagneticLink'

export default function Hero() {
  const { t } = useTranslations();
  const reducedMotionPreference = useReducedMotion();
  // Guard against SSR/client hydration mismatch: useReducedMotion() can't
  // read the media query on the server, so only trust it after mount —
  // server and first client render both assume motion is enabled.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const prefersReducedMotion = mounted && reducedMotionPreference

  // State for slideshow
  const [currentSlide, setCurrentSlide] = useState(0)

  // Mouse-parallax for the product bags panel
  const panelRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20, mass: 0.5 })
  const bagsX = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const bagsY = useTransform(springY, [-0.5, 0.5], [-8, 8])
  const bagsRotate = useTransform(springX, [-0.5, 0.5], [-2, 2])

  const handlePanelMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !panelRef.current) return
    const rect = panelRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handlePanelMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Slideshow images
  const slideshowImages = [
    '/images/slideshow/1.jpeg',
    '/images/block2.png',
    '/images/slideshow/fam.webp',
    '/images/slideshow/3.jpeg',
    '/images/block1.jpg',
    '/images/slideshow/bulldozer.webp',
    '/images/img/nyati92.jpg',
    '/images/img/nyati113.jpg'
  ]

  // Effect for slideshow autoplay (paused when reduced motion is requested)
  useEffect(() => {
    if (prefersReducedMotion) return
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideshowImages.length - 1 ? 0 : prevSlide + 1
      )
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slideshowImages.length, prefersReducedMotion])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  }

  // Slide animation variants with crossfade + slow-zoom effect (zoom disabled under reduced motion)
  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1
    },
    center: {
      opacity: 1,
      scale: prefersReducedMotion ? 1 : 1.06,
      transition: prefersReducedMotion
        ? { opacity: { duration: 1.2 } }
        : { opacity: { duration: 1.2 }, scale: { duration: 5, ease: 'linear' } }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-nyati-navy">
      {/* Background base color to prevent white flash during transitions */}
      <div className="absolute inset-0 bg-nyati-navy z-0"></div>

      {/* Background Slideshow with crossfade effect */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <Image
            src={slideshowImages[currentSlide]}
            alt={`Slideshow image ${currentSlide + 1}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Real scrim: solid navy gradient for legible type, no text-shadow hack */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-nyati-navy via-nyati-navy/85 to-nyati-navy/25" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-nyati-navy/90 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-16 md:pb-20 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white space-y-7 lg:col-span-7"
          >
            <div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2.5 mb-5"
              >
                <span className="block w-7 h-0.5 bg-nyati-orange" />
                <span className="text-nyati-orange text-xs font-bold tracking-[0.18em] uppercase">
                  {t('hero.certifications')}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl leading-[0.98] text-white font-bold"
              >
                <span className="font-light block">{t('hero.title')},</span>
                <span className="text-nyati-orange block">{t('hero.subtitle')}</span>
                <span className="block">{t('hero.strongDurable')} {t('hero.construction')}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-white/75 mt-6 max-w-xl leading-relaxed"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 border border-white/15 px-5 py-3 flex items-center space-x-3">
                  <span className="text-nyati-orange text-base">&#10003;</span>
                  <span className="font-semibold text-sm">{t('hero.badges.ownClinker')}</span>
                </div>

                <div className="bg-white/10 border border-white/15 px-5 py-3 flex items-center space-x-3">
                  <span className="text-nyati-orange text-base">&#10003;</span>
                  <span className="font-semibold text-sm">{t('hero.badges.ownPower')}</span>
                </div>

                <div className="bg-white/10 border border-white/15 px-5 py-3 flex items-center space-x-3">
                  <span className="text-nyati-orange text-base">&#10003;</span>
                  <span className="font-semibold text-sm">{t('hero.badges.consistentQuality')}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <MagneticLink
                  href="/contact"
                  className="group inline-flex items-center space-x-2 bg-nyati-orange hover:bg-orange-600 text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-colors duration-200"
                >
                  <span>{t('hero.cta')}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </MagneticLink>

                <MagneticLink
                  href="/about/certifications"
                  className="group inline-flex items-center space-x-2 border border-white/30 hover:border-white text-white px-7 py-3.5 font-bold text-sm tracking-wide uppercase transition-colors duration-200"
                >
                  <span>{t('hero.certifications')}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 inline-block ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </MagneticLink>
              </div>
            </motion.div>
          </motion.div>

          {/* Product display: bordered panel with subtle mouse-parallax on the bags */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block relative lg:col-span-5"
          >
            <div
              ref={panelRef}
              onMouseMove={handlePanelMouseMove}
              onMouseLeave={handlePanelMouseLeave}
              className="relative h-[420px] w-full bg-white/5 border border-white/10 overflow-hidden"
            >
              <motion.div
                style={
                  prefersReducedMotion
                    ? undefined
                    : { x: bagsX, y: bagsY, rotate: bagsRotate }
                }
                className="relative z-10 mx-auto h-full py-6 will-change-transform"
              >
                <Image
                  src="/images/ALLNYATIBAGS.webp"
                  alt="Nyati Cement Product"
                  width={400}
                  height={400}
                  className="object-contain h-full mx-auto"
                />
              </motion.div>
            </div>

            {/* Product info card */}
            <div className="mt-[-1px] bg-nyati-orange p-5 border-t-2 border-white/20">
              <h3 className="text-white text-lg font-bold mb-1">
                {t('hero.productCard.title')}
              </h3>
              <p className="text-white/90 text-sm font-medium">
                {t('hero.productCard.description')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slideshow indicator dots with real progress fill */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative h-1.5 overflow-hidden bg-white/25 transition-all duration-300 ${
              currentSlide === index ? 'w-10' : 'w-4 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentSlide === index && !prefersReducedMotion && (
              <motion.span
                key={currentSlide}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                style={{ transformOrigin: 'left' }}
                className="absolute inset-0 bg-nyati-orange"
              />
            )}
            {(currentSlide === index && prefersReducedMotion) && (
              <span className="absolute inset-0 bg-nyati-orange" />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}
