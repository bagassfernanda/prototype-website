import { HomeClient } from './_client-pages/HomeClient';
import { createPageMetadata } from './seo';

export const metadata = createPageMetadata({
  title: 'PT Artavel - Solusi Digital, Keamanan Data, CCTV IoT & UI/UX',
  description:
    'Artavel menyediakan solusi digital terintegrasi untuk aplikasi, pelayanan publik, arsip digital, keamanan data, CCTV IoT, website, UI/UX, dan alih media dokumen.',
  path: '/'
});

export default function Home() {
  return <HomeClient />;
}
