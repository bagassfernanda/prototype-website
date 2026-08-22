import { ProductsClient } from '../_client-pages/ProductsClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Produk Digital Artavel - PT Artavel',
  description:
    'Produk dan solusi siap implementasi dari Artavel untuk Smart Education, Retail & F&B, SmartMap/GIS, AI CCTV, Digital Government, serta partner technology seperti FootfallCam dan OpenText.',
  path: '/produk'
});

export default function Products() {
  return <ProductsClient />;
}
