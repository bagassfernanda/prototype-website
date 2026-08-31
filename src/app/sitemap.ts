import type { MetadataRoute } from 'next';
import { CASE_STUDIES_DATA } from '../content/caseStudies';
import { ALL_INSIGHTS_DATA } from '../content/insights';
import { PRODUCTS_DATA } from '../content/products';
import { SECTORS_DATA } from '../content/sectors';
import { SOLUTIONS_DATA } from '../content/solutions';
import { toLocalizedPath, type Locale } from '../utils/i18nRouting';

export const dynamic = 'force-static';

const SITE_URL = 'https://artavel.co.id';
const LAST_MODIFIED = new Date('2026-08-21');

const toAbsoluteUrl = (path: string) => `${SITE_URL}${path}`;

const localizedEntry = (path: string, locale: Locale): MetadataRoute.Sitemap[number] => {
  const idPath = toLocalizedPath(path, 'id');
  const enPath = toLocalizedPath(path, 'en');

  return {
    url: toAbsoluteUrl(toLocalizedPath(path, locale)),
    lastModified: LAST_MODIFIED,
    alternates: {
      languages: {
        id: toAbsoluteUrl(idPath),
        en: toAbsoluteUrl(enPath),
        'x-default': toAbsoluteUrl(idPath)
      }
    }
  };
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
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
    '/aksesibilitas'
  ];

  const dynamicRoutes = [
    ...PRODUCTS_DATA.map((product) => product.detailPath),
    ...SOLUTIONS_DATA.map((solution) => `/solusi/${solution.slug}`),
    ...SECTORS_DATA.map((sector) => `/sektor/${sector.slug}`),
    ...CASE_STUDIES_DATA.map((caseStudy) => `/studi-kasus/${caseStudy.slug}`),
    ...ALL_INSIGHTS_DATA.map((article) => `/wawasan/${article.slug}`)
  ];

  const routes = [...new Set([...staticRoutes, ...dynamicRoutes])];

  return routes.flatMap((path) => [
    localizedEntry(path, 'id'),
    localizedEntry(path, 'en')
  ]);
}
