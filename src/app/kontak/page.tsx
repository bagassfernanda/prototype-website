import { ContactClient } from '../_client-pages/ContactClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Hubungi PT Artavel - Konsultasi Solusi & Proposal',
  description:
    'Hubungi tim Artavel untuk memetakan kebutuhan organisasi, memilih solusi yang relevan, dan menyusun skenario implementasi yang sesuai.',
  path: '/kontak'
});

export default function Contact() {
  return <ContactClient />;
}
