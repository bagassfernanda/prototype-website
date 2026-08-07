'use client';

import React from 'react';
import { Clock3, Moon, Sun } from 'lucide-react';
import { ThemeMode, useTheme } from './ThemeProvider';
import { useLanguage } from '../i18n/LanguageProvider';

interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile';
}

const THEME_OPTIONS: Array<{ mode: ThemeMode; label: string; icon: React.ElementType }> = [
  { mode: 'auto', label: 'Mode otomatis mengikuti jam perangkat', icon: Clock3 },
  { mode: 'light', label: 'Mode siang', icon: Sun },
  { mode: 'dark', label: 'Mode malam', icon: Moon }
];

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'desktop' }) => {
  const { mode, resolvedTheme, setMode } = useTheme();
  const { text } = useLanguage();
  const isCompact = variant === 'mobile';

  return (
    <div
      className={`artavel-theme-toggle inline-flex items-center rounded-full border border-[#DBE4EB] bg-white/70 p-1 shadow-xs backdrop-blur ${
        isCompact ? 'gap-0.5' : 'gap-1'
      }`}
      aria-label={text('Pilih mode tampilan')}
      title={
        mode === 'auto'
          ? `${text('Mode otomatis mengikuti jam perangkat')} (${resolvedTheme === 'dark' ? text('Mode malam') : text('Mode siang')})`
          : resolvedTheme === 'dark'
            ? text('Mode malam')
            : text('Mode siang')
      }
    >
      {THEME_OPTIONS.map((item) => {
        const Icon = item.icon;
        const isActive = mode === item.mode;

        return (
          <button
            key={item.mode}
            type="button"
            onClick={() => setMode(item.mode)}
            aria-pressed={isActive}
            aria-label={text(item.label)}
            title={text(item.label)}
            className={`grid shrink-0 place-items-center rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#36699C] ${
              isCompact ? 'h-8 w-8' : 'h-9 w-9'
            } ${
              isActive
                ? 'bg-[#173955] text-white shadow-sm'
                : 'text-[#6D7C88] hover:bg-[#EAF2F8] hover:text-[#173955]'
            }`}
          >
            <Icon className={isCompact ? 'h-4 w-4' : 'h-[18px] w-[18px]'} aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
};
