import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { headers } from 'next/headers';
import { SiteShell } from '../components/layout/SiteShell';
import { siteMetadataBase } from './seo';
import { DEFAULT_LOCALE, LOCALE_REQUEST_HEADER, isLocale } from '../utils/i18nRouting';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: 'PT Artavel - Solusi Digital, Keamanan Data & Integrasi Teknologi',
    template: '%s'
  },
  description:
    'PT Artavel menyediakan solusi digital berbasis AI, analytics, IoT, security, Smart Education, Retail & F&B, SmartMap, dan Digital Government & Enterprise.',
  icons: {
    icon: [{ url: '/brand/artavel-official-logo-transparent.png', type: 'image/png' }],
    apple: [{ url: '/brand/artavel-official-logo-transparent.png', type: 'image/png' }]
  },
  applicationName: 'PT Artavel',
  authors: [{ name: 'PT Artavel' }],
  creator: 'PT Artavel',
  publisher: 'PT Artavel',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get(LOCALE_REQUEST_HEADER);
  const initialLanguage = isLocale(requestLocale) ? requestLocale : DEFAULT_LOCALE;

  return (
    <html lang={initialLanguage} data-scroll-behavior="smooth" data-theme="light" data-theme-mode="auto" suppressHydrationWarning>
      <head>
        <Script
          id="artavel-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var mode = window.localStorage.getItem('artavel-theme-mode') || 'auto';
                  if (mode !== 'auto' && mode !== 'light' && mode !== 'dark') mode = 'auto';
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var resolved = mode === 'auto' ? (prefersDark ? 'dark' : 'light') : mode;
                  document.documentElement.dataset.themeMode = mode;
                  document.documentElement.dataset.theme = resolved;
                  document.documentElement.style.colorScheme = resolved;
                } catch (error) {}
              })();
            `
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteShell initialLanguage={initialLanguage}>{children}</SiteShell>
      </body>
    </html>
  );
}
