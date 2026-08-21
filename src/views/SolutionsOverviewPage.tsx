import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SolutionGridSection } from '../components/sections/SolutionGridSection';
import { TechnologyMotionSection } from '../components/sections/TechnologyMotionSection';
import { ProblemSection } from '../components/sections/ProblemSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface SolutionsOverviewPageProps {
  onNavigate: (path: string) => void;
}

export const SolutionsOverviewPage: React.FC<SolutionsOverviewPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
	        title={`${text('Solusi Teknologi Artavel')} — PT Artavel`}
	        description={text('Jelajahi lima keluarga solusi Artavel: AI, Analytics & Smart Monitoring, Smart Education, Retail & F&B, Cyber Security, serta Digital Government & Enterprise.')}
        canonicalPath="/solusi"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Solusi') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Solusi Teknologi Artavel')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Solusi Artavel disederhanakan menjadi lima keluarga utama agar pengunjung cepat memahami teknologi yang ditawarkan, produk nyata yang tersedia, dan partner technology yang relevan.')}
            </p>
          </div>
        </Container>
      </Section>

      <SolutionGridSection onNavigate={onNavigate} />
      <ProblemSection />
      <TechnologyMotionSection />
      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
