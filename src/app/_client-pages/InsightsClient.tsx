'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { InsightsPage } from '../../views/InsightsPage';

export const InsightsClient = () => {
  const onNavigate = useNextNavigate();
  return <InsightsPage onNavigate={onNavigate} />;
};
