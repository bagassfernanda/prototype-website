'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: 'white' | 'surface' | 'surface-blue' | 'dark-blue';
  padding?: 'normal' | 'large' | 'compact';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  bg = 'white',
  padding = 'normal'
}) => {
  const shouldReduceMotion = useReducedMotion();

  const bgStyles = {
    white: 'artavel-section-white bg-white text-[#172536]',
    surface: 'artavel-section-surface bg-[#F7F9FB] text-[#172536]',
    'surface-blue': 'artavel-section-surface-blue bg-[#F2F7FB] text-[#172536]',
    'dark-blue': 'artavel-section-dark bg-[#173955] text-white'
  };

  const paddingStyles = {
    compact: 'py-8 sm:py-12',
    normal: 'py-14 sm:py-20',
    large: 'py-20 sm:py-28'
  };

  return (
    <motion.section
      id={id}
      initial={shouldReduceMotion ? false : { y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { y: 0 }}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.16 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`w-full relative overflow-hidden scroll-mt-40 sm:scroll-mt-44 ${bgStyles[bg]} ${paddingStyles[padding]} ${className}`}
    >
      {children}
    </motion.section>
  );
};
