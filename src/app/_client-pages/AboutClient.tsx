'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { AboutPage } from '../../views/AboutPage';

export const AboutClient = () => {
  const onNavigate = useNextNavigate();
  return <AboutPage onNavigate={onNavigate} />;
};
