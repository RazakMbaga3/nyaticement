'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface KeyFeatureCardProps {
  icon: string;
  title: string;
  index: number;
}

export default function KeyFeatureCard({ icon, title, index }: KeyFeatureCardProps) {
  return (
    <motion.div
      className="bg-white border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative h-16 w-16 mb-4">
          <Image
            src={icon}
            alt={`${title} Icon`}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-bold text-sm text-nyati-navy">{title}</h3>
      </div>
    </motion.div>
  )
}
