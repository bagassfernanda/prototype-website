import { notFound } from 'next/navigation';
import { SolutionDetailClient } from '../../_client-pages/SolutionDetailClient';
import { SOLUTIONS_DATA } from '../../../content/solutions';
import { createPageMetadata } from '../../seo';

interface SolutionRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

const SOLUTION_SLUG_ALIASES: Record<string, string> = {
  'layanan-publik': 'pelayanan-publik-dan-perizinan',
  'pelayanan-publik': 'pelayanan-publik-dan-perizinan',
  'pelayanan-publik-dan-perizinan-terpadu': 'pelayanan-publik-dan-perizinan',
  'perizinan-terpadu': 'pelayanan-publik-dan-perizinan',
  sippadu: 'pelayanan-publik-dan-perizinan',
  'manajemen-dokumen': 'manajemen-dokumen-dan-arsip',
  'manajemen-dokumen-dan-kearsipan-digital': 'manajemen-dokumen-dan-arsip',
  'kearsipan-digital': 'manajemen-dokumen-dan-arsip',
  archive: 'manajemen-dokumen-dan-arsip',
  tnde: 'tata-naskah-dinas-elektronik',
  'tata-naskah': 'tata-naskah-dinas-elektronik',
  'tata-naskah-elektronik': 'tata-naskah-dinas-elektronik',
  sianter: 'sistem-antrean-dan-tracking',
  'sistem-antrean': 'sistem-antrean-dan-tracking',
  'antrean-dan-tracking': 'sistem-antrean-dan-tracking',
  digitalisasi: 'digitalisasi-dan-alih-media',
  'alih-media': 'digitalisasi-dan-alih-media',
  'alih-media-dokumen': 'digitalisasi-dan-alih-media',
  'keamanan-data': 'keamanan-data-dan-integrasi',
  'integrasi-sistem': 'keamanan-data-dan-integrasi',
  'cctv-iot': 'cctv-iot-dan-monitoring',
  'cctv-dan-iot': 'cctv-iot-dan-monitoring',
  website: 'website-ui-ux-dan-aplikasi-web',
  'website-uiux': 'website-ui-ux-dan-aplikasi-web',
  'ui-ux': 'website-ui-ux-dan-aplikasi-web',
  'aplikasi-web': 'website-ui-ux-dan-aplikasi-web'
};

const resolveSolutionSlug = (slug: string) => SOLUTION_SLUG_ALIASES[slug] ?? slug;

export const generateStaticParams = () => {
  return [
    ...SOLUTIONS_DATA.map((solution) => ({
      slug: solution.slug
    })),
    ...Object.keys(SOLUTION_SLUG_ALIASES).map((slug) => ({
      slug
    }))
  ];
};

export const generateMetadata = async ({ params }: SolutionRouteProps) => {
  const { slug } = await params;
  const resolvedSlug = resolveSolutionSlug(slug);
  const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

  if (!solution) {
    return createPageMetadata({
      title: 'Solusi Tidak Ditemukan - PT Artavel',
      description: 'Halaman solusi yang Anda cari tidak ditemukan.',
      path: `/solusi/${slug}`
    });
  }

  return createPageMetadata({
    title: `${solution.title} - PT Artavel`,
    description: solution.heroDescription,
    path: `/solusi/${solution.slug}`
  });
};

export default async function SolutionDetail({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const resolvedSlug = resolveSolutionSlug(slug);
  const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

  if (!solution) {
    notFound();
  }

  return <SolutionDetailClient slug={resolvedSlug} />;
}
