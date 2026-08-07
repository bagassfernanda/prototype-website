'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hoverable?: boolean;
  accentBorder?: 'blue' | 'green' | 'yellow' | 'orange' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  revealDelay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  id,
  hoverable = true,
  accentBorder = 'none',
  padding = 'md',
  revealDelay = 0
}) => {
  const shouldReduceMotion = useReducedMotion();

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4 sm:p-5',
    md: 'p-6 sm:p-8',
    lg: 'p-8 sm:p-10'
  };

  const accentStyles = {
    none: '',
    blue: 'border-t-4 border-t-[#36699C]',
    green: 'border-t-4 border-t-[#7DBC5E]',
    yellow: 'border-t-4 border-t-[#DAA761]',
    orange: 'border-t-4 border-t-[#D26353]'
  };

  const hoverEffect = hoverable
    ? 'transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#36699C]/40'
    : '';

  return (
    <motion.div
      id={id}
      data-accent-border={accentBorder}
      initial={shouldReduceMotion ? false : { y: 18, scale: 0.982 }}
      whileInView={shouldReduceMotion ? undefined : { y: 0, scale: 1 }}
      whileHover={hoverable && !shouldReduceMotion ? { y: -4, transition: { duration: 0.2 } } : undefined}
      whileTap={hoverable && !shouldReduceMotion ? { scale: 0.99, transition: { duration: 0.12 } } : undefined}
      viewport={shouldReduceMotion ? undefined : { once: false, amount: 0.22, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.42,
        delay: shouldReduceMotion ? 0 : revealDelay / 1000,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`bg-white rounded-2xl border border-[#DBE4EB] shadow-xs ${paddingStyles[padding]} ${accentStyles[accentBorder]} ${hoverEffect} ${className}`}
    >
      {children}
    </motion.div>
  );
};
