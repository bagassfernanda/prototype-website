import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { translateTextValue } from '../content/i18nText';
import {
  DEFAULT_LOCALE,
  LOCALE_REQUEST_HEADER,
  isLocale,
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

export const getRequestLocale = async (): Promise<Locale> => {
  const requestHeaders = await headers();
  const requestLocale = requestHeaders.get(LOCALE_REQUEST_HEADER);
  return isLocale(requestLocale) ? requestLocale : DEFAULT_LOCALE;
};

export const createLocalizedPageMetadata = async (input: Omit<PageMetadataInput, 'locale'>) => {
  const locale = await getRequestLocale();

  return createPageMetadata({
    ...input,
    title: translateTextValue(input.title, locale),
    description: translateTextValue(input.description, locale),
    locale
  });
};

export const siteMetadataBase = new URL(SITE_URL);
