import { CaseStudiesClient } from '../_client-pages/CaseStudiesClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Studi Kasus Implementasi - PT Artavel',
  description:
    'Pelajari rekam jejak implementasi solusi Artavel yang dapat dipublikasikan, termasuk proyek layanan digital, dokumen, arsip, dan integrasi proses organisasi.',
  path: '/studi-kasus'
});

export default function CaseStudies() {
  return <CaseStudiesClient />;
}
