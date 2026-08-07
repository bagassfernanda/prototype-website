import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  size?: 'normal' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  id,
  size = 'normal'
}) => {
  const sizeMap = {
    narrow: 'max-w-4xl',
    normal: 'max-w-7xl',
    wide: 'max-w-[1400px]'
  };

  return (
    <div
      id={id}
      className={`w-full ${sizeMap[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};
