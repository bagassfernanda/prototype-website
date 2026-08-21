import { PrivacyClient } from '../_client-pages/PrivacyClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Kebijakan Privasi - PT Artavel',
  description:
    'Kebijakan privasi website PT Artavel terkait pengumpulan, penggunaan, dan perlindungan data pengguna.',
  path: '/kebijakan-privasi'
});

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}
