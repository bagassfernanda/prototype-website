import React, { useEffect } from 'react';

interface JsonLdInjectorProps {
  type: 'Organization' | 'Service' | 'Product' | 'BreadcrumbList' | 'FAQPage';
  data: Record<string, unknown>;
  id?: string;
}

export const JsonLdInjector: React.FC<JsonLdInjectorProps> = ({
  type,
  data,
  id = 'jsonld-schema'
}) => {
  useEffect(() => {
    const scriptId = `jsonld-${type.toLowerCase()}-${id}`;
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement;

    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const jsonLdContent = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };

    scriptElement.text = JSON.stringify(jsonLdContent);

    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) {
        existing.remove();
      }
    };
  }, [type, data, id]);

  return null;
};
