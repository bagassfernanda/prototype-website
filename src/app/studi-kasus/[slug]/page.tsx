import { notFound } from 'next/navigation';
import { CaseStudyDetailClient } from '../../_client-pages/CaseStudyDetailClient';
import { CASE_STUDIES_DATA } from '../../../content/caseStudies';
import { createPageMetadata } from '../../seo';

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

export const generateMetadata = async ({ params }: CaseStudyRouteProps) => {
  const { slug } = await params;
  const caseStudy = CASE_STUDIES_DATA.find((item) => item.slug === slug);

  if (!caseStudy) {
    return createPageMetadata({
      title: 'Studi Kasus Tidak Ditemukan - PT Artavel',
      description: 'Halaman studi kasus yang Anda cari tidak ditemukan.',
      path: `/studi-kasus/${slug}`
    });
  }

  const displayName = caseStudy.publicationPermission
    ? caseStudy.clientName
    : caseStudy.anonymousClientLabel;

  return createPageMetadata({
    title: `${displayName} - Studi Kasus PT Artavel`,
    description: caseStudy.challenge,
    path: `/studi-kasus/${caseStudy.slug}`
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
