'use client';

import { motion } from 'framer-motion';
import { springUI } from '@/app/lib/motion-presets';

interface CoreValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function CoreValueCard({ icon, title, description }: CoreValueCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={springUI}
      className="bg-white rounded-xl border border-gray-200 p-6 transition-all hover:border-nyati-orange"
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-nyati-navy mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
