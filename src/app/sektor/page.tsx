import { SectorsClient } from '../_client-pages/SectorsClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Sektor Layanan - PT Artavel',
  description:
    'Solusi digital Artavel disesuaikan untuk pemerintah, pendidikan, retail dan F&B, enterprise, BUMD, lembaga, dan organisasi.',
  path: '/sektor'
});

export default function Sectors() {
  return <SectorsClient />;
}
