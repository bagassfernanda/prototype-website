import React from 'react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';

interface PlaceholderNoticeProps {
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
}

/**
 * Visual indicator for draft/unverified management information
 * Prevents false business claims according to prompt mandates.
 */
export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label = 'Draf — Memerlukan Verifikasi Manajemen Artavel',
  className = '',
  size = 'sm'
}) => {
  const { text } = useLanguage();
  const sizeStyles = size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3.5 py-1.5';

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-md bg-[#FFF7E8] text-[#AA7838] border border-[#DAA761]/40 font-medium ${sizeStyles} ${className}`}
      title={text('Informasi ini dalam status draf dan akan dikonfirmasi oleh tim manajemen Artavel.')}
    >
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
      <span>{text(label)}</span>
    </div>
  );
};
