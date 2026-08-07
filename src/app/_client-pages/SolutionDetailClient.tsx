'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { SolutionDetailPage } from '../../views/SolutionDetailPage';

interface SolutionDetailClientProps {
  slug: string;
}

export const SolutionDetailClient = ({ slug }: SolutionDetailClientProps) => {
  const onNavigate = useNextNavigate();
  return <SolutionDetailPage slug={slug} onNavigate={onNavigate} />;
};
