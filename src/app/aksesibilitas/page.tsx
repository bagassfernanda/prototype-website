import { AccessibilityClient } from '../_client-pages/AccessibilityClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Aksesibilitas - PT Artavel',
  description:
    'Komitmen aksesibilitas website PT Artavel untuk menghadirkan pengalaman digital yang dapat digunakan lebih banyak pengguna.',
  path: '/aksesibilitas'
});

export default function Accessibility() {
  return <AccessibilityClient />;
}
