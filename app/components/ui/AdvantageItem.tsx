'use client';

import { motion } from 'framer-motion';
import { springUI } from '@/app/lib/motion-presets';

interface AdvantageItemProps {
  title: string;
  description: string;
  index: number;
}

export default function AdvantageItem({ title, description, index }: AdvantageItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, transition: springUI }}
      className="bg-white rounded-xl border border-gray-200 p-6 transition-all hover:border-nyati-orange group"
    >
      <h3 className="text-lg font-bold text-nyati-navy mb-2">
        <span className="text-nyati-navy group-hover:text-nyati-orange transition-colors">›</span> {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
