'use client';

import { motion } from 'framer-motion';

interface CoreValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function CoreValueCard({ icon, title, description }: CoreValueCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 border border-gray-200 transition-all"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-nyati-navy font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
}
