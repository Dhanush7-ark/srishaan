'use client';

import { useEffect } from 'react';

export default function ScrollSnapSetter() {
  useEffect(() => {
    // Add snap class to html
    document.documentElement.classList.add('snap-container');
    
    return () => {
      // Remove on unmount
      document.documentElement.classList.remove('snap-container');
    };
  }, []);

  return null;
}
