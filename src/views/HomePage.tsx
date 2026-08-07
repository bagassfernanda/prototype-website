import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { TrustSection } from '../components/sections/TrustSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { SolutionGridSection } from '../components/sections/SolutionGridSection';
import { TechnologyMotionSection } from '../components/sections/TechnologyMotionSection';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { InteractiveWorkflowSim } from '../components/sections/InteractiveWorkflowSim';
import { FeaturedCaseStudies } from '../components/sections/FeaturedCaseStudies';
import { InteractiveReadinessCalculator } from '../components/sections/InteractiveReadinessCalculator';
import { SecurityGovernanceSection } from '../components/sections/SecurityGovernanceSection';
import { GeneralFAQSection } from '../components/sections/GeneralFAQSection';
import { InsightsSection } from '../components/sections/InsightsSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { ProfileVideoSection } from '../components/sections/ProfileVideoSection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { JsonLdInjector } from '../components/seo/JsonLdInjector';
import { COMPANY_PROFILE } from '../content/company';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <>
      <MetaInjector
        title="PT Artavel — Solusi Digital, Keamanan Data, CCTV IoT & UI/UX"
        description="Artavel menyediakan solusi digital terintegrasi untuk aplikasi, pelayanan publik, arsip digital, keamanan data, CCTV IoT, website, UI/UX, dan alih media dokumen."
        canonicalPath="/"
      />

      <JsonLdInjector
        type="Organization"
        data={{
          name: COMPANY_PROFILE.name,
          url: 'https://artavel.co.id',
          logo: 'https://artavel.co.id/brand/artavel-logo.svg',
          description: COMPANY_PROFILE.positioning
        }}
      />

      <HeroSection onNavigate={onNavigate} />
      <TrustSection />
      <TechnologyMotionSection />
      <ProblemSection />
      <SolutionGridSection onNavigate={onNavigate} />
      <ProfileVideoSection />
      <InteractiveWorkflowSim />
      <HowWeWorkSection />
      <FeaturedCaseStudies onNavigate={onNavigate} />
      <InteractiveReadinessCalculator onConsult={() => onNavigate('/kontak')} />
      <SecurityGovernanceSection />
      <GeneralFAQSection onNavigate={onNavigate} />
      <InsightsSection onNavigate={onNavigate} />
      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
