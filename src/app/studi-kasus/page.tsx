import { CaseStudiesClient } from '../_client-pages/CaseStudiesClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Studi Kasus Implementasi — PT Artavel',
  description:
    'Pelajari bagaimana solusi Artavel dapat mendukung pelayanan publik, digitalisasi arsip, pengelolaan dokumen, dan kebutuhan organisasi.',
  path: '/studi-kasus'
});

export default function CaseStudies() {
  return <CaseStudiesClient />;
}
