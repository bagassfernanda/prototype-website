import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      className = '',
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none whitespace-nowrap min-h-[44px]';

    const variants = {
      primary:
        'bg-[#36699C] text-white hover:bg-[#244F78] focus-visible:ring-[#36699C] shadow-sm hover:shadow active:scale-[0.99]',
      secondary:
        'bg-[#EAF2F8] text-[#244F78] hover:bg-[#36699C] hover:text-white focus-visible:ring-[#36699C]',
      outline:
        'border-2 border-[#36699C] text-[#36699C] bg-transparent hover:bg-[#36699C] hover:text-white focus-visible:ring-[#36699C]',
      success:
        'bg-[#568F3E] text-white hover:bg-[#7DBC5E] focus-visible:ring-[#568F3E] shadow-sm',
      ghost:
        'text-[#172536] hover:bg-[#F7F9FB] hover:text-[#36699C] focus-visible:ring-[#36699C]'
    };

    const sizes = {
      sm: 'text-sm px-3.5 py-2 gap-1.5',
      md: 'text-base px-5 py-2.5 gap-2',
      lg: 'text-lg px-7 py-3.5 gap-2.5 font-semibold'
    };

    return (
      <button
        ref={ref}
        id={id}
        disabled={disabled || isLoading}
        className={`artavel-button artavel-button-${variant} ${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          <>
            {leftIcon && <span className="inline-flex flex-shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="inline-flex flex-shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
