'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top on mount ONLY if no hash is present in the URL.
    // If a hash is present, scroll to that element.
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
