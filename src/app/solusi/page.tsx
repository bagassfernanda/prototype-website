import { SolutionsClient } from '../_client-pages/SolutionsClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Solusi Teknologi Artavel - PT Artavel',
  description:
    'Jelajahi lima keluarga solusi Artavel: AI, Analytics & Smart Monitoring, Smart Education, Retail & F&B, Cyber Security, serta Digital Government & Enterprise.',
  path: '/solusi'
});

export default function Solutions() {
  return <SolutionsClient />;
}
