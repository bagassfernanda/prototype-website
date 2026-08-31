import { notFound } from 'next/navigation';
import { CaseStudyDetailClient } from '../../_client-pages/CaseStudyDetailClient';
import { CASE_STUDIES_DATA } from '../../../content/caseStudies';
import { translateTextValue } from '../../../content/i18nText';
import { createPageMetadata } from '../../seo';
import { DEFAULT_LOCALE } from '../../../utils/i18nRouting';

interface CaseStudyRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () => {
  return CASE_STUDIES_DATA.map((caseStudy) => ({
    slug: caseStudy.slug
  }));
};

export const dynamicParams = false;

export const generateMetadata = async ({ params }: CaseStudyRouteProps) => {
  const { slug } = await params;
  const locale = DEFAULT_LOCALE;
  const caseStudy = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!caseStudy) {
    return createPageMetadata({
      title: translateTextValue('Studi Kasus Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue('Halaman studi kasus yang Anda cari tidak ditemukan.', locale),
      path: `/studi-kasus/${slug}`,
      locale
    });
  }

  return createPageMetadata({
    title: translateTextValue(caseStudy.metadataTitle, locale),
    description: translateTextValue(caseStudy.shortDescription, locale),
    path: `/studi-kasus/${caseStudy.slug}`,
    locale
  });
};

export default async function CaseStudyDetail({ params }: CaseStudyRouteProps) {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetailClient slug={slug} />;
}
