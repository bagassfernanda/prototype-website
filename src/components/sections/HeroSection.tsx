import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileCheck,
  Pause,
  Play,
  ShieldCheck
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { SmarchlinkBadge } from '../brand/SmarchlinkBadge';
import { useLanguage } from '../i18n/LanguageProvider';

interface HeroSectionProps {
  onNavigate: (path: string) => void;
}

interface HeroSlide {
  id: string;
  labelKey: 'hero.badge.public' | 'hero.badge.security' | 'hero.badge.infrastructure';
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'pelayanan-publik-digital',
    labelKey: 'hero.badge.public',
    title: 'Sistem perizinan, antrean, dan layanan masyarakat yang lebih tertata.',
    description:
      'Artavel membantu instansi membangun alur permohonan, verifikasi, persetujuan, notifikasi, dan pelaporan layanan publik dalam satu ekosistem digital.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=82',
    imageAlt: 'Dashboard analitik digital untuk pemantauan layanan dan data organisasi'
  },
  {
    id: 'keamanan-data-dokumen',
    labelKey: 'hero.badge.security',
    title: 'Perlindungan data, arsip, dan akses sistem yang dapat diaudit.',
    description:
      'Hak akses, audit trail, backup, endpoint security, dan kontrol dokumen dirancang agar informasi penting tetap terlindungi dan mudah dipertanggungjawabkan.',
    imageUrl:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=82',
    imageAlt: 'Visual keamanan data digital dengan kode dan sistem perlindungan informasi'
  },
  {
    id: 'infrastruktur-iot',
    labelKey: 'hero.badge.infrastructure',
    title: 'Perangkat, jaringan, website, dan aplikasi yang saling terhubung.',
    description:
      'Dari CCTV, IoT, jaringan, website, UI/UX, hingga integrasi aplikasi, Artavel menyiapkan fondasi teknologi yang mudah dikembangkan.',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=82',
    imageAlt: 'Papan sirkuit elektronik sebagai visual teknologi IoT dan perangkat terhubung'
  }
];

const AUTO_SLIDE_MS = 6500;

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const { t, text } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, AUTO_SLIDE_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
  };

  return (
    <section className="relative min-h-svh overflow-hidden bg-[#071927] text-white">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="absolute inset-0 h-full w-full object-cover"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.imageAlt}
              fill
              priority={activeSlide === 0}
              sizes="100vw"
              quality={82}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,18,31,0.96)_0%,rgba(8,32,49,0.90)_52%,rgba(7,25,39,0.56)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(54,105,156,0.22),rgba(125,188,94,0.14)_48%,rgba(5,18,31,0.30))]" />
        <div className="artavel-dot-grid absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#071927] to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:px-8">
        <div className="flex max-w-6xl flex-col gap-7 text-left">
          <motion.div
            initial={shouldReduceMotion ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center flex-wrap gap-3"
          >
              <Badge variant="green" size="md" className="bg-white/10 text-white border-white/20 backdrop-blur">
                {t(slide.labelKey)}
              </Badge>
              <SmarchlinkBadge size="sm" />
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { y: 26 }}
            animate={{ y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.65, delay: shouldReduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
              <h1 className="artavel-text-balance max-w-6xl text-4xl font-extrabold leading-[1.06] tracking-normal sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block font-heading text-white">{t('hero.headline.main')}</span>
                <span className="block font-heading font-black tracking-normal text-[#8FD871] drop-shadow-[0_8px_24px_rgba(125,188,94,0.20)]">{t('hero.headline.green')}</span>
                <span className="block font-heading text-[#8BC4FF]">{t('hero.headline.blue')}</span>
              </h1>
              <p className="max-w-4xl text-base leading-relaxed text-white/76 sm:text-lg lg:text-xl">
                {t('hero.description')}
              </p>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.58, delay: shouldReduceMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center"
          >
              <Button
                variant="primary"
                size="lg"
                className="bg-[#2F79B7] hover:bg-[#225B8B] shadow-[0_18px_42px_rgba(47,121,183,0.35)]"
                onClick={() => onNavigate('/kontak')}
                rightIcon={<ArrowRight className="w-5 h-5" aria-hidden="true" />}
              >
                {t('hero.cta.primary')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="artavel-hero-secondary-button bg-white/12 !text-white backdrop-blur border border-white/18"
                onClick={() => onNavigate('/solusi')}
              >
                {t('hero.cta.secondary')}
              </Button>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.58, delay: shouldReduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="grid max-w-5xl grid-cols-1 gap-3 border-t border-white/18 pt-5 text-xs font-semibold text-white/85 sm:grid-cols-3"
          >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8BC4FF]" aria-hidden="true" />
                <span>{t('hero.point.security')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#8FD871]" aria-hidden="true" />
                <span>{t('hero.point.apps')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#A8E08F]" aria-hidden="true" />
                <span>{t('hero.point.infrastructure')}</span>
              </div>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 pt-1"
            aria-label="Kontrol slide hero"
          >
              <button
                type="button"
                onClick={goToPrevious}
                aria-label={t('hero.controls.previous')}
                className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#173955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="mx-auto h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label={t('hero.controls.next')}
                className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#173955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="mx-auto h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsPaused((current) => !current)}
                aria-label={isPaused ? t('hero.controls.play') : t('hero.controls.pause')}
                className="h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-[#173955] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {isPaused ? (
                  <Play className="mx-auto h-4 w-4" aria-hidden="true" />
                ) : (
                  <Pause className="mx-auto h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <div className="flex items-center gap-2 pl-1">
                {HERO_SLIDES.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}: ${t(item.labelKey)}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      index === activeSlide ? 'w-9 bg-[#8FD871]' : 'w-2.5 bg-white/40 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.62, delay: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 hidden max-w-5xl lg:block"
        >
            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/18 bg-white/[0.12] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl xl:p-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#58A6DB]" />
                  <div className="w-3 h-3 rounded-full bg-[#7DBC5E]" />
                  <div className="w-3 h-3 rounded-full bg-[#A8E08F]" />
                  <span className="text-xs font-semibold text-white/80 ml-2">
                    Artavel Control Center
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/12 text-white border border-white/18">
                  {text('Data Demo')}
                </span>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => onNavigate('/solusi/pelayanan-publik-dan-perizinan')}
                  aria-label={text('Lihat detail solusi SIPPADU')}
                  className="w-full p-3.5 rounded-xl bg-white/14 border border-white/18 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left cursor-pointer transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="w-[4.5rem] h-9 shrink-0 rounded-lg bg-[#2F79B7] text-white flex items-center justify-center font-bold text-[10px] leading-none tracking-wide">
                      SIPPADU
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white">{text('Izin Layanan Publik #PRZ-089')}</div>
                      <div className="text-xs text-white/66">{text('Dinas PMPTSP - Verifikasi Teknis')}</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EFF8EA] text-[#3F7330]">
                    {text('Disetujui')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/solusi/manajemen-dokumen-dan-arsip')}
                  aria-label={text('Lihat detail solusi Smarchlink Archive')}
                  className="w-full p-3.5 rounded-xl bg-white/10 border border-white/16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left cursor-pointer transition-colors hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="w-[4.5rem] h-9 shrink-0 rounded-lg bg-[#568F3E] text-white flex items-center justify-center font-bold text-[10px] leading-none tracking-wide">
                      ARCHIVE
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white">{text('Arsip Keputusan Kepala Dinas')}</div>
                      <div className="text-xs text-white/66">{text('Klasifikasi 000.1.2 - Ter-index OCR')}</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-[#EAF2F8] text-[#244F78]">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {text('< 3 Detik')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/solusi/sistem-antrean-dan-tracking')}
                  aria-label={text('Lihat detail solusi SIANTER')}
                  className="w-full p-3.5 rounded-xl bg-white/10 border border-white/16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-left cursor-pointer transition-colors hover:bg-white/18 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="w-[4.5rem] h-9 shrink-0 rounded-lg bg-[#68A94B] text-white flex items-center justify-center font-bold text-[10px] leading-none tracking-wide">
                      SIANTER
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-bold text-white">{text('Antrean Loket Pelayanan A-042')}</div>
                      <div className="text-xs text-white/66">{text('MPP Terpadu - Panggilan Suara')}</div>
                    </div>
                  </div>
                  <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/14 text-white">
                    {text('Sedang Dipanggil')}
                  </span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-white/66">
                <span>{text('Alur proses berjalan real-time')}</span>
                <span className="font-semibold text-[#A8E08F]">{text('TTE BSrE aktif')}</span>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
