import { AboutClient } from '../_client-pages/AboutClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Tentang PT Artavel',
  description:
    'Kenali PT Artavel sebagai mitra solusi digital untuk aplikasi, keamanan data, pelayanan publik, kearsipan, CCTV IoT, website, UI/UX, dan integrasi teknologi.',
  path: '/tentang'
});

export default function About() {
  return <AboutClient />;
}
