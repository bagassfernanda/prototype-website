import React from 'react';

interface BrandPatternProps {
  className?: string;
}

export const BrandPattern: React.FC<BrandPatternProps> = ({ className = '' }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none opacity-[0.04] overflow-hidden ${className}`}
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <pattern id="artavel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#36699C" strokeWidth="1" />
          <path d="M 20 10 L 30 25 L 10 25 Z" fill="#7DBC5E" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#artavel-grid)" />
      </svg>
    </div>
  );
};
