import { HowWeWorkClient } from '../_client-pages/HowWeWorkClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Cara Kami Bekerja - PT Artavel',
  description:
    'Pendekatan kerja Artavel mulai dari discovery, desain solusi, implementasi, pelatihan, hingga dukungan berkelanjutan.',
  path: '/cara-kami-bekerja'
});

export default function HowWeWork() {
  return <HowWeWorkClient />;
}
