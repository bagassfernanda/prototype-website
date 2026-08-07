import { SolutionsClient } from '../_client-pages/SolutionsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Solusi Digital Terintegrasi - PT Artavel',
  description:
    'Jelajahi ekosistem solusi digital PT Artavel: SIPPADU, E-Archive, TNDE, SIANTER, Alih Media, Keamanan Data, CCTV IoT, Website, dan UI/UX.',
  path: '/solusi'
});

export default function Solutions() {
  return <SolutionsClient />;
}
