import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalizedPath } from '../../utils/i18nRouting';

interface MetaInjectorProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
}

export const MetaInjector: React.FC<MetaInjectorProps> = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website'
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);

    // Canonical link
    const localizedCanonicalPath = toLocalizedPath(canonicalPath, language);
    const canonicalUrl = `https://artavel.co.id${localizedCanonicalPath}`;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);

    const setAlternateLink = (hrefLang: string, href: string) => {
      let element = document.querySelector(`link[rel="alternate"][hreflang="${hrefLang}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'alternate');
        element.setAttribute('hreflang', hrefLang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    const idUrl = `https://artavel.co.id${toLocalizedPath(canonicalPath, 'id')}`;
    const enUrl = `https://artavel.co.id${toLocalizedPath(canonicalPath, 'en')}`;
    setAlternateLink('id', idUrl);
    setAlternateLink('en', enUrl);
    setAlternateLink('x-default', idUrl);
  }, [title, description, canonicalPath, ogType, language]);

  return null;
};
