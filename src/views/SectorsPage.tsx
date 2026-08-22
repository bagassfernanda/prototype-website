import React from 'react';
import { SECTORS_DATA } from '../content/sectors';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { CheckCircle2, ArrowRight, Building2, Briefcase, GraduationCap, Store, Users } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface SectorsPageProps {
  onNavigate: (path: string) => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onNavigate }) => {
  const { text, localize } = useLanguage();
  const sectors = localize(SECTORS_DATA);

  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return Building2;
      case 'Briefcase': return Briefcase;
      case 'GraduationCap': return GraduationCap;
      case 'Store': return Store;
      case 'Users': return Users;
      default: return Building2;
    }
  };

  return (
    <>
      <MetaInjector
	        title={`${text('Sektor Layanan')} — PT Artavel`}
	        description={text('Solusi digital Artavel disesuaikan untuk pemerintah, pendidikan, retail dan F&B, enterprise, BUMD, lembaga, dan organisasi.')}
        canonicalPath="/sektor"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Sektor') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Sektor Organisasi yang Kami Layani')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Setiap sektor memiliki karakteristik regulasi, alur persetujuan, dan jenis dokumen yang berbeda. Kami menyesuaikan arsitektur solusi dengan bahasa kebutuhan organisasi Anda.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="space-y-12">
	            {sectors.map((sector) => {
              const Icon = getSectorIcon(sector.iconName);

              return (
                <Card key={sector.id} id={`sektor-${sector.slug}`} className="p-8 sm:p-10 border-[#36699C]/20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF2F8] text-[#36699C] flex items-center justify-center">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>

                      <h2 className="text-2xl font-bold text-[#172536] font-heading">
                        {sector.title}
                      </h2>

                      <p className="text-sm font-semibold text-[#36699C]">
                        {sector.subtitle}
                      </p>

                      <p className="text-sm text-[#5C6B79] leading-relaxed">
                        {sector.description}
                      </p>

                      <div className="pt-2">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() => onNavigate('/kontak')}
                          rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                        >
	                          {text('Diskusi Sektor Ini')}
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-[#F7F9FB] rounded-2xl p-6 border border-[#DBE4EB] space-y-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#172536] mb-3">
	                          {text('Relevan Untuk Organisasi:')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {sector.targetOrganizations.map((org, idx) => (
                            <span key={idx} className="text-xs bg-white text-[#172536] border border-[#DBE4EB] px-3 py-1.5 rounded-lg font-medium">
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#DBE4EB]">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-[#172536] mb-3">
	                          {text('Dampak yang Diharapkan:')}
                        </h3>
                        <div className="space-y-2">
                          {sector.expectedImpacts.map((imp, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-[#5C6B79]">
                              <CheckCircle2 className="w-4 h-4 text-[#568F3E] flex-shrink-0 mt-0.5" aria-hidden="true" />
                              <span>{imp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
