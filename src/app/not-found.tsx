import { NotFoundClient } from './_client-pages/NotFoundClient';
import { createPageMetadata } from './seo';

export const metadata = createPageMetadata({
  title: 'Halaman Tidak Ditemukan - PT Artavel',
  description: 'Halaman yang Anda cari tidak ditemukan di website resmi PT Artavel.',
  path: '/404'
});

export default function NotFound() {
  return <NotFoundClient />;
}
