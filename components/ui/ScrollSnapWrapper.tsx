'use client';

import React from 'react';
import ScrollHandler from './ScrollHandler';

interface ScrollSnapWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSnapWrapper({ children, className = '' }: ScrollSnapWrapperProps) {
  return (
    <div 
      className={className} 
      style={{ 
        scrollSnapType: 'y proximity',
        overflowY: 'auto',
        height: '100vh',
        width: '100%',
        scrollBehavior: 'smooth'
      }}
    >
      <ScrollHandler />
      {children}
    </div>
  );
}
