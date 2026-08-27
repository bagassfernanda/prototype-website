'use client';

import React from 'react';
import { ArrowRight, Building2 } from 'lucide-react';
import type { CaseStudy } from '../../types';
import { getCaseStudyDisplayName, getCaseStudyResultStatus } from '../../content/caseStudies';
import { toLocalizedPath } from '../../utils/i18nRouting';
import { useLanguage } from '../i18n/LanguageProvider';
import { Card } from '../ui/Card';
import { CaseStudyVerificationBadge } from '../ui/CaseStudyVerificationBadge';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  onNavigate: (path: string) => void;
  revealDelay?: number;
  headingLevel?: 'h2' | 'h3';
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  onNavigate,
  revealDelay = 0,
  headingLevel = 'h2'
}) => {
  const { language, text } = useLanguage();
  const displayName = getCaseStudyDisplayName(caseStudy);
  const detailPath = `/studi-kasus/${caseStudy.slug}`;
  const Title = headingLevel;
  const isVerifiedResult = (result: CaseStudy['results'][number]) =>
    result.verified && result.status === 'verified' && Boolean(result.value);

  return (
    <Card
      id={`case-study-card-${caseStudy.slug}`}
      className="flex h-full flex-col justify-between p-5 sm:p-6"
      revealDelay={revealDelay}
    >
      <div>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EAF2F8] px-3 py-1 text-xs font-semibold text-[#36699C]">
          <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{text(caseStudy.sector)}</span>
        </div>

        <Title className="mb-3 font-heading text-xl font-bold leading-snug text-[#172536]">
          {text(displayName)}
        </Title>

        <p className="mb-5 line-clamp-4 text-sm leading-relaxed text-[#5C6B79]">
          {text(caseStudy.shortDescription)}
        </p>

        <div className="mb-5">
          <span className="mb-2 block text-xs font-bold text-[#172536]">
            {text('Produk Terkait')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {caseStudy.products.map((product) => (
              <span
                key={product}
                className="rounded border border-[#DBE4EB] bg-[#F7F9FB] px-2.5 py-1 text-[11px] font-medium leading-tight text-[#5C6B79]"
              >
                {text(product)}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {caseStudy.results.slice(0, 2).map((result) => (
            <div
              key={result.title}
              className="rounded-xl border border-[#DBE4EB] bg-[#FBFCFD] p-3"
            >
              <div className="mb-2 min-h-6">
                {isVerifiedResult(result) ? (
                  <span className="font-heading text-lg font-extrabold text-[#568F3E]">
                    {text(result.value ?? '')}
                  </span>
                ) : (
                  <CaseStudyVerificationBadge variant={getCaseStudyResultStatus(result)} />
                )}
              </div>
              <h3 className="text-xs font-bold leading-snug text-[#172536]">
                {text(result.title)}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#DBE4EB] pt-4 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-xs font-medium text-[#5C6B79]">
          {text('Wilayah')}: {text(caseStudy.region)}
        </span>
        <a
          href={toLocalizedPath(detailPath, language)}
          onClick={(event) => {
            event.preventDefault();
            onNavigate(detailPath);
          }}
          aria-label={`${text('Lihat Studi Kasus')}: ${text(displayName)}`}
          className="artavel-inline-action-link inline-flex min-h-11 items-center gap-1 self-start rounded px-1 text-xs font-bold text-[#36699C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] sm:self-auto"
        >
          <span>{text('Lihat Studi Kasus')}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
};
