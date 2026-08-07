import { PrivacyClient } from '../_client-pages/PrivacyClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Kebijakan Privasi - PT Artavel',
  description:
    'Kebijakan privasi website PT Artavel terkait pengumpulan, penggunaan, dan perlindungan data pengguna.',
  path: '/kebijakan-privasi'
});

export default function PrivacyPolicy() {
  return <PrivacyClient />;
}
