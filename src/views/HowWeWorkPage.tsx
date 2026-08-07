import React from 'react';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { HowWeWorkSection } from '../components/sections/HowWeWorkSection';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface HowWeWorkPageProps {
  onNavigate: (path: string) => void;
}

export const HowWeWorkPage: React.FC<HowWeWorkPageProps> = ({ onNavigate }) => {
  const { text } = useLanguage();

  return (
    <>
      <MetaInjector
	        title={`${text('Cara Kami Bekerja')} — PT Artavel`}
	        description={text('Pelajari metodologi pendampingan 5 tahap Artavel dari Discovery, Solution Design, Konfigurasi, Pelatihan Pengguna, hingga Pemeliharaan SLA.')}
        canonicalPath="/cara-kami-bekerja"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Cara Kami Bekerja') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Pendampingan End-to-End')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Kami percaya bahwa keberhasilan sistem digital bukan hanya ditentukan oleh kualitas baris kode, melainkan oleh pemahaman mendalam atas proses pengguna dan kualitas pendampingan pascapenerapan.')}
            </p>
          </div>
        </Container>
      </Section>

      <HowWeWorkSection />
      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
