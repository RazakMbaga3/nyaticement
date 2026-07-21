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
      className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative h-48">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-nyati-navy font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <Link
          href={linkPath}
          className="text-nyati-orange hover:text-nyati-navy text-sm font-medium flex items-center"
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
