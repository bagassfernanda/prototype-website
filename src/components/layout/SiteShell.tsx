'use client';

import React, { useCallback } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { usePathname, useRouter } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { LanguageProvider } from '../i18n/LanguageProvider';
import { ThemeProvider } from '../theme/ThemeProvider';

interface SiteShellProps {
  children: React.ReactNode;
}

export const SiteShell: React.FC<SiteShellProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname() || '/';
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
      if (path === pathname) {
        scrollToPageTop();
        return;
      }
      router.push(path);
    },
    [pathname, router, scrollToPageTop]
  );

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-white text-[#172536] font-sans antialiased">
          <Header currentPath={pathname} onNavigate={navigate} />

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
    </LanguageProvider>
  );
};
