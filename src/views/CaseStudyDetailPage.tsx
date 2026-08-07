import React from 'react';
import { CASE_STUDIES_DATA } from '../content/caseStudies';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FinalCTASection } from '../components/sections/FinalCTASection';
import { MetaInjector } from '../components/seo/MetaInjector';
import { Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface CaseStudyDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onNavigate }) => {
  const { text, localize } = useLanguage();
  const caseStudies = localize(CASE_STUDIES_DATA);
  const cs = caseStudies.find((c) => c.slug === slug) || caseStudies[0];
  const displayName = cs.publicationPermission ? cs.clientName : cs.anonymousClientLabel;

  return (
    <>
      <MetaInjector
	        title={`${text('Studi Kasus')}: ${displayName} — PT Artavel`}
        description={cs.challenge}
        canonicalPath={`/studi-kasus/${cs.slug}`}
      />

      <Section bg="surface" padding="compact">
        <Container>
          <Breadcrumb
            items={[
	              { label: text('Studi Kasus'), path: '/studi-kasus' },
              { label: displayName }
            ]}
            onNavigate={onNavigate}
          />

          <div className="py-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#36699C] bg-[#EAF2F8] px-3 py-1 rounded-full mb-4">
              <Building className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{cs.sector} • {cs.region}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172536] font-heading mb-6 leading-tight">
              {displayName}
            </h1>

            <p className="text-lg text-[#5C6B79] leading-relaxed">
              {cs.solutionProvided}
            </p>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal">
        <Container size="narrow">
          <div className="space-y-10">
            {/* Hasil Utama */}
            <Card className="bg-[#EFF8EA]/50 border-[#7DBC5E]/30 p-8">
              <h2 className="text-xl font-bold text-[#172536] font-heading mb-6">
	                {text('Hasil & Dampak Utama Implementasi')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cs.results.map((res, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-[#7DBC5E]/30">
                    <div className="text-3xl font-extrabold text-[#568F3E] font-heading">
                      {res.value}
                    </div>
                    <div className="text-sm font-bold text-[#172536] mt-1">{res.unit}</div>
                    <div className="text-xs text-[#5C6B79] mt-1 leading-relaxed">{res.description}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tantangan & Solusi */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#172536] font-heading mb-3">
	                  {text('Tantangan Awal Organisasi')}
                </h2>
                <p className="text-base text-[#5C6B79] leading-relaxed bg-[#F7F9FB] p-6 rounded-2xl border border-[#DBE4EB]">
                  {cs.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#172536] font-heading mb-3">
	                  {text('Solusi & Ruang Lingkup Pendampingan')}
                </h2>
                <p className="text-base text-[#5C6B79] leading-relaxed bg-[#F2F7FB] p-6 rounded-2xl border border-[#DBE4EB]">
                  {cs.solutionProvided}
                </p>
              </div>
            </div>

            {/* Testimonial jika ada */}
            {cs.testimonial && (
              <div className="p-8 rounded-2xl bg-[#173955] text-white space-y-4">
                <blockquote className="text-lg italic leading-relaxed text-white/90">
                  "{cs.testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-base text-[#7DBC5E]">{cs.testimonial.authorName}</div>
                  <div className="text-xs text-white/70">{cs.testimonial.authorRole}</div>
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-[#DBE4EB] flex items-center justify-between">
              <Button
                variant="outline"
                onClick={() => onNavigate('/studi-kasus')}
              >
	                {text('← Kembali ke Daftar Studi Kasus')}
              </Button>

              <Button
                variant="primary"
                onClick={() => onNavigate('/kontak')}
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
	                {text('Konsultasi Solusi Serupa')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTASection onNavigate={onNavigate} />
    </>
  );
};
