'use client';

import { useNextNavigate } from '../../components/layout/useNextNavigate';
import { ProductDetailPage } from '../../views/ProductDetailPage';

interface ProductDetailClientProps {
  slug: string;
}

export const ProductDetailClient = ({ slug }: ProductDetailClientProps) => {
  const onNavigate = useNextNavigate();
  return <ProductDetailPage slug={slug} onNavigate={onNavigate} />;
};
