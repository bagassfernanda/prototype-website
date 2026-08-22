import { AssessmentClient } from '../_client-pages/AssessmentClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Cek Kesiapan Digital Organisasi — PT Artavel',
  description: 'Dapatkan gambaran awal kesiapan proses, data, keamanan, analytics, dan infrastruktur organisasi Anda.',
  path: '/assessment'
});

export default function Assessment() {
  return <AssessmentClient />;
}
