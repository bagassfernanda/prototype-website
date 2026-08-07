import React from 'react';
import { CASE_STUDIES_DATA } from '../content/caseStudies';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Card } from '../components/ui/Card';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Building, ArrowRight, ShieldCheck } from 'lucide-react';
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
	        title={`${text('Studi Kasus Implementasi')} — PT Artavel`}
	        description={text('Pelajari pengalaman implementasi SIPPADU, E-Archive, dan TNDE pada instansi pemerintah daerah dan BUMD.')}
        canonicalPath="/studi-kasus"
      />

      <Section bg="surface" padding="compact">
        <Container>
	          <Breadcrumb items={[{ label: text('Studi Kasus') }]} onNavigate={onNavigate} />

          <div className="py-8 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-4">
	              {text('Studi Kasus & Rekam Jejak')}
            </h1>
            <p className="text-lg text-[#5C6B79] leading-relaxed">
	              {text('Pengalaman nyata bagaimana solusi Artavel membantu instansi pemerintah dan BUMD memetakan proses, mempercepat persetujuan, dan merapikan kearsipan.')}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	            {caseStudies.map((cs) => {
              const displayName = cs.publicationPermission ? cs.clientName : cs.anonymousClientLabel;

              return (
                <Card key={cs.id} className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#36699C] bg-[#EAF2F8] px-3 py-1 rounded-full w-fit mb-4">
                      <Building className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{cs.sector}</span>
                    </div>

                    <h2 className="text-xl font-bold text-[#172536] font-heading mb-3">
                      {displayName}
                    </h2>

                    <p className="text-xs text-[#5C6B79] leading-relaxed mb-4 line-clamp-3">
                      {cs.challenge}
                    </p>

                    <div className="space-y-2 mb-6">
	                      <span className="text-xs font-bold text-[#172536] block">{text('Produk Terimplementasi:')}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {cs.productsUsed.map((p, idx) => (
                          <span key={idx} className="text-[11px] bg-[#F7F9FB] border border-[#DBE4EB] px-2 py-0.5 rounded font-medium text-[#5C6B79]">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#F7F9FB] border border-[#DBE4EB] mb-6">
                      {cs.results.map((res, idx) => (
                        <div key={idx}>
                          <div className="text-lg font-extrabold text-[#568F3E] font-heading">
                            {res.value}
                          </div>
                          <div className="text-[11px] text-[#5C6B79] font-medium leading-tight">
                            {res.unit}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#DBE4EB] flex items-center justify-between">
                    <span className="text-xs text-[#5C6B79]">
	                      {text('Wilayah:')} {cs.region}
                    </span>
                    <button
                      onClick={() => onNavigate(`/studi-kasus/${cs.slug}`)}
                      className="artavel-inline-action-link inline-flex items-center gap-1 text-xs font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mr-1"
                    >
	                      <span>{text('Detail')}</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
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
