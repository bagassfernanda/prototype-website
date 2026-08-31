import { notFound } from 'next/navigation';
import { ProductDetailClient } from '../../_client-pages/ProductDetailClient';
import { getProductBySlug, PRODUCTS_DATA } from '../../../content/products';
import { translateTextValue } from '../../../content/i18nText';
import { DEFAULT_LOCALE, toLocalizedPath } from '../../../utils/i18nRouting';
import { ClientRedirect } from '../../../components/layout/ClientRedirect';
import { createPageMetadata } from '../../seo';

interface ProductRouteProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = () =>
  PRODUCTS_DATA.map((product) => ({
    slug: product.slug
  }));

export const dynamicParams = false;

export const generateMetadata = async ({ params }: ProductRouteProps) => {
  const { slug } = await params;
  const locale = DEFAULT_LOCALE;
  const product = getProductBySlug(slug);

  if (!product) {
    return createPageMetadata({
      title: translateTextValue('Produk Tidak Ditemukan - PT Artavel', locale),
      description: translateTextValue('Halaman produk yang Anda cari tidak ditemukan.', locale),
      path: `/produk/${slug}`,
      locale
    });
  }

  return createPageMetadata({
    title: translateTextValue(product.metadata.title, locale),
    description: translateTextValue(product.metadata.description, locale),
    path: product.detailPath,
    locale
  });
};

export default async function ProductDetail({ params }: ProductRouteProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  if (product.redirectPath) {
    return <ClientRedirect href={toLocalizedPath(product.redirectPath, DEFAULT_LOCALE)} />;
  }

  return <ProductDetailClient slug={slug} />;
}
