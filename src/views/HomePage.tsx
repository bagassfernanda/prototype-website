import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { SolutionGridSection } from '../components/sections/SolutionGridSection';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { FeaturedCaseStudies } from '../components/sections/FeaturedCaseStudies';
import { SecurityGovernanceSection } from '../components/sections/SecurityGovernanceSection';
import { GeneralFAQSection } from '../components/sections/GeneralFAQSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { JsonLdInjector } from '../components/seo/JsonLdInjector';
import { COMPANY_PROFILE } from '../content/company';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();
  const pageTitle = text('PT Artavel - Solusi Digital Terintegrasi untuk Bisnis & Organisasi');
  const pageDescription = text('Artavel menghubungkan aplikasi, data, perangkat, dan keamanan untuk pendidikan, retail, pemerintahan, dan enterprise.');

  return (
    <>
      <MetaInjector
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/"
      />

      <JsonLdInjector
        type="Organization"
        data={{
          name: COMPANY_PROFILE.name,
          url: 'https://artavel.co.id',
          logo: 'https://artavel.co.id/brand/artavel-logo.svg',
          description: pageDescription
        }}
      />

      <HeroSection onNavigate={onNavigate} />
      <SolutionGridSection compact onNavigate={onNavigate} />
      <SecurityGovernanceSection compact onNavigate={onNavigate} />
      <FeaturedCaseStudies compact onNavigate={onNavigate} />
      <HowWeWorkSection compact />
      <InsightsSection compact onNavigate={onNavigate} />
      <GeneralFAQSection compact onNavigate={onNavigate} />
      <FinalCTASection compact onNavigate={onNavigate} />
    </>
  );
};
