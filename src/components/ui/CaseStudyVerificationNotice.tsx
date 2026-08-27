'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

interface CaseStudyVerificationNoticeProps {
  className?: string;
}

export const CaseStudyVerificationNotice: React.FC<CaseStudyVerificationNoticeProps> = ({
  className = ''
}) => {
  const { text } = useLanguage();

  return (
    <aside
      id="case-study-verification-notice"
      className={`flex items-start gap-2.5 rounded-xl border border-[#DBE4EB] bg-[#F7F9FB] px-4 py-3 text-xs leading-relaxed text-[#5C6B79] ${className}`}
    >
      <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#36699C]" aria-hidden="true" />
      <p>
        {text(
          'Beberapa informasi pada studi kasus ini masih dalam proses verifikasi internal. Data hasil dan detail implementasi akan diperbarui setelah memperoleh konfirmasi resmi.'
        )}
      </p>
    </aside>
  );
};
