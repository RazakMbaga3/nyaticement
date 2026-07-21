// app/components/sections/cta-banner.js
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative overflow-hidden bg-nyati-navy py-20">

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-nyati-orange/8 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-16 w-60 h-60 bg-white/3 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 flex h-1">
        <div className="flex-[2] bg-nyati-orange" />
        <div className="flex-[3] bg-white/8" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* ── Main CTA content ─────────────────── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
              <span className="block w-8 h-px bg-nyati-orange" />
              <span className="text-nyati-orange text-xs font-bold tracking-[0.22em] uppercase">
                Start Building
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ready to Build
              <span className="text-nyati-orange"> Stronger?</span>
            </h2>
            <p className="text-white/55 text-base lg:text-lg max-w-xl leading-relaxed">
              Contact our team to find a Nyati Cement dealer near you, or request a bulk supply
              quote for your next project — big or small.
            </p>
          </motion.div>

          {/* Right: Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 bg-nyati-orange hover:bg-orange-500 text-white px-8 py-4 font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300 shadow-xl shadow-nyati-orange/20"
            >
              Find a Dealer
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
            <Link
              href="/about/brochure"
              className="group inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/8 text-white border border-white/30 hover:border-white/60 px-8 py-4 font-bold text-xs tracking-[0.18em] uppercase transition-all duration-300"
            >
              Download Brochure
              <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* ── Brand tagline strip ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 pt-10 border-t border-white/8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Tagline */}
            <p className="text-2xl lg:text-3xl font-bold text-white tracking-wide text-center md:text-left">
              HUSHIKA HARAKA —{' '}
              <span className="text-nyati-orange">HUDUMU ZAIDI</span>
            </p>

            {/* Social / quick links */}
            <div className="flex items-center gap-6 text-white/30">
              <Link href="/products" className="text-xs uppercase tracking-wider hover:text-white/70 transition-colors">
                Products
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/quality-control" className="text-xs uppercase tracking-wider hover:text-white/70 transition-colors">
                Quality
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/distribution" className="text-xs uppercase tracking-wider hover:text-white/70 transition-colors">
                Distribution
              </Link>
              <span className="text-white/10">|</span>
              <Link href="/contact" className="text-xs uppercase tracking-wider hover:text-white/70 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom brand accent bar */}
      <div className="absolute bottom-0 left-0 right-0 flex h-1">
        <div className="flex-[3] bg-nyati-navy border-t border-white/5" />
        <div className="flex-[2] bg-nyati-orange" />
        <div className="flex-[1] bg-gray-400/20" />
      </div>
    </section>
  )
}
