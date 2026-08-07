import { SectorsClient } from '../_client-pages/SectorsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Sektor Layanan - PT Artavel',
  description:
    'Solusi digital Artavel disesuaikan untuk Pemerintah Daerah, BUMD, swasta, organisasi, dan pusat pelayanan publik terpadu.',
  path: '/sektor'
});

export default function Sectors() {
  return <SectorsClient />;
}
