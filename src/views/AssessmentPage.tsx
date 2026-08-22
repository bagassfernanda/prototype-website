import React from 'react';
import { DigitalReadinessAssessment } from '../components/tools/DigitalReadinessAssessment';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Container } from '../components/layout/Container';
import { Section } from '../components/layout/Section';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface AssessmentPageProps {
  onNavigate: (path: string) => void;
}

export const AssessmentPage: React.FC<AssessmentPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
        title={`${text('Cek Kesiapan Digital Organisasi')} — PT Artavel`}
        description={text('Dapatkan gambaran awal kesiapan proses, data, keamanan, analytics, dan infrastruktur organisasi Anda.')}
        canonicalPath="/assessment"
      />

      <Section bg="surface" padding="compact">
        <Container>
          <Breadcrumb
            items={[{ label: text('Assessment Kesiapan Digital') }]}
            onNavigate={onNavigate}
          />
          <div className="max-w-3xl py-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#568F3E]">
              {text('Alat Bantu Konsultasi')}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-[#172536] font-heading sm:text-5xl">
              {text('Cek Kesiapan Digital Organisasi')}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#5C6B79]">
              {text('Gunakan hasil assessment sebagai bahan awal untuk menentukan prioritas proses, integrasi data, analytics, keamanan, dan infrastruktur.')}
            </p>
          </div>
        </Container>
      </Section>

      <DigitalReadinessAssessment onNavigate={onNavigate} />
      <FinalCTASection onNavigate={onNavigate} compact />
    </>
  );
};
