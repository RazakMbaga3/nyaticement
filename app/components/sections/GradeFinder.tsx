'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export interface GradeFinderProduct {
  id: number | string
  image: string
  title: string
  subtitle?: string
  description?: string
}

interface ProjectType {
  id: string
  label: string
  icon: React.ReactNode
  /** index into the products array this project type primarily recommends */
  primary: number
  /** indices of products that are also a reasonable fit */
  secondary: number[]
  reason: string
}

const ICONS = {
  masonry: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h7m2 0h7M4 14h16M4 18h7m2 0h7" />
    </svg>
  ),
  foundation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
    </svg>
  ),
  readymix: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16l-1.5 8h-13L4 4zM6 12l1 8h10l1-8M9 8v0m6 0v0" />
    </svg>
  ),
  precast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <rect x="4" y="4" width="7" height="7" rx="0.5" />
      <rect x="13" y="4" width="7" height="7" rx="0.5" />
      <rect x="4" y="13" width="7" height="7" rx="0.5" />
      <rect x="13" y="13" width="7" height="7" rx="0.5" />
    </svg>
  ),
  largescale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M4 20V10l4-3 4 3v10M12 20v-6l4-3 4 3v6" />
    </svg>
  ),
}

const PROJECT_TYPES: ProjectType[] = [
  {
    id: 'masonry',
    label: 'Masonry & Blockwork',
    icon: ICONS.masonry,
    primary: 3, // Nyati Max 32
    secondary: [0],
    reason: 'Economical, reliable strength for mortars, plastering, and general block-making.',
  },
  {
    id: 'foundation',
    label: 'Foundations & Roadwork',
    icon: ICONS.foundation,
    primary: 3, // Nyati Max 32
    secondary: [1],
    reason: 'Consistent strength and workability for road stabilization and general civil works.',
  },
  {
    id: 'readymix',
    label: 'Ready-Mix Concrete Plant',
    icon: ICONS.readymix,
    primary: 1, // Nyati Duramax 42
    secondary: [0, 2],
    reason: 'Balanced performance and low heat generation, built for custom on-site and RMC mixes.',
  },
  {
    id: 'precast',
    label: 'Precast & Reinforced Concrete',
    icon: ICONS.precast,
    primary: 0, // Nyati Super 42
    secondary: [2],
    reason: 'High early strength for fast-turnaround precast units and reinforced structures.',
  },
  {
    id: 'largescale',
    label: 'High-Rise, Bridges & Dams',
    icon: ICONS.largescale,
    primary: 2, // Nyati Premium OPC
    secondary: [0, 1],
    reason: 'Superior strength and flowability for large-scale, structurally demanding projects.',
  },
]

interface GradeFinderProps {
  products: GradeFinderProduct[]
  /** called with the product's index in the array (not its .id) */
  onViewSpec: (productIndex: number) => void
}

/**
 * "Find Your Grade" tool: user picks a real project category (drawn from
 * the products' own application lists) and gets the matching Nyati grade
 * recommended with a one-line reason, plus a jump-to-spec-sheet action.
 */
export default function GradeFinder({ products, onViewSpec }: GradeFinderProps) {
  const [selected, setSelected] = useState<ProjectType | null>(null)
  const prefersReducedMotion = useReducedMotion()

  const primaryProduct = selected ? products[selected.primary] : null
  const secondaryProducts = selected ? selected.secondary.map((i) => products[i]).filter(Boolean) : []

  return (
    <section className="py-16 bg-nyati-cream border-y border-gray-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <div className="eyebrow text-xs font-bold tracking-[0.18em] uppercase text-nyati-navy mb-3">
            Find Your Grade
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-nyati-navy mb-3">
            What are you building?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tell us your project type and we'll point you to the Nyati Cement grade built for it.
          </p>
        </div>

        {/* Step 1: project type selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200 mb-8">
          {PROJECT_TYPES.map((type, i) => (
            <button
              key={type.id}
              onClick={() => setSelected(type)}
              className={`flex flex-col items-center gap-2 p-4 md:p-5 text-center transition-colors duration-200 ${
                selected?.id === type.id
                  ? 'bg-nyati-navy text-white'
                  : 'bg-white text-nyati-navy hover:bg-nyati-navy/5'
              } ${i === PROJECT_TYPES.length - 1 && PROJECT_TYPES.length % 2 === 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className={selected?.id === type.id ? 'text-nyati-orange' : 'text-nyati-orange'}>
                {type.icon}
              </span>
              <span className="text-xs font-semibold leading-tight">{type.label}</span>
            </button>
          ))}
        </div>

        {/* Step 2: recommendation */}
        <AnimatePresence mode="wait">
          {selected && primaryProduct && (
            <motion.div
              key={selected.id}
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-200"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-6 p-6 md:p-8 items-center">
                <div className="relative h-40 bg-nyati-navy/5 flex items-center justify-center">
                  <Image
                    src={primaryProduct.image}
                    alt={primaryProduct.title}
                    width={140}
                    height={160}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.14em] uppercase text-nyati-orange mb-2">
                    Recommended Grade
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-nyati-navy mb-2">
                    {primaryProduct.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{selected.reason}</p>
                  <button
                    onClick={() => onViewSpec(selected.primary)}
                    className="inline-flex items-center gap-2 bg-nyati-orange hover:bg-orange-600 text-white px-5 py-2.5 font-bold text-xs tracking-[0.08em] uppercase transition-colors duration-200"
                  >
                    View Spec Sheet
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {secondaryProducts.length > 0 && (
                <div className="border-t border-gray-200 px-6 md:px-8 py-4 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Also works well:
                  </span>
                  {selected.secondary.map((productIndex) => {
                    const p = products[productIndex]
                    if (!p) return null
                    return (
                      <button
                        key={p.id}
                        onClick={() => onViewSpec(productIndex)}
                        className="text-xs font-semibold text-nyati-navy hover:text-nyati-orange border border-gray-300 hover:border-nyati-orange px-3 py-1.5 transition-colors duration-200"
                      >
                        {p.title.split('(')[0].trim()}
                      </button>
                    )
                  })}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
