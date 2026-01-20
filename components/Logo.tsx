
import React from 'react';
import { LOGO_URL } from '../constants.tsx';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-14", light = false }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src={LOGO_URL} 
        alt="Instituto Hope" 
        className={`${className} object-contain transition-all duration-300 ${light ? 'brightness-110' : ''}`}
        style={{ 
          maxHeight: '100%'
        }}
      />
    </div>
  );
};
