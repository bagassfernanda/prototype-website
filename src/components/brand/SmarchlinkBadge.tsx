import React from 'react';
import { useLanguage } from '../i18n/LanguageProvider';

interface SmarchlinkBadgeProps {
  className?: string;
  size?: 'sm' | 'md';
}

export const SmarchlinkBadge: React.FC<SmarchlinkBadgeProps> = ({
  className = '',
  size = 'sm'
}) => {
  const { text } = useLanguage();
  const padding = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full bg-[#EAF2F8] text-[#244F78] border border-[#36699C]/20 ${padding} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#7DBC5E]" aria-hidden="true" />
      {text('Ekosistem Smarchlink®')}
    </span>
  );
};
