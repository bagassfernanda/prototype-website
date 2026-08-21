import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { toLocalizedPath } from '../../utils/i18nRouting';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
  className?: string;
  id?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  onNavigate,
  className = '',
  id = 'artavel-breadcrumb'
}) => {
  const { language, text } = useLanguage();
  const fullItems: BreadcrumbItem[] = [
    { label: 'Beranda', path: '/' },
    ...items
  ];

  const handleClick = (e: React.MouseEvent, path?: string) => {
    if (path && onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <nav id={id} aria-label={text('Breadcrumb Navigasi')} className={`py-3 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-sm text-[#5C6B79]">
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#5C6B79]/60 flex-shrink-0" aria-hidden="true" />
              )}
              {isLast || !item.path ? (
                <span className="font-semibold text-[#172536]" aria-current="page">
                  {text(item.label)}
                </span>
              ) : (
                <a
                  href={toLocalizedPath(item.path, language)}
                  onClick={(e) => handleClick(e, item.path)}
                  className="hover:text-[#36699C] transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] rounded px-1"
                >
                  {index === 0 && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
                  <span>{text(item.label)}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
