import React, { useState, useEffect, useRef, useCallback } from 'react';
import './CollageSlideshow.css';

const AUTOPLAY_DELAY = 5000; // 5 seconds
const RESUME_DELAY = 5000;   // Resume autoplay 5s after user interaction

export default function CollageSlideshow({
  slides = [],
  variant = 'light', // 'light' (for white bg like Gallery) or 'azure' (for azure bg like Environment)
  idPrefix = 'slide',
  showSlideInfo = false
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const resumeTimeoutRef = useRef(null);
  const timerRef = useRef(null);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    triggerInteractionPause();
  };

  // Pause on manual interaction and auto-resume after 5 seconds
  const triggerInteractionPause = () => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, RESUME_DELAY);
  };

  // Handle silent auto-rotation every 5 seconds
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    timerRef.current = setInterval(() => {
      goToNext();
    }, AUTOPLAY_DELAY);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused, totalSlides, goToNext]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrev();
      triggerInteractionPause();
    } else if (e.key === 'ArrowRight') {
      goToNext();
      triggerInteractionPause();
    }
  };

  // Touch swipe handling
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) {
      triggerInteractionPause();
      return;
    }
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
    triggerInteractionPause();
  };

  if (!slides || slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={`collage-slideshow-container variant-${variant}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Image Slideshow"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Row: Minimal Category (if present) & Clean Counter/Controls */}
      <div className="slideshow-header-bar">
        {showSlideInfo && currentSlide.title ? (
          <div className="slideshow-header-info">
            <span className="slideshow-pill-category">
              <span className="slideshow-dot" />
              {currentSlide.title}
            </span>
          </div>
        ) : (
          <div className="slideshow-header-spacer" />
        )}

        {/* Counter and Navigation Controls */}
        <div className="slideshow-controls-group">
          <div className="slideshow-counter">
            <span className="counter-current">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="counter-sep">/</span>
            <span className="counter-total">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>

          <div className="slideshow-nav-arrows">
            <button
              type="button"
              className="slideshow-arrow-btn prev-btn"
              onClick={() => {
                goToPrev();
                triggerInteractionPause();
              }}
              aria-label="Previous slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              className="slideshow-arrow-btn next-btn"
              onClick={() => {
                goToNext();
                triggerInteractionPause();
              }}
              aria-label="Next slide"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Slides Track: Clean 2x2 Square Grid */}
      <div className="slideshow-viewport">
        {slides.map((slide, sIdx) => {
          const isActive = sIdx === currentIndex;
          const isPrev = sIdx === (currentIndex - 1 + totalSlides) % totalSlides;
          const isNext = sIdx === (currentIndex + 1) % totalSlides;

          let stateClass = 'slide-hidden';
          if (isActive) stateClass = 'slide-active';
          else if (isPrev) stateClass = 'slide-prev';
          else if (isNext) stateClass = 'slide-next';

          return (
            <div
              key={slide.id || `${idPrefix}-${sIdx}`}
              className={`slideshow-slide ${stateClass}`}
              aria-hidden={!isActive}
            >
              {/* Clean 2x2 Grid of 4 Equal 1:1 Square Images */}
              <div className="collage-grid-inner">
                {slide.items.map((item, iIdx) => (
                  <div
                    key={item.id || `item-${iIdx}`}
                    className={`collage-card card-index-${iIdx} theme-${item.tagTheme || 'green'}`}
                  >
                    <div className="collage-card-media">
                      <img
                        src={item.src}
                        alt={item.alt || 'ZION Learning & Therapy Facility'}
                        className="collage-card-img"
                        style={{ objectPosition: item.objectPosition || 'center 22%' }}
                        loading={Math.abs(sIdx - currentIndex) <= 1 ? 'eager' : 'lazy'}
                      />
                      {/* Minimal clean green or lime category tag (no blue badges, no numbers) */}
                      {item.tag && (
                        <span className={`collage-card-tag tag-${item.tagTheme || 'green'}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Pagination Indicators - Minimal and Clean */}
      <div className="slideshow-pagination-bar">
        <div className="slideshow-dots-track" role="tablist" aria-label="Slides">
          {slides.map((_, dotIdx) => (
            <button
              key={`dot-${dotIdx}`}
              type="button"
              role="tab"
              aria-selected={dotIdx === currentIndex}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`slideshow-dot-btn ${dotIdx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(dotIdx)}
            >
              <span className="dot-inner" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
