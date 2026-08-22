import { InsightsClient } from '../_client-pages/InsightsClient';
import { createLocalizedPageMetadata } from '../seo';

export const generateMetadata = () => createLocalizedPageMetadata({
  title: 'Wawasan & Transformasi Digital - PT Artavel',
  description:
    'Artikel, insight, dan panduan praktis dari tim Artavel mengenai AI, analytics, transformasi digital, pendidikan, retail, pemerintahan, IoT, cybersecurity, dan pengembangan sistem.',
  path: '/wawasan'
});

export default function Insights() {
  return <InsightsClient />;
}
