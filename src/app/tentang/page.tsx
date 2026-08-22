import { AboutClient } from '../_client-pages/AboutClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Tentang PT Artavel',
  description:
    'Kenali PT Artavel sebagai mitra solusi digital untuk aplikasi, keamanan data, pelayanan publik, kearsipan, CCTV IoT, website, UI/UX, dan integrasi teknologi.',
  path: '/tentang'
});

export default function About() {
  return <AboutClient />;
}
