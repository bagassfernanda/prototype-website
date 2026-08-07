'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { HomePage } from '../../views/HomePage';

export const HomeClient = () => {
  const onNavigate = useNextNavigate();
  return <HomePage onNavigate={onNavigate} />;
};
