import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';
import { SiteShell } from '../components/layout/SiteShell';
import { siteMetadataBase } from './seo';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: 'PT Artavel - Solusi Digital, Keamanan Data & Integrasi Teknologi',
    template: '%s'
  },
  description:
    'PT Artavel menyediakan solusi digital, aplikasi, keamanan data, CCTV IoT, website, UI/UX, kearsipan digital, dan integrasi teknologi untuk organisasi.',
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" data-theme="light" data-theme-mode="auto" suppressHydrationWarning>
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
                  var hour = new Date().getHours();
                  var resolved = mode === 'auto' ? (hour >= 18 || hour < 6 ? 'dark' : 'light') : mode;
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
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
