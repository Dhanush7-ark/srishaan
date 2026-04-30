'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top on mount
    // Using a small timeout to ensure it happens after layout paints
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any // Use 'instant' if supported, or just omit behavior
      });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
