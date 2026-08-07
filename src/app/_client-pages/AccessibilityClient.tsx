'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { AccessibilityPage } from '../../views/AccessibilityPage';

export const AccessibilityClient = () => {
  const onNavigate = useNextNavigate();
  return <AccessibilityPage onNavigate={onNavigate} />;
};
