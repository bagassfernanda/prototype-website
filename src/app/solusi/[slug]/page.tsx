import { notFound } from 'next/navigation';
import { SolutionDetailClient } from '../../_client-pages/SolutionDetailClient';
import { SOLUTIONS_DATA } from '../../../content/solutions';
import { translateTextValue } from '../../../content/i18nText';
import { DEFAULT_LOCALE, toLocalizedPath } from '../../../utils/i18nRouting';
import {
  getProductRedirectPath,
  PRODUCT_ROUTE_REDIRECTS,
  resolveSolutionSlug,
  SOLUTION_SLUG_ALIASES
} from '../../../utils/routeAliases';
import { ClientRedirect } from '../../../components/layout/ClientRedirect';
import { createPageMetadata } from '../../seo';

interface SolutionRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

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

export const dynamicParams = false;

export const generateMetadata = async ({ params }: SolutionRouteProps) => {
  const { slug } = await params;
  const locale = DEFAULT_LOCALE;
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
  const resolvedSlug = resolveSolutionSlug(slug);
  const productRedirectPath = getProductRedirectPath(slug, resolvedSlug);
  const solution = SOLUTIONS_DATA.find((item) => item.slug === resolvedSlug);

  if (productRedirectPath) {
    return <ClientRedirect href={toLocalizedPath(productRedirectPath, DEFAULT_LOCALE)} />;
  }

  if (!solution) {
    notFound();
  }

  return <SolutionDetailClient slug={resolvedSlug} />;
}
