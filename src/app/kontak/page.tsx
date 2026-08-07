import { ContactClient } from '../_client-pages/ContactClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Hubungi PT Artavel - Konsultasi Solusi & Proposal',
  description:
    'Jadwalkan konsultasi, permohonan demo aplikasi, atau diskusi proposal dengan tim PT Artavel.',
  path: '/kontak'
});

export default function Contact() {
  return <ContactClient />;
}
