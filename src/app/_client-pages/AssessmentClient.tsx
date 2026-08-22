'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { AssessmentPage } from '../../views/AssessmentPage';

export const AssessmentClient = () => {
  const onNavigate = useNextNavigate();
  return <AssessmentPage onNavigate={onNavigate} />;
};
