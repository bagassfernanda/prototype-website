import { HomeClient } from './_client-pages/HomeClient';
import { createLocalizedPageMetadata } from './seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'PT Artavel - Solusi Digital Berbasis AI, Analytics, IoT & Security',
  description:
    'Artavel menghadirkan solusi teknologi terintegrasi untuk pendidikan, retail, pemerintahan, dan enterprise melalui AI, analytics, SmartMap/GIS, computer vision, IoT, cybersecurity, dan aplikasi bisnis.',
  path: '/'
});

export default function Home() {
  return <HomeClient />;
}
