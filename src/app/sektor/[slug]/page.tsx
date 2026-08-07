import { notFound } from 'next/navigation';
import { SectorDetailClient } from '../../_client-pages/SectorDetailClient';
import { SECTORS_DATA } from '../../../content/sectors';
import { createPageMetadata } from '../../seo';

interface SectorRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

const SECTOR_SLUG_ALIASES: Record<string, string> = {
  'pemerintah-daerah': 'pemerintahan',
  'instansi-publik': 'pemerintahan',
  pemerintah: 'pemerintahan',
  organisasi: 'organisasi-dan-perusahaan',
  perusahaan: 'organisasi-dan-perusahaan',
  'organisasi-perusahaan': 'organisasi-dan-perusahaan',
  bumd: 'organisasi-dan-perusahaan',
  'layanan-public': 'layanan-publik',
  'layanan-terpadu': 'layanan-publik',
  'pusat-layanan': 'layanan-publik',
  mpp: 'layanan-publik'
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
  const resolvedSlug = resolveSectorSlug(slug);
  const sector = SECTORS_DATA.find((item) => item.slug === resolvedSlug);

  if (!sector) {
    return createPageMetadata({
      title: 'Sektor Tidak Ditemukan - PT Artavel',
      description: 'Halaman sektor layanan yang Anda cari tidak ditemukan.',
      path: `/sektor/${slug}`
    });
  }

  return createPageMetadata({
    title: `${sector.title} - PT Artavel`,
    description: sector.description,
    path: `/sektor/${sector.slug}`
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
