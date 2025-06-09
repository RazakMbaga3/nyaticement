'use client'

import { motion } from 'framer-motion'

// This component creates a staggered animation effect for child elements
export default function FadeInStagger({ 
  children, 
  staggerDelay = 0.1, 
  containerDelay = 0, 
  containerDuration = 0.5,
  childrenDuration = 0.5,
  as = "div",
  ...props 
}) {
  const MotionTag = motion[as] || motion.div;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: containerDelay,
        duration: containerDuration,
        staggerChildren: staggerDelay,
        when: "beforeChildren"
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: childrenDuration }
    }
  };
  
  return (
    <MotionTag
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>
      }
    </MotionTag>
  );
}
