import { notFound, redirect } from 'next/navigation';
import { SolutionDetailClient } from '../../_client-pages/SolutionDetailClient';
import { SOLUTIONS_DATA } from '../../../content/solutions';
import { translateTextValue } from '../../../content/i18nText';
import { toLocalizedPath } from '../../../utils/i18nRouting';
import { createPageMetadata, getRequestLocale } from '../../seo';

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

const PRODUCT_ROUTE_REDIRECTS: Record<string, string> = {
  'ai-analytics-smart-monitoring': '/solusi#ai-analytics-smart-monitoring',
  'ai-analytics-monitoring': '/solusi#ai-analytics-smart-monitoring',
  'smart-monitoring': '/solusi#ai-analytics-smart-monitoring',
  'smartmap': '/produk/smartmap-gis-analytics',
  'smartmap-gis': '/produk/smartmap-gis-analytics',
  'smartmap-gis-analytics': '/produk/smartmap-gis-analytics',
  'gis-analytics': '/produk/smartmap-gis-analytics',
  'location-analytics': '/produk/smartmap-gis-analytics',
  'virtualmap': '/produk/smartmap-gis-analytics',
  jobmap: '/produk/smartmap-gis-analytics',
  'ai-cctv': '/produk/ai-cctv-computer-vision',
  'cctv-ai': '/produk/ai-cctv-computer-vision',
  'ai-cctv-computer-vision': '/produk/ai-cctv-computer-vision',
  'computer-vision': '/produk/ai-cctv-computer-vision',
  footfallcam: '/produk/footfallcam',
  'smart-education': '/solusi#smart-education',
  pendidikan: '/produk/otoschool',
  'sistem-pendidikan': '/produk/otoschool',
  'sistem-informasi-sekolah': '/produk/otoschool',
  'manajemen-pendidikan': '/produk/otoschool',
  'sistem-informasi-pendidikan': '/produk/otoschool',
  'administrasi-sekolah': '/produk/otoschool',
  'sistem-administrasi-sekolah': '/produk/otoschool',
  'sistem-administrasi-pendidikan': '/produk/otoschool',
  'retail-fnb': '/solusi#retail-fnb',
  'retail-f-and-b': '/solusi#retail-fnb',
  pos: '/produk/otopos-fnb',
  retail: '/produk/otopos-fnb',
  'pos-retail': '/produk/otopos-fnb',
  'otopos': '/produk/otopos-fnb',
  'otopos-fnb': '/produk/otopos-fnb',
  'kasir-multi-tenant': '/produk/otopos-fnb',
  'aplikasi-kasir': '/produk/otopos-fnb',
  'aplikasi-kasir-multi-tenant': '/produk/otopos-fnb',
  'cyber-security': '/produk/opentext-cybersecurity',
  cybersecurity: '/produk/opentext-cybersecurity',
  opentext: '/produk/opentext-cybersecurity',
  'opentext-cybersecurity': '/produk/opentext-cybersecurity',
  'endpoint-security': '/produk/opentext-cybersecurity',
  'security-awareness-training': '/produk/opentext-cybersecurity',
  'digital-government-enterprise': '/solusi#digital-government-enterprise',
  'digital-government': '/solusi#digital-government-enterprise',
  enterprise: '/solusi#digital-government-enterprise'
};

const getProductRedirectPath = (slug: string, resolvedSlug: string) =>
  PRODUCT_ROUTE_REDIRECTS[slug] ?? PRODUCT_ROUTE_REDIRECTS[resolvedSlug];

export const generateStaticParams = () => {
  return [
    ...SOLUTIONS_DATA.map((solution) => ({
      slug: solution.slug
    })),
    ...Object.keys(SOLUTION_SLUG_ALIASES).map((slug) => ({
      slug
    })),
    ...Object.keys(PRODUCT_ROUTE_REDIRECTS).map((slug) => ({
      slug
    }))
  ];
};

export const generateMetadata = async ({ params }: SolutionRouteProps) => {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const resolvedSlug = resolveSolutionSlug(slug);
  const productRedirectPath = getProductRedirectPath(slug, resolvedSlug);
  const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

  if (productRedirectPath) {
    return createPageMetadata({
      title: translateTextValue('Produk Digital Artavel - PT Artavel', locale),
      description: translateTextValue('Halaman ini telah dipindahkan ke detail produk Artavel yang relevan.', locale),
      path: productRedirectPath,
      locale
    });
  }

  if (!solution) {
    return createPageMetadata({
      title: translateTextValue('Solusi Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue('Halaman solusi yang Anda cari tidak ditemukan.', locale),
      path: `/solusi/${slug}`,
      locale
    });
  }

  return createPageMetadata({
    title: `${translateTextValue(solution.title, locale)} - PT Artavel`,
    description: translateTextValue(solution.heroDescription, locale),
    path: `/solusi/${solution.slug}`,
    locale
  });
};

export default async function SolutionDetail({ params }: SolutionRouteProps) {
  const { slug } = await params;
  const locale = await getRequestLocale();
  const resolvedSlug = resolveSolutionSlug(slug);
  const productRedirectPath = getProductRedirectPath(slug, resolvedSlug);
  const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

  if (productRedirectPath) {
    redirect(toLocalizedPath(productRedirectPath, locale));
  }

  if (!solution) {
    notFound();
  }

  return <SolutionDetailClient slug={resolvedSlug} />;
}
