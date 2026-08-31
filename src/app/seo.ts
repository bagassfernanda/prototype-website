import type { Metadata } from 'next';
import { translateTextValue } from '../content/i18nText';
import {
  DEFAULT_LOCALE,
  toLocalizedPath,
  type Locale
} from '../utils/i18nRouting';

const SITE_URL = 'https://artavel.co.id';

interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
  locale?: Locale;
}

export const createPageMetadata = ({
  title,
  description,
  path = '/',
  locale = DEFAULT_LOCALE
}: PageMetadataInput): Metadata => {
  const localizedPath = toLocalizedPath(path, locale);
  const url = new URL(localizedPath, SITE_URL).toString();
  const idUrl = new URL(toLocalizedPath(path, 'id'), SITE_URL).toString();
  const enUrl = new URL(toLocalizedPath(path, 'en'), SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        id: idUrl,
        en: enUrl,
        'x-default': idUrl
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PT Artavel',
      locale: locale === 'en' ? 'en_US' : 'id_ID',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};

export const createLocalizedPageMetadata = (
  input: Omit<PageMetadataInput, 'locale'>,
  locale: Locale = DEFAULT_LOCALE
) => {
  return createPageMetadata({
    ...input,
    title: translateTextValue(input.title, locale),
    description: translateTextValue(input.description, locale),
    locale
  });
};

export const siteMetadataBase = new URL(SITE_URL);
