'use client';

import { motion } from 'framer-motion';

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
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 border border-gray-200 transition-all"
    >
      <h3 className="text-nyati-orange font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
