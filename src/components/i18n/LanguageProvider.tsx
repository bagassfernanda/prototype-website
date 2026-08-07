'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translateTextValue } from '../../content/i18nText';

export type Language = 'id' | 'en';

type TranslationKey =
  | 'nav.solutions'
  | 'nav.sectors'
  | 'nav.caseStudies'
  | 'nav.howWeWork'
  | 'nav.about'
  | 'nav.insights'
  | 'nav.contact'
  | 'nav.cta'
  | 'hero.badge.public'
  | 'hero.badge.security'
  | 'hero.badge.infrastructure'
  | 'hero.headline.main'
  | 'hero.headline.green'
  | 'hero.headline.blue'
  | 'hero.description'
  | 'hero.cta.primary'
  | 'hero.cta.secondary'
  | 'hero.point.security'
  | 'hero.point.apps'
  | 'hero.point.infrastructure'
  | 'hero.controls.previous'
  | 'hero.controls.next'
  | 'hero.controls.pause'
  | 'hero.controls.play'
  | 'common.language';

const translations: Record<Language, Record<TranslationKey, string>> = {
  id: {
    'nav.solutions': 'Solusi',
    'nav.sectors': 'Sektor',
    'nav.caseStudies': 'Studi Kasus',
    'nav.howWeWork': 'Cara Kami Bekerja',
    'nav.about': 'Tentang Artavel',
    'nav.insights': 'Wawasan',
    'nav.contact': 'Kontak',
    'nav.cta': 'Konsultasikan Kebutuhan',
    'hero.badge.public': 'Pelayanan Publik Digital',
    'hero.badge.security': 'Keamanan Data & Dokumen',
    'hero.badge.infrastructure': 'CCTV, IoT & Infrastruktur',
    'hero.headline.main': 'Menata layanan publik.',
    'hero.headline.green': 'Melindungi data.',
    'hero.headline.blue': 'Menghubungkan teknologi.',
    'hero.description':
      'PT Artavel membantu instansi dan organisasi membangun aplikasi pelayanan, kearsipan elektronik, keamanan data, CCTV & IoT, website, UI/UX, dan otomasi dokumen yang formal, terukur, dan siap dikembangkan.',
    'hero.cta.primary': 'Konsultasikan Kebutuhan',
    'hero.cta.secondary': 'Jelajahi Solusi',
    'hero.point.security': 'Keamanan Data & Audit Trail',
    'hero.point.apps': 'Aplikasi, Web & UI/UX',
    'hero.point.infrastructure': 'CCTV, IoT & Integrasi Sistem',
    'hero.controls.previous': 'Tampilkan slide sebelumnya',
    'hero.controls.next': 'Tampilkan slide berikutnya',
    'hero.controls.pause': 'Hentikan slide otomatis',
    'hero.controls.play': 'Jalankan slide otomatis',
    'common.language': 'Bahasa'
  },
  en: {
    'nav.solutions': 'Solutions',
    'nav.sectors': 'Sectors',
    'nav.caseStudies': 'Case Studies',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About Artavel',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.cta': 'Discuss Your Needs',
    'hero.badge.public': 'Digital Public Services',
    'hero.badge.security': 'Data & Document Security',
    'hero.badge.infrastructure': 'CCTV, IoT & Infrastructure',
    'hero.headline.main': 'Structuring public services.',
    'hero.headline.green': 'Protecting data.',
    'hero.headline.blue': 'Connecting technology.',
    'hero.description':
      'PT Artavel helps institutions and organizations build service applications, electronic archives, data security, CCTV & IoT, websites, UI/UX, and document automation that are formal, measurable, and ready to scale.',
    'hero.cta.primary': 'Discuss Your Needs',
    'hero.cta.secondary': 'Explore Solutions',
    'hero.point.security': 'Data Security & Audit Trail',
    'hero.point.apps': 'Applications, Web & UI/UX',
    'hero.point.infrastructure': 'CCTV, IoT & System Integration',
    'hero.controls.previous': 'Show previous slide',
    'hero.controls.next': 'Show next slide',
    'hero.controls.pause': 'Pause automatic slides',
    'hero.controls.play': 'Play automatic slides',
    'common.language': 'Language'
  }
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  text: (value: string) => string;
  localize: <T>(value: T) => T;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('artavel-language');
    if (savedLanguage === 'id' || savedLanguage === 'en') {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('artavel-language', nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  const value = useMemo<LanguageContextValue>(
    () => {
      const text = (input: string) => translateTextValue(input, language);
      const localize = <T,>(input: T): T => {
        if (typeof input === 'string') {
          return text(input) as T;
        }

        if (Array.isArray(input)) {
          return input.map((item) => localize(item)) as T;
        }

        if (input && typeof input === 'object') {
          return Object.fromEntries(
            Object.entries(input).map(([key, item]) => [key, localize(item)])
          ) as T;
        }

        return input;
      };

      return {
        language,
        setLanguage,
        t: (key) => translations[language][key],
        text,
        localize
      };
    },
    [language]
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
};
