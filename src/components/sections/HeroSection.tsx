'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { useLanguage } from '../i18n/LanguageProvider';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

const HERO_VIDEO = '/videos/artavel-hero.mp4';
const HERO_POSTER = '/videos/artavel-hero-poster.jpg';

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoAutoplay, setVideoAutoplay] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncVideoPlayback = () => {
      const canPlay = !reducedMotionQuery.matches && !document.hidden;
      setVideoAutoplay(canPlay);

      if (canPlay) {
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    };

    syncVideoPlayback();
    document.addEventListener('visibilitychange', syncVideoPlayback);
    reducedMotionQuery.addEventListener('change', syncVideoPlayback);

    return () => {
      document.removeEventListener('visibilitychange', syncVideoPlayback);
      reducedMotionQuery.removeEventListener('change', syncVideoPlayback);
      video.pause();
    };
  }, []);

  return (
    <section
      id="hero-artavel"
      aria-labelledby="hero-artavel-heading"
      className="relative isolate overflow-hidden bg-[#071927] bg-cover bg-center text-white lg:min-h-dvh"
      style={{ backgroundImage: `url(${HERO_POSTER})` }}
    >
      <div
        className="relative z-0 h-[clamp(18rem,52svh,30rem)] bg-[#071927] sm:h-[clamp(20rem,56svh,32rem)] md:h-[clamp(24rem,58svh,38rem)] lg:absolute lg:inset-0 lg:h-auto"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay={videoAutoplay}
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[42%_center] md:object-[42%_center] lg:object-[44%_center]"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,18,31,0.08)_0%,rgba(5,18,31,0.42)_100%)] lg:bg-[linear-gradient(90deg,rgba(5,18,31,0.84)_0%,rgba(8,32,49,0.62)_48%,rgba(7,25,39,0.28)_100%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(5,18,31,0.12),rgba(54,105,156,0.04)_48%,rgba(125,188,94,0.08))] lg:bg-[linear-gradient(135deg,rgba(5,18,31,0.30),rgba(54,105,156,0.08)_48%,rgba(125,188,94,0.10))]"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071927]/70 to-transparent lg:h-36 lg:from-[#071927]/90" aria-hidden="true" />
      </div>

      <motion.div
        initial={shouldReduceMotion ? { opacity: 1 } : { y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center bg-[#071927] px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14 lg:min-h-dvh lg:bg-transparent lg:px-8 lg:pb-16 lg:pt-28 xl:pt-32"
      >
        <div className="max-w-2xl text-left lg:max-w-[38rem]">
          <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-7">
            <Badge variant="green" size="md" className="border-white/20 bg-white/10 text-white backdrop-blur">
              {t('hero.badge.public')}
            </Badge>
          </div>

          <h1
            id="hero-artavel-heading"
            className="artavel-text-balance max-w-[34rem] text-4xl font-extrabold leading-[1.06] tracking-normal sm:text-5xl md:text-6xl lg:max-w-[36rem] lg:text-5xl xl:text-6xl 2xl:text-7xl"
          >
            <span className="block font-heading text-white">{t('hero.headline.main')}</span>
            <span className="block font-heading font-black tracking-normal text-[#8FD871] drop-shadow-[0_8px_24px_rgba(125,188,94,0.20)]">
              {t('hero.headline.green')}
            </span>
          </h1>

          <p className="mt-5 max-w-[34rem] text-sm leading-relaxed text-white/80 sm:mt-6 sm:text-base md:text-lg lg:text-lg xl:text-xl">
            {t('hero.description')}
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button
              variant="primary"
              size="lg"
              className="w-full bg-[#2F79B7] shadow-[0_18px_42px_rgba(47,121,183,0.35)] hover:bg-[#225B8B] sm:w-auto"
              onClick={() => onNavigate('/kontak')}
              rightIcon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
            >
              {t('hero.cta.primary')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="artavel-hero-secondary-button w-full border border-white/20 bg-white/10 !text-white backdrop-blur sm:w-auto"
              onClick={() => onNavigate('/solusi')}
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>

        </div>
      </motion.div>
    </section>
  );
};
