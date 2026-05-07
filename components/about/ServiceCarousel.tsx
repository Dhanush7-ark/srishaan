'use client';

import React, { useRef } from 'react';

interface ServiceCarouselProps {
  children: React.ReactNode[];
}

export default function ServiceCarousel({ children }: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Scroll by 40% of the container width for a smooth, progressive feel
      const scrollAmount = clientWidth * 0.4;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-wrapper" style={{
      position: 'relative',
      width: 'calc(100% + 16%)',
      marginLeft: '-8%',
      overflow: 'visible'
    }}>
      {/* Navigation Arrows */}
      <button 
        className="carousel-arrow arrow-left" 
        onClick={() => scroll('left')}
        aria-label="Scroll Left"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>
      
      <button 
        className="carousel-arrow arrow-right" 
        onClick={() => scroll('right')}
        aria-label="Scroll Right"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

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
          padding: '20px 8%', 
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
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 30;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        :global(body.light) .carousel-arrow {
          background: #FFFFFF;
          border-color: rgba(15, 40, 130, 0.12);
          color: #0B1740;
          box-shadow: 0 8px 25px rgba(15, 40, 130, 0.08);
        }
        .arrow-left {
          left: 4%;
        }
        .arrow-right {
          right: 4%;
        }
        .carousel-arrow:hover {
          background: var(--gold);
          color: var(--navy);
          border-color: var(--gold);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 25px rgba(240, 165, 0, 0.4);
        }
        .carousel-arrow:active {
          transform: translateY(-50%) scale(0.95);
        }
        @media (max-width: 1200px) {
          .arrow-left { left: 2%; }
          .arrow-right { right: 2%; }
        }
        @media (max-width: 768px) {
          .carousel-arrow {
            display: none;
          }
          .carousel-wrapper {
            width: calc(100% + 16%) !important;
            margin-left: -8% !important;
          }
        }
      `}</style>
    </div>
  );
}
