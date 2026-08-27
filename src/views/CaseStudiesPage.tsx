import React from 'react';
import { CASE_STUDIES_DATA } from '../content/caseStudies';
import { CaseStudyCard } from '../components/case-studies/CaseStudyCard';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface CaseStudiesPageProps {
  onNavigate: (path: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const caseStudies = localize(CASE_STUDIES_DATA);

  return (
    <>
      <MetaInjector
        title={text('Studi Kasus Implementasi — PT Artavel')}
        description={text(
          'Pelajari bagaimana solusi Artavel dapat mendukung pelayanan publik, digitalisasi arsip, pengelolaan dokumen, dan kebutuhan organisasi.'
        )}
        canonicalPath="/studi-kasus"
      />

      <Section bg="surface" padding="compact" id="case-studies-intro">
        <Container>
          <Breadcrumb items={[{ label: text('Studi Kasus') }]} onNavigate={onNavigate} />

          <div className="max-w-3xl py-8 sm:py-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#36699C]">
              {text('Pengalaman Implementasi')}
            </p>
            <h1 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-[#172536] sm:text-4xl lg:text-5xl">
              {text('Studi Kasus & Rekam Jejak')}
            </h1>
            <p className="text-lg leading-relaxed text-[#5C6B79]">
              {text(
                'Pelajari bagaimana Artavel membantu organisasi memahami proses, menata informasi, dan menyiapkan solusi digital yang relevan—dengan status informasi yang disampaikan secara transparan.'
              )}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal" id="case-studies-list">
        <Container>
          <div className="mb-8 max-w-2xl">
            <h2 className="font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
              {text('Masalah, Kebutuhan, dan Pendekatan yang Relevan')}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#5C6B79]">
              {text(
                'Setiap studi kasus disusun untuk membantu calon klien melihat konteks organisasi, ruang lingkup solusi, dan area dampak yang masih menunggu verifikasi resmi.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.slug}
                caseStudy={caseStudy}
                onNavigate={onNavigate}
                revealDelay={index * 80}
              />
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
