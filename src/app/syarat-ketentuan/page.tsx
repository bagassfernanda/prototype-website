import { TermsClient } from '../_client-pages/TermsClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Syarat & Ketentuan - PT Artavel',
  description:
    'Syarat dan ketentuan penggunaan website resmi PT Artavel.',
  path: '/syarat-ketentuan'
});

export default function Terms() {
  return <TermsClient />;
}
