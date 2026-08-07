import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'yellow' | 'orange' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
  icon
}) => {
  const variantStyles = {
    blue: 'bg-[#EAF2F8] text-[#244F78] border-[#36699C]/20',
    green: 'bg-[#EFF8EA] text-[#568F3E] border-[#7DBC5E]/30',
    yellow: 'bg-[#FFF7E8] text-[#AA7838] border-[#DAA761]/30',
    orange: 'bg-[#FBEEEA] text-[#A9473B] border-[#D26353]/30',
    neutral: 'bg-[#F7F9FB] text-[#5C6B79] border-[#DBE4EB]'
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-sm px-3 py-1 font-medium'
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="inline-flex flex-shrink-0" aria-hidden="true">{icon}</span>}
      <span className="whitespace-nowrap">{children}</span>
    </span>
  );
};
