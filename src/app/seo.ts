import type { Metadata } from 'next';

const SITE_URL = 'https://artavel.co.id';

interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
}

export const createPageMetadata = ({
  title,
  description,
  path = '/'
}: PageMetadataInput): Metadata => {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'PT Artavel',
      locale: 'id_ID',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  };
};

export const siteMetadataBase = new URL(SITE_URL);
