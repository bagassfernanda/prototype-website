'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translateTextValue } from '../../content/i18nText';
import { LANGUAGE_COOKIE, isLocale, type Locale } from '../../utils/i18nRouting';

export type Language = Locale;

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
  | 'hero.headline.main'
  | 'hero.headline.green'
  | 'hero.description'
  | 'hero.cta.primary'
  | 'hero.cta.secondary'
  | 'common.language';

const translations: Record<Language, Record<TranslationKey, string>> = {
  id: {
    'nav.solutions': 'Solusi',
    'nav.sectors': 'Sektor',
    'nav.caseStudies': 'Studi Kasus',
    'nav.howWeWork': 'Cara Kami Bekerja',
    'nav.about': 'Tentang',
    'nav.insights': 'Wawasan',
    'nav.contact': 'Kontak',
    'nav.cta': 'Konsultasi',
    'hero.badge.public': 'AI • Analytics • IoT • Security',
    'hero.headline.main': 'Solusi Digital Terintegrasi',
    'hero.headline.green': 'untuk Bisnis & Organisasi',
    'hero.description':
      'Artavel menghadirkan solusi teknologi terintegrasi untuk pendidikan, retail, pemerintahan, dan enterprise.',
    'hero.cta.primary': 'Konsultasikan Kebutuhan',
    'hero.cta.secondary': 'Jelajahi Solusi',
    'common.language': 'Bahasa'
  },
  en: {
    'nav.solutions': 'Solutions',
    'nav.sectors': 'Industries',
    'nav.caseStudies': 'Case Studies',
    'nav.howWeWork': 'How We Work',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.cta': 'Consult',
    'hero.badge.public': 'AI • Analytics • IoT • Security',
    'hero.headline.main': 'Integrated Digital Solutions',
    'hero.headline.green': 'for Businesses & Organizations',
    'hero.description':
      'Artavel delivers integrated technology solutions for education, retail, government, and enterprise.',
    'hero.cta.primary': 'Discuss Your Requirements',
    'hero.cta.secondary': 'Explore Solutions',
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

const getCookieLanguage = () => {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${LANGUAGE_COOKIE}=`));
  const cookieValue = match?.split('=')[1];
  return isLocale(cookieValue) ? cookieValue : null;
};

const getPathLanguage = () => {
  if (typeof window === 'undefined') return null;
  const firstSegment = window.location.pathname.split('/').filter(Boolean)[0];
  return isLocale(firstSegment) ? firstSegment : null;
};

const persistLanguage = (nextLanguage: Language) => {
  window.localStorage.setItem(LANGUAGE_COOKIE, nextLanguage);
  document.cookie = `${LANGUAGE_COOKIE}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
  document.documentElement.lang = nextLanguage;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage?: Language }> = ({
  children,
  initialLanguage = 'id'
}) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_COOKIE);
    const nextLanguage = getPathLanguage() || getCookieLanguage() || (isLocale(savedLanguage) ? savedLanguage : initialLanguage);

    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
  }, [initialLanguage]);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    persistLanguage(nextLanguage);
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
