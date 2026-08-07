'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { TermsPage } from '../../views/TermsPage';

export const TermsClient = () => {
  const onNavigate = useNextNavigate();
  return <TermsPage onNavigate={onNavigate} />;
};
