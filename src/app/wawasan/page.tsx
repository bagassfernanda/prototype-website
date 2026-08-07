import { InsightsClient } from '../_client-pages/InsightsClient';
import { createPageMetadata } from '../seo';

export const metadata = createPageMetadata({
  title: 'Wawasan & Edukasi Digital - PT Artavel',
  description:
    'Kumpulan artikel edukatif mengenai tata kelola kearsipan digital, TNDE, perizinan publik, keamanan data, dan transformasi digital.',
  path: '/wawasan'
});

export default function Insights() {
  return <InsightsClient />;
}
