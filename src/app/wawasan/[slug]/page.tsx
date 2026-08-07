import { notFound } from 'next/navigation';
import { InsightDetailClient } from '../../_client-pages/InsightDetailClient';
import { INSIGHTS_DATA } from '../../../content/insights';
import { createPageMetadata } from '../../seo';

interface InsightRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug
  }));
};

export const generateMetadata = async ({ params }: InsightRouteProps) => {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === slug);

  if (!article) {
    return createPageMetadata({
      title: 'Wawasan Tidak Ditemukan - PT Artavel',
      description: 'Artikel wawasan yang Anda cari tidak ditemukan.',
      path: `/wawasan/${slug}`
    });
  }

  return createPageMetadata({
    title: `${article.title} - PT Artavel`,
    description: article.excerpt,
    path: `/wawasan/${article.slug}`
  });
};

export default async function InsightDetail({ params }: InsightRouteProps) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return <InsightDetailClient slug={slug} />;
}
