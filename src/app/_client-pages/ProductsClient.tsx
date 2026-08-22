'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { ProductsPage } from '../../views/ProductsPage';

export const ProductsClient = () => {
  const onNavigate = useNextNavigate();
  return <ProductsPage onNavigate={onNavigate} />;
};
