'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type ThemeMode = 'auto' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setMode: (mode: ThemeMode) => void;
}

const STORAGE_KEY = 'artavel-theme-mode';
const ThemeContext = createContext<ThemeContextValue | null>(null);

const resolveSystemTheme = (): ResolvedTheme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const resolveTheme = (mode: ThemeMode): ResolvedTheme => {
  return mode === 'auto' ? resolveSystemTheme() : mode;
};

const applyTheme = (mode: ThemeMode, resolvedTheme: ResolvedTheme) => {
  document.documentElement.dataset.themeMode = mode;
  document.documentElement.dataset.theme = resolvedTheme;
  document.documentElement.style.colorScheme = resolvedTheme;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>('auto');
  // Keep the first client render identical to the server render. The actual
  // system preference is read in an effect after hydration has completed.
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    const nextMode: ThemeMode =
      savedMode === 'light' || savedMode === 'dark' || savedMode === 'auto' ? savedMode : 'auto';

    setModeState(nextMode);
    setResolvedTheme(resolveTheme(nextMode));
  }, []);

  useEffect(() => {
    const updateResolvedTheme = () => {
      setResolvedTheme(resolveTheme(mode));
    };

    updateResolvedTheme();

    if (mode !== 'auto') return undefined;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateResolvedTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateResolvedTheme);
    };
  }, [mode]);

  useEffect(() => {
    applyTheme(mode, resolvedTheme);
  }, [mode, resolvedTheme]);

  const setMode = (nextMode: ThemeMode) => {
    setModeState(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
    setResolvedTheme(resolveTheme(nextMode));
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      resolvedTheme,
      setMode
    }),
    [mode, resolvedTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
};
