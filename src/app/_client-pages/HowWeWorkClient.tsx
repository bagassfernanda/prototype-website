'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { HowWeWorkPage } from '../../views/HowWeWorkPage';

export const HowWeWorkClient = () => {
  const onNavigate = useNextNavigate();
  return <HowWeWorkPage onNavigate={onNavigate} />;
};
