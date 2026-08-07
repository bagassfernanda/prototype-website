'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_PROFILE } from '../../content/company';
import { useLanguage } from '../i18n/LanguageProvider';

type SocialPlatform = 'Facebook' | 'Instagram' | 'TikTok' | 'LinkedIn';
type SocialTone = 'surface' | 'footer';
type SocialIcon = React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;

interface SocialMediaLinksProps {
  className?: string;
  tone?: SocialTone;
  showHeading?: boolean;
  showLabels?: boolean;
}

interface SocialItemConfig {
  platform: SocialPlatform;
  Icon: SocialIcon;
}

const TikTokIcon: SocialIcon = ({ className, size = 24, strokeWidth = 2, ...props }) => (
  <svg
    {...props}
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6 3.8v10.3a4.2 4.2 0 1 1-4.2-4.2h.7v3.1h-.7a1.1 1.1 0 1 0 1.1 1.1V3.8h3.1Zm0 0c.5 2.8 2.1 4.4 4.8 4.9v3.1c-1.8-.1-3.4-.7-4.8-1.8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SOCIAL_CONFIG: SocialItemConfig[] = [
  { platform: 'Facebook', Icon: Facebook },
  { platform: 'Instagram', Icon: Instagram },
  { platform: 'TikTok', Icon: TikTokIcon },
  { platform: 'LinkedIn', Icon: Linkedin }
];

export const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  className = '',
  tone = 'surface',
  showHeading = false,
  showLabels = false
}) => {
  const { language, text } = useLanguage();
  const socialByPlatform = new Map(
    COMPANY_PROFILE.socialMedia.map((item) => [item.platform.toLowerCase(), item])
  );

  const getActiveLabel = (platform: SocialPlatform) =>
    language === 'en'
      ? `Open PT Artavel official ${platform}`
      : `Buka ${platform} resmi PT Artavel`;

  const getDisabledLabel = (platform: SocialPlatform) =>
    language === 'en'
      ? `${platform} official link requires verification`
      : `Link resmi ${platform} perlu verifikasi`;

  return (
    <div className={`artavel-social-panel artavel-social-panel-${tone} ${className}`.trim()}>
      {showHeading && (
        <div className="mb-3">
          <h3 className="text-sm font-bold text-[#172536] font-heading">
            {text('Media Sosial Artavel')}
          </h3>
          <p className="text-xs text-[#5C6B79] mt-1">
            {text('Ikuti kanal resmi dan pembaruan terbaru PT Artavel.')}
          </p>
        </div>
      )}

      <nav
        aria-label={text('Media sosial resmi PT Artavel')}
        className={`artavel-social-links ${showLabels ? 'artavel-social-links-with-labels' : ''}`}
      >
        {SOCIAL_CONFIG.map(({ platform, Icon }) => {
          const source = socialByPlatform.get(platform.toLowerCase());
          const isActive = Boolean(source?.active && source.url);
          const label = isActive ? getActiveLabel(platform) : getDisabledLabel(platform);
          const content = (
            <>
              <Icon className="w-5 h-5" aria-hidden="true" strokeWidth={2.1} />
              <span className={showLabels ? 'text-xs font-semibold leading-none' : 'sr-only'}>
                {platform}
              </span>
            </>
          );

          if (!isActive) {
            return (
              <button
                key={platform}
                type="button"
                className="artavel-social-link artavel-social-link-placeholder"
                data-social={platform.toLowerCase()}
                aria-label={label}
              >
                {content}
              </button>
            );
          }

          return (
            <a
              key={platform}
              href={source?.url}
              className="artavel-social-link"
              data-social={platform.toLowerCase()}
              aria-label={label}
              title={label}
              target="_blank"
              rel="noreferrer"
            >
              {content}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
