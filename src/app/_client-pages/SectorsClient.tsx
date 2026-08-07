'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { SectorsPage } from '../../views/SectorsPage';

export const SectorsClient = () => {
  const onNavigate = useNextNavigate();
  return <SectorsPage onNavigate={onNavigate} />;
};
