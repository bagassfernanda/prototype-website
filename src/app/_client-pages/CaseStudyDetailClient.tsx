'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { CaseStudyDetailPage } from '../../views/CaseStudyDetailPage';

interface CaseStudyDetailClientProps {
  slug: string;
}

export const CaseStudyDetailClient = ({ slug }: CaseStudyDetailClientProps) => {
  const onNavigate = useNextNavigate();
  return <CaseStudyDetailPage slug={slug} onNavigate={onNavigate} />;
};
