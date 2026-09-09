import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Safe GSAP ScrollTrigger animation initializer for React components.
 * Automatically checks for prefers-reduced-motion and wraps in gsap.context for clean unmounting.
 */
export const initScrollAnimation = (containerRef, callback) => {
  if (!containerRef.current) return () => {};

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isReducedMotion) {
    // Skip GSAP animations for reduced motion users
    return () => {};
  }

  const ctx = gsap.context(() => {
    callback(gsap, ScrollTrigger);
  }, containerRef);

  return () => ctx.revert();
};

/**
 * Preset: Reveal element on scroll into view
 */
export const animateSectionReveal = (targetSelector, triggerElement, options = {}) => {
  return gsap.fromTo(
    targetSelector,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.7,
      stagger: options.stagger || 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger
      }
    }
  );
};
