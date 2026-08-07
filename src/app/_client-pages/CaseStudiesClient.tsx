'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { CaseStudiesPage } from '../../views/CaseStudiesPage';

export const CaseStudiesClient = () => {
  const onNavigate = useNextNavigate();
  return <CaseStudiesPage onNavigate={onNavigate} />;
};
