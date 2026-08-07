import React, { useEffect } from 'react';

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
    const canonicalUrl = `https://artavel.co.id${canonicalPath}`;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', canonicalUrl);
  }, [title, description, canonicalPath, ogType]);

  return null;
};
