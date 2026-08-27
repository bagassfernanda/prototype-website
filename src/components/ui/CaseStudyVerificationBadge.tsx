'use client';

import React from 'react';
import type { CaseStudyVerificationStatus } from '../../types';
import { useLanguage } from '../i18n/LanguageProvider';

interface CaseStudyVerificationBadgeProps {
  variant: CaseStudyVerificationStatus;
  className?: string;
}

const statusStyles: Record<CaseStudyVerificationStatus, string> = {
  pending: 'border-[#E7C44A] bg-[#FFF8D9] text-[#765D00]',
  draft: 'border-[#9BB7D0] bg-[#EFF5FA] text-[#244F78]',
  verified: 'border-[#9BC889] bg-[#EFF8EA] text-[#35652A]'
};

export const CaseStudyVerificationBadge: React.FC<CaseStudyVerificationBadgeProps> = ({
  variant,
  className = ''
}) => {
  const { text } = useLanguage();
  const labels: Record<CaseStudyVerificationStatus, string> = {
    pending: text('MENUNGGU VERIFIKASI'),
    draft: text('INDIKATOR DRAF'),
    verified: text('TERVERIFIKASI')
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] ${statusStyles[variant]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      <span>{labels[variant]}</span>
    </span>
  );
};
