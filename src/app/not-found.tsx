import { NotFoundClient } from './_client-pages/NotFoundClient';
import { createLocalizedPageMetadata } from './seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Halaman Tidak Ditemukan - PT Artavel',
  description: 'Halaman yang Anda cari tidak ditemukan di website resmi PT Artavel.',
  path: '/404'
});

export default function NotFound() {
  return <NotFoundClient />;
}
