import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES_DATA } from '../../content/caseStudies';
import { CaseStudyCard } from '../case-studies/CaseStudyCard';
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
        <ScrollReveal className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end" direction="scale">
          <div>
            <h2 className="mb-2 font-heading text-sm font-bold uppercase tracking-wider text-[#36699C]">
              {text('Pengalaman Implementasi')}
            </h2>
            <p className="font-heading text-3xl font-extrabold text-[#172536] sm:text-4xl">
              {text('Rekam Jejak Implementasi Digital')}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/studi-kasus')}
            className="artavel-inline-action-link inline-flex min-h-11 items-center gap-2 self-start rounded px-2 py-1 text-sm font-bold text-[#36699C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] md:self-auto"
          >
            <span>{text('Lihat Seluruh Studi Kasus')}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
              onNavigate={onNavigate}
              revealDelay={index * 80}
              headingLevel="h3"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
