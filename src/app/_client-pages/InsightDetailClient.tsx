'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { InsightDetailPage } from '../../views/InsightDetailPage';

interface InsightDetailClientProps {
  slug: string;
}

export const InsightDetailClient = ({ slug }: InsightDetailClientProps) => {
  const onNavigate = useNextNavigate();
  return <InsightDetailPage slug={slug} onNavigate={onNavigate} />;
};
