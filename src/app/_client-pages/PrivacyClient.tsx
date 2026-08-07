'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { PrivacyPolicyPage } from '../../views/PrivacyPolicyPage';

export const PrivacyClient = () => {
  const onNavigate = useNextNavigate();
  return <PrivacyPolicyPage onNavigate={onNavigate} />;
};
