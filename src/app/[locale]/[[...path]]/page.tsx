import { notFound } from 'next/navigation';
import { AboutClient } from '../../_client-pages/AboutClient';
import { AccessibilityClient } from '../../_client-pages/AccessibilityClient';
import { AssessmentClient } from '../../_client-pages/AssessmentClient';
import { CaseStudiesClient } from '../../_client-pages/CaseStudiesClient';
import { CaseStudyDetailClient } from '../../_client-pages/CaseStudyDetailClient';
import { ContactClient } from '../../_client-pages/ContactClient';
import { HomeClient } from '../../_client-pages/HomeClient';
import { HowWeWorkClient } from '../../_client-pages/HowWeWorkClient';
import { InsightDetailClient } from '../../_client-pages/InsightDetailClient';
import { InsightsClient } from '../../_client-pages/InsightsClient';
import { PrivacyClient } from '../../_client-pages/PrivacyClient';
import { ProductDetailClient } from '../../_client-pages/ProductDetailClient';
import { ProductsClient } from '../../_client-pages/ProductsClient';
import { SectorDetailClient } from '../../_client-pages/SectorDetailClient';
import { SectorsClient } from '../../_client-pages/SectorsClient';
import { SolutionDetailClient } from '../../_client-pages/SolutionDetailClient';
import { SolutionsClient } from '../../_client-pages/SolutionsClient';
import { TermsClient } from '../../_client-pages/TermsClient';
import { createPageMetadata } from '../../seo';
import { translateTextValue } from '../../../content/i18nText';
import { ALL_INSIGHTS_DATA, getLocalizedInsights } from '../../../content/insights';
import { CASE_STUDIES_DATA } from '../../../content/caseStudies';
import { PRODUCTS_DATA, getProductBySlug } from '../../../content/products';
import { SECTORS_DATA } from '../../../content/sectors';
import { SOLUTIONS_DATA } from '../../../content/solutions';
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  isLocale,
  toLocalizedPath,
  translatePathnameToInternal,
  type Locale
} from '../../../utils/i18nRouting';
import {
  getProductRedirectPath,
  PRODUCT_ROUTE_REDIRECTS,
  resolveSectorSlug,
  resolveSolutionSlug,
  SECTOR_SLUG_ALIASES,
  SOLUTION_SLUG_ALIASES
} from '../../../utils/routeAliases';
import { ClientRedirect } from '../../../components/layout/ClientRedirect';

interface LocalizedRouteProps {
  params: Promise<{
    locale: string;
    path?: string[];
  }>;
}

const STATIC_PATHS = [
  '/',
  '/solusi',
  '/produk',
  '/sektor',
  '/studi-kasus',
  '/wawasan',
  '/assessment',
  '/tentang',
  '/cara-kami-bekerja',
  '/kontak',
  '/kebijakan-privasi',
  '/syarat-ketentuan',
  '/syarat-dan-ketentuan',
  '/aksesibilitas'
];

const DYNAMIC_PATHS = [
  ...PRODUCTS_DATA.map((product) => product.detailPath),
  ...SOLUTIONS_DATA.map((solution) => `/solusi/${solution.slug}`),
  ...Object.keys(SOLUTION_SLUG_ALIASES).map((slug) => `/solusi/${slug}`),
  ...Object.keys(PRODUCT_ROUTE_REDIRECTS).map((slug) => `/solusi/${slug}`),
  ...SECTORS_DATA.map((sector) => `/sektor/${sector.slug}`),
  ...Object.keys(SECTOR_SLUG_ALIASES).map((slug) => `/sektor/${slug}`),
  ...CASE_STUDIES_DATA.map((caseStudy) => `/studi-kasus/${caseStudy.slug}`),
  ...ALL_INSIGHTS_DATA.map((article) => `/wawasan/${article.slug}`)
];

const ALL_INTERNAL_PATHS = [...new Set([...STATIC_PATHS, ...DYNAMIC_PATHS])];

const pathWithoutHashOrQuery = (path: string) => path.split(/[?#]/, 1)[0] || '/';

const toRouteSegments = (path: string, locale: Locale) =>
  pathWithoutHashOrQuery(toLocalizedPath(path, locale))
    .split('/')
    .filter(Boolean)
    .slice(1);

const getInternalPath = (locale: Locale, path: string[] | undefined) => {
  const localizedPathname = path && path.length > 0 ? `/${path.join('/')}` : '/';
  return translatePathnameToInternal(localizedPathname, locale);
};

const getTopLevelMetadata = (path: string) => {
  const metadata: Record<string, { title: string; description: string }> = {
    '/': {
      title: 'PT Artavel - Solusi Digital Berbasis AI, Analytics, IoT & Security',
      description:
        'Artavel menghadirkan solusi teknologi terintegrasi untuk pendidikan, retail, pemerintahan, dan enterprise melalui AI, analytics, SmartMap/GIS, computer vision, IoT, cybersecurity, dan aplikasi bisnis.'
    },
    '/solusi': {
      title: 'Solusi Teknologi Artavel - PT Artavel',
      description:
        'Jelajahi lima keluarga solusi Artavel: AI, Analytics & Smart Monitoring, Smart Education, Retail & F&B, Cyber Security, serta Digital Government & Enterprise.'
    },
    '/produk': {
      title: 'Produk Digital Artavel - PT Artavel',
      description:
        'Produk dan solusi siap implementasi dari Artavel untuk Smart Education, Retail & F&B, SmartMap/GIS, AI CCTV, Digital Government, serta partner technology seperti FootfallCam dan OpenText.'
    },
    '/sektor': {
      title: 'Sektor Layanan - PT Artavel',
      description:
        'Solusi digital Artavel disesuaikan untuk pemerintah, pendidikan, retail dan F&B, enterprise, BUMD, lembaga, dan organisasi.'
    },
    '/studi-kasus': {
      title: 'Studi Kasus Implementasi — PT Artavel',
      description:
        'Pelajari bagaimana solusi Artavel dapat mendukung pelayanan publik, digitalisasi arsip, pengelolaan dokumen, dan kebutuhan organisasi.'
    },
    '/wawasan': {
      title: 'Wawasan & Transformasi Digital - PT Artavel',
      description:
        'Artikel, insight, dan panduan praktis dari tim Artavel mengenai AI, analytics, transformasi digital, pendidikan, retail, pemerintahan, IoT, cybersecurity, dan pengembangan sistem.'
    },
    '/assessment': {
      title: 'Cek Kesiapan Digital Organisasi — PT Artavel',
      description: 'Dapatkan gambaran awal kesiapan proses, data, keamanan, analytics, dan infrastruktur organisasi Anda.'
    },
    '/tentang': {
      title: 'Tentang PT Artavel',
      description:
        'Kenali PT Artavel sebagai mitra solusi digital untuk aplikasi, keamanan data, pelayanan publik, kearsipan, CCTV IoT, website, UI/UX, dan integrasi teknologi.'
    },
    '/cara-kami-bekerja': {
      title: 'Cara Kami Bekerja - PT Artavel',
      description:
        'Pendekatan kerja Artavel mulai dari discovery, desain solusi, implementasi, pelatihan, hingga dukungan berkelanjutan.'
    },
    '/kontak': {
      title: 'Hubungi PT Artavel - Konsultasi Solusi & Proposal',
      description:
        'Hubungi tim Artavel untuk memetakan kebutuhan organisasi, memilih solusi yang relevan, dan menyusun skenario implementasi yang sesuai.'
    },
    '/kebijakan-privasi': {
      title: 'Kebijakan Privasi - PT Artavel',
      description:
        'Kebijakan privasi website PT Artavel terkait pengumpulan, penggunaan, dan perlindungan data pengguna.'
    },
    '/syarat-ketentuan': {
      title: 'Syarat & Ketentuan - PT Artavel',
      description: 'Syarat dan ketentuan penggunaan website resmi PT Artavel.'
    },
    '/syarat-dan-ketentuan': {
      title: 'Syarat & Ketentuan - PT Artavel',
      description: 'Syarat dan ketentuan penggunaan website resmi PT Artavel.'
    },
    '/aksesibilitas': {
      title: 'Aksesibilitas - PT Artavel',
      description:
        'Komitmen aksesibilitas website PT Artavel untuk menghadirkan pengalaman digital yang dapat digunakan lebih banyak pengguna.'
    }
  };

  return metadata[path];
};

const getLocalizedMetadata = (internalPath: string, locale: Locale) => {
  const segments = internalPath.split('/').filter(Boolean);
  const topLevelMetadata = getTopLevelMetadata(internalPath);

  if (topLevelMetadata) {
    return createPageMetadata({
      title: translateTextValue(topLevelMetadata.title, locale),
      description: translateTextValue(topLevelMetadata.description, locale),
      path: internalPath,
      locale
    });
  }

  if (segments.length === 2 && segments[0] === 'produk') {
    const product = getProductBySlug(segments[1]);
    return createPageMetadata({
      title: translateTextValue(product?.metadata.title || 'Produk Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue(
        product?.metadata.description || 'Halaman produk yang Anda cari tidak ditemukan.',
        locale
      ),
      path: product?.detailPath || internalPath,
      locale
    });
  }

  if (segments.length === 2 && segments[0] === 'solusi') {
    const slug = segments[1];
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

    return createPageMetadata({
      title: solution
        ? `${translateTextValue(solution.title, locale)} - PT Artavel`
        : translateTextValue('Solusi Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue(
        solution?.heroDescription || 'Halaman solusi yang Anda cari tidak ditemukan.',
        locale
      ),
      path: solution ? `/solusi/${solution.slug}` : internalPath,
      locale
    });
  }

  if (segments.length === 2 && segments[0] === 'sektor') {
    const resolvedSlug = resolveSectorSlug(segments[1]);
    const sector = SECTORS_DATA.find((item) => item.slug === resolvedSlug);

    return createPageMetadata({
      title: sector
        ? `${translateTextValue(sector.title, locale)} - PT Artavel`
        : translateTextValue('Sektor Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue(
        sector?.description || 'Halaman sektor layanan yang Anda cari tidak ditemukan.',
        locale
      ),
      path: sector ? `/sektor/${sector.slug}` : internalPath,
      locale
    });
  }

  if (segments.length === 2 && segments[0] === 'studi-kasus') {
    const caseStudy = CASE_STUDIES_DATA.find((item) => item.slug === segments[1]);

    return createPageMetadata({
      title: translateTextValue(caseStudy?.metadataTitle || 'Studi Kasus Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue(
        caseStudy?.shortDescription || 'Halaman studi kasus yang Anda cari tidak ditemukan.',
        locale
      ),
      path: caseStudy ? `/studi-kasus/${caseStudy.slug}` : internalPath,
      locale
    });
  }

  if (segments.length === 2 && segments[0] === 'wawasan') {
    const article = getLocalizedInsights(locale).find((item) => item.slug === segments[1]);

    return createPageMetadata({
      title: article?.metadata?.title || translateTextValue('Wawasan Tidak Ditemukan - PT Artavel', locale),
      description: article?.metadata?.description || article?.excerpt || translateTextValue('Artikel wawasan yang Anda cari tidak ditemukan.', locale),
      path: article ? `/wawasan/${article.slug}` : internalPath,
      locale
    });
  }

  return createPageMetadata({
    title: translateTextValue('Halaman Tidak Ditemukan - PT Artavel', locale),
    description: translateTextValue('Halaman yang Anda cari tidak ditemukan di website resmi PT Artavel.', locale),
    path: internalPath,
    locale
  });
};

const renderLocalizedPage = (internalPath: string, locale: Locale) => {
  const segments = internalPath.split('/').filter(Boolean);

  if (segments.length === 0) return <HomeClient />;

  if (segments.length === 1) {
    switch (segments[0]) {
      case 'solusi': return <SolutionsClient />;
      case 'produk': return <ProductsClient />;
      case 'sektor': return <SectorsClient />;
      case 'studi-kasus': return <CaseStudiesClient />;
      case 'wawasan': return <InsightsClient />;
      case 'assessment': return <AssessmentClient />;
      case 'tentang': return <AboutClient />;
      case 'cara-kami-bekerja': return <HowWeWorkClient />;
      case 'kontak': return <ContactClient />;
      case 'kebijakan-privasi': return <PrivacyClient />;
      case 'syarat-ketentuan':
      case 'syarat-dan-ketentuan': return <TermsClient />;
      case 'aksesibilitas': return <AccessibilityClient />;
      default: return notFound();
    }
  }

  if (segments.length !== 2) return notFound();

  const [section, slug] = segments;

  if (section === 'produk') {
    const product = getProductBySlug(slug);
    if (!product) return notFound();
    if (product.redirectPath) {
      return <ClientRedirect href={toLocalizedPath(product.redirectPath, locale)} />;
    }
    return <ProductDetailClient slug={slug} />;
  }

  if (section === 'solusi') {
    const resolvedSlug = resolveSolutionSlug(slug);
    const productRedirectPath = getProductRedirectPath(slug, resolvedSlug);
    const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

    if (productRedirectPath) {
      return <ClientRedirect href={toLocalizedPath(productRedirectPath, locale)} />;
    }
    if (!solution) return notFound();
    return <SolutionDetailClient slug={resolvedSlug} />;
  }

  if (section === 'sektor') {
    const resolvedSlug = resolveSectorSlug(slug);
    const sector = SECTORS_DATA.find((item) => item.slug === resolvedSlug);
    if (!sector) return notFound();
    return <SectorDetailClient slug={resolvedSlug} />;
  }

  if (section === 'studi-kasus') {
    const caseStudy = CASE_STUDIES_DATA.find((item) => item.slug === slug);
    if (!caseStudy) return notFound();
    return <CaseStudyDetailClient slug={slug} />;
  }

  if (section === 'wawasan') {
    const article = ALL_INSIGHTS_DATA.find((item) => item.slug === slug);
    if (!article) return notFound();
    return <InsightDetailClient slug={slug} />;
  }

  return notFound();
};

export const dynamicParams = false;

export const generateStaticParams = () =>
  SUPPORTED_LOCALES.flatMap((locale) => [
    { locale, path: [] },
    ...ALL_INTERNAL_PATHS
      .filter((path) => path !== '/')
      .map((path) => ({ locale, path: toRouteSegments(path, locale) }))
  ]);

export const generateMetadata = async ({ params }: LocalizedRouteProps) => {
  const { locale: localeParam, path } = await params;
  const locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;
  return getLocalizedMetadata(getInternalPath(locale, path), locale);
};

export default async function LocalizedRoute({ params }: LocalizedRouteProps) {
  const { locale: localeParam, path } = await params;

  if (!isLocale(localeParam)) return notFound();

  return renderLocalizedPage(getInternalPath(localeParam, path), localeParam);
}
