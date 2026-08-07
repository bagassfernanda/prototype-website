'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { SectorDetailPage } from '../../views/SectorDetailPage';

interface SectorDetailClientProps {
  slug: string;
}

export const SectorDetailClient = ({ slug }: SectorDetailClientProps) => {
  const onNavigate = useNextNavigate();
  return <SectorDetailPage slug={slug} onNavigate={onNavigate} />;
};
