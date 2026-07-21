// app/components/sections/brand-values.js
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const values = [
  {
    num: '01',
    title: 'Integrity',
    description:
      'We operate responsibly and transparently, ensuring honest and accurate performance reporting to foster proper business conduct.',
    accent: '#F49545',
  },
  {
    num: '02',
    title: 'Responsibility',
    description:
      "Protecting our stakeholders' interests is our responsibility, making it the core of all our policies and management decisions.",
    accent: '#F49545',
  },
  {
    num: '03',
    title: 'Trust',
    description:
      'We are the trustees of the trust reposed on us by our stakeholders, guiding our actions and decisions at every level.',
    accent: '#F49545',
  },
  {
    num: '04',
    title: 'Cooperative Effort',
    description:
      'We recognize that our society and surrounding communities are important stakeholders, making us responsible to practice good corporate citizenship.',
    accent: '#F49545',
  },
]

export default function BrandValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.12 })

  return (
    <section ref={ref} className="py-20 bg-nyati-navy relative overflow-hidden">

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-nyati-orange/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/3 rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Brand accent bar top */}
      <div className="absolute top-0 left-0 right-0 flex h-1">
        <div className="flex-[3] bg-nyati-orange" />
        <div className="flex-[2] bg-white/10" />
        <div className="flex-[1] bg-white/5" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">

        {/* ── Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-8 h-px bg-nyati-orange" />
              <span className="text-nyati-orange text-xs font-bold tracking-[0.22em] uppercase">Our Foundation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Core Values that
              <br />
              <span className="text-nyati-orange">Drive Us Forward</span>
            </h2>
          </div>
          <blockquote className="lg:text-right max-w-xs">
            <p className="text-white/40 text-sm leading-relaxed italic">
              "Strong. Reliable. Proven."
            </p>
            <footer className="text-white/25 text-xs mt-2 not-italic">
              — Nyati Cement Brand Essence
            </footer>
          </blockquote>
        </motion.div>

        {/* ── Bento grid ──────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 hover:bg-white/9 border border-white/8 hover:border-nyati-orange/30 rounded-2xl p-7 transition-all duration-400 overflow-hidden"
            >
              {/* Number — large background watermark */}
              <span
                className="absolute -top-4 -right-3 text-8xl font-black opacity-5 select-none pointer-events-none"
                style={{ color: value.accent }}
              >
                {value.num}
              </span>

              {/* Number badge */}
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-5 text-white text-xs font-bold"
                style={{ backgroundColor: value.accent }}
              >
                {value.num}
              </div>

              <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{value.description}</p>

              {/* Hover accent underline */}
              <div
                className="absolute bottom-0 left-7 right-7 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ backgroundColor: value.accent }}
              />
            </motion.div>
          ))}
        </div>

        {/* ── Bottom brand statement ──────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 pt-10 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Brand Purpose</p>
            <p className="text-white text-sm font-medium max-w-lg">
              To provide consistently strong and reliable cement that supports strong, durable,
              and long-lasting construction across Tanzania.
            </p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">Brand Promise</p>
            <p className="text-nyati-orange font-bold text-sm">
              Consistent strength you can trust
              <br />for every stage of construction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
