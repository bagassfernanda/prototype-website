'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLanguage } from '../i18n/LanguageProvider';
import { getInternalPathname, getLocaleFromPathname, toLocalizedPath } from '../../utils/i18nRouting';

const scrollToPageTop = () => {
  const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: shouldReduceMotion ? 'auto' : 'smooth'
  });
  document.getElementById('main-content')?.focus({ preventScroll: true });
};

export const useNextNavigate = () => {
  const router = useRouter();
  const displayPathname = usePathname() || '/';
  const pathname = getInternalPathname(displayPathname);
  const { language } = useLanguage();

  return useCallback(
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
    [displayPathname, language, pathname, router]
  );
};

const normalizeDisplayPath = (path: string) => {
  const pathname = path.split('#')[0]?.split('?')[0] || '/';
  const withoutTrailingSlash = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return withoutTrailingSlash || '/';
};
