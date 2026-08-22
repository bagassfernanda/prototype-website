import React from 'react';
import { Building, ArrowRight } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../../content/caseStudies';
import { CaseStudy } from '../../types';
import { Card } from '../ui/Card';
import { Section } from '../layout/Section';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useLanguage } from '../i18n/LanguageProvider';

interface FeaturedCaseStudiesProps {
  onNavigate: (path: string) => void;
  compact?: boolean;
}

export const FeaturedCaseStudies: React.FC<FeaturedCaseStudiesProps> = ({ onNavigate, compact = false }) => {
  const { text, localize } = useLanguage();
  const caseStudies = localize(CASE_STUDIES_DATA);

  return (
    <Section bg="surface" padding={compact ? 'compact' : 'normal'} id="studi-kasus-unggulan">
      <Container>
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-5" direction="scale">
          <div>
            <h2 className="text-sm font-bold tracking-wider uppercase text-[#36699C] font-heading mb-2">
	              {text('Pengalaman Implementasi')}
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#172536] font-heading">
	              {text('Rekam Jejak Implementasi Digital')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/studi-kasus')}
            className="artavel-inline-action-link inline-flex items-center gap-2 text-sm font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-2 py-1"
          >
	            <span>{text('Lihat Seluruh Studi Kasus')}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
	          {caseStudies.slice(0, 3).map((cs: CaseStudy, index) => {
            const displayName = cs.publicationPermission ? cs.clientName : cs.anonymousClientLabel;

            return (
              <Card key={cs.id} className="flex flex-col justify-between" revealDelay={index * 80}>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#36699C] bg-[#EAF2F8] px-3 py-1 rounded-full w-fit mb-4">
                    <Building className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{cs.sector}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172536] font-heading mb-3">
                    {displayName}
                  </h3>

                  <p className="text-sm text-[#5C6B79] leading-relaxed mb-6 line-clamp-3">
                    {cs.challenge}
                  </p>

                  <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-[#F7F9FB] border border-[#DBE4EB] mb-6">
                    {cs.results.map((res, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-extrabold text-[#568F3E] font-heading">
                          {res.value}
                        </div>
                        <div className="text-xs text-[#5C6B79] font-medium leading-tight mt-0.5">
                          {res.unit}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#DBE4EB] flex items-center justify-between">
                  <span className="text-xs text-[#5C6B79] font-medium">
	                    {text('Durasi:')} {cs.implementationDuration}
                  </span>
                  <button
                    onClick={() => onNavigate(`/studi-kasus/${cs.slug}`)}
                    className="artavel-inline-action-link inline-flex items-center gap-1 text-xs font-bold text-[#36699C] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1 -mr-1"
                  >
	                    <span>{text('Detail Studi Kasus')}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
