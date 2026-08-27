import React from 'react';
import { ArrowDown, ArrowRight, Building2, Check } from 'lucide-react';
import {
  CASE_STUDIES_DATA,
  getCaseStudyDisplayName,
  getCaseStudyResultStatus
} from '../content/caseStudies';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { Breadcrumb } from '../components/layout/Breadcrumb';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CaseStudyVerificationBadge } from '../components/ui/CaseStudyVerificationBadge';
import { CaseStudyVerificationNotice } from '../components/ui/CaseStudyVerificationNotice';
import { MetaInjector } from '../components/seo/MetaInjector';
import { useLanguage } from '../components/i18n/LanguageProvider';

interface CaseStudyDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ slug, onNavigate }) => {
  const { text, localize } = useLanguage();
  const caseStudies = localize(CASE_STUDIES_DATA);
  const caseStudy = caseStudies.find((item) => item.slug === slug) ?? caseStudies[0];
  const displayName = getCaseStudyDisplayName(caseStudy);
  const approach = caseStudy.approach ?? ['Discovery', 'Configuration', 'Implementation', 'Training', 'Support'];
  const caseStudyStatus = caseStudy.verified ? 'verified' : 'pending';

  return (
    <>
      <MetaInjector
        title={text(caseStudy.metadataTitle)}
        description={text(caseStudy.shortDescription)}
        canonicalPath={`/studi-kasus/${caseStudy.slug}`}
      />

      <Section bg="surface" padding="compact" id="case-study-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: text('Studi Kasus'), path: '/studi-kasus' },
              { label: text(displayName) }
            ]}
            onNavigate={onNavigate}
          />

          <div className="max-w-4xl py-8 sm:py-10">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#EAF2F8] px-3 py-1 text-xs font-semibold text-[#36699C]">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{text(caseStudy.sector)}</span>
            </div>

            <h1 className="mb-5 font-heading text-3xl font-extrabold leading-tight text-[#172536] sm:text-4xl lg:text-5xl">
              {text(displayName)}
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-[#5C6B79]">
              {text(caseStudy.shortDescription)}
            </p>

            <div className="mt-6 flex flex-col gap-4 border-t border-[#DBE4EB] pt-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#5C6B79]">
                  {text('Wilayah')}
                </span>
                <span className="mt-1 block text-sm font-semibold text-[#172536]">
                  {text(caseStudy.region)}
                </span>
              </div>
              <div className="sm:max-w-xl sm:text-right">
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#5C6B79]">
                  {text('Produk Terkait')}
                </span>
                <div className="mt-2 flex flex-wrap gap-1.5 sm:justify-end">
                  {caseStudy.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-[#C6D8E6] bg-white px-2.5 py-1 text-xs font-medium text-[#36699C]"
                    >
                      {text(product)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="normal" id="case-study-content">
        <Container size="narrow">
          <div className="space-y-12 sm:space-y-16">
            <section id="case-study-summary" aria-labelledby="case-study-summary-title">
              <div className="mb-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#36699C]">
                  {text('Ringkasan')}
                </p>
                <h2 id="case-study-summary-title" className="font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                  {text('Ringkasan Implementasi')}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] p-4">
                  <span className="block text-xs font-semibold text-[#5C6B79]">{text('Sektor')}</span>
                  <span className="mt-1 block text-sm font-bold leading-snug text-[#172536]">
                    {text(caseStudy.sector)}
                  </span>
                </div>
                <div className="rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] p-4">
                  <span className="block text-xs font-semibold text-[#5C6B79]">{text('Wilayah')}</span>
                  <span className="mt-1 block text-sm font-bold leading-snug text-[#172536]">
                    {text(caseStudy.region)}
                  </span>
                </div>
                <div className="rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] p-4">
                  <span className="block text-xs font-semibold text-[#5C6B79]">{text('Solusi')}</span>
                  <span className="mt-1 block text-sm font-bold leading-snug text-[#172536]">
                    {caseStudy.products.map((product) => text(product)).join(' · ')}
                  </span>
                </div>
                <div className="rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] p-4">
                  <span className="mb-2 block text-xs font-semibold text-[#5C6B79]">
                    {text('Status Studi Kasus')}
                  </span>
                  <CaseStudyVerificationBadge variant={caseStudyStatus} />
                </div>
              </div>
            </section>

            <section id="case-study-challenge" aria-labelledby="case-study-challenge-title">
              <h2 id="case-study-challenge-title" className="mb-4 font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                {text('Tantangan Awal Organisasi')}
              </h2>
              <div className="rounded-2xl border border-[#DBE4EB] bg-[#F7F9FB] p-5 sm:p-7">
                <p className="text-base leading-relaxed text-[#5C6B79]">{text(caseStudy.challenge)}</p>
              </div>
            </section>

            <section id="case-study-needs" aria-labelledby="case-study-needs-title">
              <h2 id="case-study-needs-title" className="mb-4 font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                {text('Kebutuhan Utama')}
              </h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {caseStudy.needs.map((need) => (
                  <li
                    key={need}
                    className="flex items-start gap-3 rounded-xl border border-[#DBE4EB] bg-white p-4 text-sm font-semibold text-[#172536]"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#36699C]" aria-hidden="true" />
                    <span>{text(need)}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="case-study-solution" aria-labelledby="case-study-solution-title">
              <h2 id="case-study-solution-title" className="mb-4 font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                {text('Solusi & Ruang Lingkup Pendampingan')}
              </h2>
              <div className="rounded-2xl border border-[#C6D8E6] bg-[#F2F7FB] p-5 sm:p-7">
                <p className="text-base leading-relaxed text-[#5C6B79]">{text(caseStudy.solution)}</p>
              </div>
            </section>

            <section id="case-study-approach" aria-labelledby="case-study-approach-title">
              <div className="mb-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#36699C]">
                  {text('Gambaran Umum')}
                </p>
                <h2 id="case-study-approach-title" className="font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                  {text('Gambaran Pendekatan')}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5C6B79]">
                  {text(
                    'Urutan berikut adalah gambaran pendekatan untuk membantu menjelaskan tahapan umum, bukan proses implementasi resmi untuk organisasi tertentu.'
                  )}
                </p>
              </div>

              <ol className="flex flex-col md:flex-row md:items-stretch">
                {approach.map((step, index) => (
                  <React.Fragment key={step}>
                    <li className="flex items-center gap-3 rounded-xl border border-[#DBE4EB] bg-white p-4 md:flex-1 md:flex-col md:items-start md:gap-4">
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF2F8] text-sm font-extrabold text-[#36699C]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold text-[#172536]">{text(step)}</span>
                    </li>
                    {index < approach.length - 1 && (
                      <li aria-hidden="true" className="flex h-8 items-center justify-center text-[#7A9EBE] md:h-auto md:w-8 md:flex-shrink-0">
                        <ArrowDown className="h-4 w-4 md:hidden" />
                        <ArrowRight className="hidden h-4 w-4 md:block" />
                      </li>
                    )}
                  </React.Fragment>
                ))}
              </ol>
            </section>

            <section id="case-study-results" aria-labelledby="case-study-results-title">
              <div className="mb-6">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-[#36699C]">
                  {text('Dampak')}
                </p>
                <h2 id="case-study-results-title" className="font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                  {text('Hasil & Dampak Utama')}
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {caseStudy.results.slice(0, 2).map((result) => {
                  const isVerifiedResult = result.verified && result.status === 'verified' && Boolean(result.value);

                  return (
                    <Card key={result.title} hoverable={false} className="p-5 sm:p-6">
                      <div className="mb-4 flex items-start justify-between gap-3">
                        <CaseStudyVerificationBadge variant={getCaseStudyResultStatus(result)} />
                        {isVerifiedResult && (
                          <span className="font-heading text-2xl font-extrabold text-[#568F3E]">
                            {text(result.value ?? '')}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-[#172536]">{text(result.title)}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#5C6B79]">{text(result.description)}</p>
                      {isVerifiedResult && result.source && (
                        <p className="mt-4 text-xs font-medium text-[#5C6B79]">
                          {text('Sumber')}: {text(result.source)}
                        </p>
                      )}
                    </Card>
                  );
                })}
              </div>
            </section>

            <section id="case-study-products" aria-labelledby="case-study-products-title">
              <h2 id="case-study-products-title" className="mb-4 font-heading text-2xl font-bold text-[#172536] sm:text-3xl">
                {text('Produk Terkait')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {caseStudy.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-full border border-[#C6D8E6] bg-[#F2F7FB] px-3 py-1.5 text-sm font-semibold text-[#36699C]"
                  >
                    {text(product)}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </Section>

      <Section bg="surface-blue" padding="normal" id="case-study-cta">
        <Container size="narrow">
          <div className="rounded-2xl border border-[#C6D8E6] bg-white p-6 text-center shadow-sm sm:p-10">
            <h2 className="font-heading text-2xl font-extrabold leading-tight text-[#172536] sm:text-3xl">
              {text('Punya Tantangan yang Serupa?')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#5C6B79]">
              {text(
                'Setiap organisasi memiliki proses dan kebutuhan yang berbeda. Diskusikan kebutuhan Anda bersama tim Artavel untuk menentukan pendekatan solusi yang sesuai.'
              )}
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/kontak')}
                rightIcon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              >
                {text('Konsultasikan Kebutuhan')}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => onNavigate('/studi-kasus')}
              >
                {text('Kembali ke Studi Kasus')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section bg="white" padding="compact" id="case-study-disclaimer">
        <Container size="narrow">
          <CaseStudyVerificationNotice />
        </Container>
      </Section>
    </>
  );
};
