'use client';

import React, { useRef } from 'react';
import SectionReveal from '../ui/SectionReveal';

interface ServiceCarouselProps {
  children: React.ReactNode[];
}

export default function ServiceCarousel({ children }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: 'calc(100% + 12vw)',
      marginLeft: '-6vw',
      overflow: 'hidden'
    }}>


      {/* Carousel Container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          padding: '20px 6vw', // Add padding back inside the scrollable area
          WebkitOverflowScrolling: 'touch'
        }}
        className="no-scrollbar"
      >
        {children.map((child, i) => (
          <div key={i} style={{ flex: '0 0 auto', width: 'clamp(300px, 28vw, 400px)', scrollSnapAlign: 'start' }}>
            {child}
          </div>
        ))}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .carousel-arrow:hover {
          background: var(--gold) !important;
          color: var(--navy) !important;
          transform: translateY(-50%) scale(1.1);
        }
      `}</style>
    </div>
  );
}
