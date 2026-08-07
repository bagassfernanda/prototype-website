import React from 'react';

interface BrandColorLineProps {
  className?: string;
  heightPx?: number;
  id?: string;
}

/**
 * BrandColorLine - reusable blue-green identity line for the refreshed website tone.
 */
export const BrandColorLine: React.FC<BrandColorLineProps> = ({
  className = '',
  heightPx = 3,
  id = 'artavel-brand-color-line'
}) => {
  return (
    <div
      id={id}
      aria-hidden="true"
      className={`w-full flex overflow-hidden ${className}`}
      style={{ height: `${heightPx}px` }}
    >
      <div className="h-full w-1/2 bg-[#36699C]" />
      <div className="h-full w-1/2 bg-gradient-to-r from-[#2F79B7] to-[#7DBC5E]" />
    </div>
  );
};
