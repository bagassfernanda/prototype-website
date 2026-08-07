'use client';

import { useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
  const pathname = usePathname() || '/';

  return useCallback(
    (path: string) => {
      if (path === pathname) {
        scrollToPageTop();
        return;
      }
      router.push(path);
    },
    [pathname, router]
  );
};
