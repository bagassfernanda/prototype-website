'use client';

import React, { useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { LanguageProvider, useLanguage } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';
import { getInternalPathname, getLocaleFromPathname, toLocalizedPath, type Locale } from '../../utils/i18nRouting';

interface SiteShellProps {
  children: React.ReactNode;
  initialLanguage: Locale;
}

const SiteShellContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const displayPathname = usePathname() || '/';
  const pathname = getInternalPathname(displayPathname);
  const { language } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const scrollToPageTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth'
    });
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [shouldReduceMotion]);

  const navigate = useCallback(
    (path: string) => {
      const targetPath = getLocaleFromPathname(path)
        ? path
        : toLocalizedPath(path, language);
      const targetInternalPath = getInternalPathname(targetPath);
      const targetDisplayPath = normalizeDisplayPath(targetPath);
      const currentDisplayPath = normalizeDisplayPath(displayPathname);

      if (targetInternalPath === pathname && targetDisplayPath === currentDisplayPath) {
        scrollToPageTop();
        return;
      }
      router.push(targetPath);
    },
    [displayPathname, language, pathname, router, scrollToPageTop]
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#172536] font-sans antialiased">
        <Header currentPath={pathname} displayPath={displayPathname} onNavigate={navigate} />

        <main
          id="main-content"
          tabIndex={-1}
          className={`flex-1 overflow-x-hidden focus:outline-none ${pathname === '/' ? '' : 'pt-40 sm:pt-44 xl:pt-48'}`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={shouldReduceMotion ? false : { y: 14 }}
              animate={{ y: 0 }}
              exit={shouldReduceMotion ? { y: 0 } : { y: -10 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.24,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigate} />
      </div>
    </ThemeProvider>
  );
};

const normalizeDisplayPath = (path: string) => {
  const pathname = path.split('#')[0]?.split('?')[0] || '/';
  const withoutTrailingSlash = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return withoutTrailingSlash || '/';
};

export const SiteShell: React.FC<SiteShellProps> = ({ children, initialLanguage }) => (
  <SiteShellLocale initialLanguage={initialLanguage}>
    {children}
  </SiteShellLocale>
);

const SiteShellLocale: React.FC<SiteShellProps> = ({ children, initialLanguage }) => {
  const pathname = usePathname() || '/';
  const pathLocale = getLocaleFromPathname(pathname);

  return (
    <LanguageProvider initialLanguage={pathLocale ?? initialLanguage}>
      <SiteShellContent>{children}</SiteShellContent>
    </LanguageProvider>
  );
};
