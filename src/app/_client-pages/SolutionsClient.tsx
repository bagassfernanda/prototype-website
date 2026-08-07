'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { SolutionsOverviewPage } from '../../views/SolutionsOverviewPage';

export const SolutionsClient = () => {
  const onNavigate = useNextNavigate();
  return <SolutionsOverviewPage onNavigate={onNavigate} />;
};
