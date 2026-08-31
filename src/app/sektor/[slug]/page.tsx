import { notFound } from 'next/navigation';
import { SectorDetailClient } from '../../_client-pages/SectorDetailClient';
import { SECTORS_DATA } from '../../../content/sectors';
import { translateTextValue } from '../../../content/i18nText';
import { createPageMetadata } from '../../seo';
import { DEFAULT_LOCALE } from '../../../utils/i18nRouting';
import { resolveSectorSlug, SECTOR_SLUG_ALIASES } from '../../../utils/routeAliases';

interface SectorRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return [
    ...SECTORS_DATA.map((sector) => ({
      slug: sector.slug
    })),
    ...Object.keys(SECTOR_SLUG_ALIASES).map((slug) => ({
      slug
    }))
  ];
};

export const dynamicParams = false;

export const generateMetadata = async ({ params }: SectorRouteProps) => {
  const { slug } = await params;
  const locale = DEFAULT_LOCALE;
  const resolvedSlug = resolveSectorSlug(slug);
  const sector = SECTORS_DATA.find((item) => item.slug === resolvedSlug);

  if (!sector) {
    return createPageMetadata({
      title: translateTextValue('Sektor Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue('Halaman sektor layanan yang Anda cari tidak ditemukan.', locale),
      path: `/sektor/${slug}`,
      locale
    });
  }

  return createPageMetadata({
    title: `${translateTextValue(sector.title, locale)} - PT Artavel`,
    description: translateTextValue(sector.description, locale),
    path: `/sektor/${sector.slug}`,
    locale
  });
};

export default async function SectorDetail({ params }: SectorRouteProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSectorSlug(slug);
  const sector = SECTORS_DATA.find((item) => item.slug === resolvedSlug);

  if (!sector) {
    notFound();
  }

  return <SectorDetailClient slug={resolvedSlug} />;
}
