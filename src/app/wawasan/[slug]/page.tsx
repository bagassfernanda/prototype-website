import { notFound } from 'next/navigation';
import { InsightDetailClient } from '../../_client-pages/InsightDetailClient';
import { ALL_INSIGHTS_DATA, getLocalizedInsights } from '../../../content/insights';
import { translateTextValue } from '../../../content/i18nText';
import { createPageMetadata } from '../../seo';
import { DEFAULT_LOCALE } from '../../../utils/i18nRouting';

interface InsightRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return ALL_INSIGHTS_DATA.map((article) => ({
    slug: article.slug
  }));
};

export const dynamicParams = false;

export const generateMetadata = async ({ params }: InsightRouteProps) => {
  const { slug } = await params;
  const locale = DEFAULT_LOCALE;
  const article = getLocalizedInsights(locale).find((item) => item.slug === slug);

  if (!article) {
    return createPageMetadata({
      title: translateTextValue('Wawasan Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue('Artikel wawasan yang Anda cari tidak ditemukan.', locale),
      path: `/wawasan/${slug}`,
      locale
    });
  }

  return createPageMetadata({
    title: article.metadata?.title || `${article.title} - PT Artavel`,
    description: article.metadata?.description || article.excerpt,
    path: `/wawasan/${article.slug}`,
    locale
  });
};

export default async function InsightDetail({ params }: InsightRouteProps) {
  const { slug } = await params;
  const article = ALL_INSIGHTS_DATA.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return <InsightDetailClient slug={slug} />;
}
