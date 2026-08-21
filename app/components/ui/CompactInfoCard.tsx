'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CompactInfoCardProps {
  title: string;
  imageSrc: string;
  description: string;
  linkPath: string;
  index: number;
}

export default function CompactInfoCard({ title, imageSrc, description, linkPath, index }: CompactInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all hover:border-nyati-orange"
    >
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-nyati-navy mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
        <Link
          href={linkPath}
          className="text-nyati-navy hover:text-nyati-orange text-sm font-semibold flex items-center"
        >
          LEARN MORE
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
