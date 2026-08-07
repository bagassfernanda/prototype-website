import { CaseStudiesClient } from '../_client-pages/CaseStudiesClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Studi Kasus Implementasi - PT Artavel',
  description:
    'Pelajari pengalaman implementasi SIPPADU, E-Archive, TNDE, dan solusi digital Artavel pada instansi pemerintah daerah dan BUMD.',
  path: '/studi-kasus'
});

export default function CaseStudies() {
  return <CaseStudiesClient />;
}
