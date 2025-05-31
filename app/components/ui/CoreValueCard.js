'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CoreValueCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-5 rounded-sm shadow-sm transition-all hover:shadow-md"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-nyati-navy font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  );
};

export default CoreValueCard;
