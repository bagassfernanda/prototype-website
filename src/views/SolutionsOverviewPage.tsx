import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { SolutionGridSection } from '../components/sections/SolutionGridSection';
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
	        title={`${text('Solusi Digital Terintegrasi')} — PT Artavel`}
	        description={text('Jelajahi ekosistem solusi digital PT Artavel: SIPPADU, E-Archive, TNDE, SIANTER, Alih Media, Keamanan Data, CCTV IoT, Website, dan UI/UX.')}
        canonicalPath="/solusi"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Solusi') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Ekosistem Solusi Digital Artavel')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Modul perangkat lunak dan layanan pendampingan untuk memetakan proses kerja, mempercepat pelayanan, mengamankan data, memasang perangkat terhubung, serta membangun pengalaman digital yang rapi.')}
            </p>
          </div>
        </Container>
      </Section>

      <SolutionGridSection onNavigate={onNavigate} />
      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
