import { TermsClient } from '../_client-pages/TermsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Syarat & Ketentuan - PT Artavel',
  description:
    'Syarat dan ketentuan penggunaan website resmi PT Artavel.',
  path: '/syarat-ketentuan'
});

export default function Terms() {
  return <TermsClient />;
}
