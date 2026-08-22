import { notFound } from 'next/navigation';
import { SectorDetailClient } from '../../_client-pages/SectorDetailClient';
import { SECTORS_DATA } from '../../../content/sectors';
import { translateTextValue } from '../../../content/i18nText';
import { createPageMetadata, getRequestLocale } from '../../seo';

interface SectorRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

const SECTOR_SLUG_ALIASES: Record<string, string> = {
  pemerintahan: 'pemerintah-layanan-publik',
  'pemerintah-daerah': 'pemerintah-layanan-publik',
  'instansi-publik': 'pemerintah-layanan-publik',
  pemerintah: 'pemerintah-layanan-publik',
  'layanan-publik': 'pemerintah-layanan-publik',
  'layanan-public': 'pemerintah-layanan-publik',
  'layanan-terpadu': 'pemerintah-layanan-publik',
  'pusat-layanan': 'pemerintah-layanan-publik',
  mpp: 'pemerintah-layanan-publik',
  organisasi: 'enterprise-organisasi',
  perusahaan: 'enterprise-organisasi',
  'organisasi-dan-perusahaan': 'enterprise-organisasi',
  'organisasi-perusahaan': 'enterprise-organisasi',
  bumd: 'enterprise-organisasi',
  enterprise: 'enterprise-organisasi',
  'enterprise-organizations': 'enterprise-organisasi',
  education: 'pendidikan',
  retail: 'retail-fnb'
};

const resolveSectorSlug = (slug: string) => SECTOR_SLUG_ALIASES[slug] ?? slug;

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

export const generateMetadata = async ({ params }: SectorRouteProps) => {
  const { slug } = await params;
  const locale = await getRequestLocale();
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
