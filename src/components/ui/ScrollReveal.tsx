'use client';

import React, { useEffect, useRef, useState } from 'react';

type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  threshold?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.18
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting && once) {
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  return (
    <div
      ref={ref}
      className={`artavel-scroll-reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      data-reveal-direction={direction}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
