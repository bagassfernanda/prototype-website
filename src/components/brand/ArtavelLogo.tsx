import React from 'react';
import Image from 'next/image';

interface ArtavelLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showSubbrand?: boolean;
}

export const ArtavelLogo: React.FC<ArtavelLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubbrand = true
}) => {
  const logoDimensions = {
    sm: 'h-10 w-24',
    md: 'h-16 w-40',
    lg: 'h-20 w-48'
  }[size];

  const subtextSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-[13px]'
  }[size];

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <span
        className={`relative block overflow-hidden rounded-xl ${
          isLight ? 'bg-white px-2 py-1 shadow-sm' : ''
        } ${variant === 'icon-only' ? 'h-10 w-12' : logoDimensions}`}
      >
        <Image
          src="/brand/artavel-official-logo-transparent.png"
          alt={variant === 'icon-only' ? '' : 'Logo PT Artavel'}
          fill
          sizes={size === 'lg' ? '192px' : size === 'md' ? '160px' : '96px'}
          className="object-contain"
          priority={size !== 'lg'}
        />
      </span>

      {variant !== 'icon-only' && showSubbrand && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-semibold tracking-wide ${subtextSizes} ${
              isLight ? 'text-white/80' : 'text-[#5C6B79]'
            }`}
          >
            Solusi Digital Pelayanan & Kearsipan
          </span>
        </div>
      )}
    </div>
  );
};
