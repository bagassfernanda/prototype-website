'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { NotFoundPage } from '../../views/NotFoundPage';

export const NotFoundClient = () => {
  const onNavigate = useNextNavigate();
  return <NotFoundPage onNavigate={onNavigate} />;
};
