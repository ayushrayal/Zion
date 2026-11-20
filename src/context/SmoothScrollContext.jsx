import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollContext = createContext({
  lenis: null,
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
  refresh: () => {}
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
export const useLenis = useSmoothScroll; // Alias for developer convenience

/**
 * Global SmoothScrollProvider
 * Wraps the application to provide buttery-smooth, fluid, and responsive scrolling
 * seamlessly integrated with GSAP ScrollTrigger and React Router.
 */
export function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const tickerCallbackRef = useRef(null);

  // Scroll to target with proper navbar offset (-80px by default)
  const scrollTo = useCallback((target, options = {}) => {
    const lenis = lenisRef.current;
    const defaultOffset = -80; // Accounting for sticky navbar height

    if (!lenis) {
      // Fallback if Lenis is disabled (e.g. prefers-reduced-motion)
      if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: options.immediate ? 'auto' : 'smooth' });
      } else if (typeof target === 'string') {
        const id = target.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          const y = elem.getBoundingClientRect().top + window.scrollY + (options.offset ?? defaultOffset);
          window.scrollTo({ top: y, behavior: options.immediate ? 'auto' : 'smooth' });
        }
      } else if (target instanceof HTMLElement) {
        const y = target.getBoundingClientRect().top + window.scrollY + (options.offset ?? defaultOffset);
        window.scrollTo({ top: y, behavior: options.immediate ? 'auto' : 'smooth' });
      }
      return;
    }

    const mergedOptions = {
      offset: defaultOffset,
      duration: 1.15,
      ...options
    };

    lenis.scrollTo(target, mergedOptions);
  }, []);

  const stop = useCallback(() => {
    lenisRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    lenisRef.current?.start();
  }, []);

  const refresh = useCallback(() => {
    lenisRef.current?.resize();
    ScrollTrigger.refresh();
  }, []);

  useEffect(() => {
    // Respect accessibility motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // For users requesting reduced motion, provide native scrolling without interpolation
      return;
    }

    // Configure Lenis with fluid, natural, and responsive physics
    const lenis = new Lenis({
      duration: 1.15, // Perfect balance between smooth momentum and responsiveness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Natural exponential decay
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: false, // Maintain 120Hz native responsive touch scrolling on mobile
      touchMultiplier: 1.5,
      autoResize: true
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;
    window.__lenisScrollTo = scrollTo;

    // 1. Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // 2. Drive Lenis through GSAP's optimized RAF ticker (single unified animation loop)
    const updateRaf = (time) => {
      lenis.raf(time * 1000); // GSAP provides seconds; Lenis expects milliseconds
    };
    tickerCallbackRef.current = updateRaf;
    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0); // Prevents frame-drop jumps after inactivity or tab switching

    // 3. Global anchor link click handler for internal hashes (e.g. <a href="#about">)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Check if it's an on-page hash link (e.g. "#about", "#contact")
      if (href.startsWith('#') && href.length > 1) {
        const targetId = href.substring(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          e.preventDefault();
          scrollTo(targetElem, { offset: -80 });
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    // Initial sync
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      if (tickerCallbackRef.current) {
        gsap.ticker.remove(tickerCallbackRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
      window.__lenis = null;
      window.__lenisScrollTo = null;
    };
  }, [scrollTo]);

  const contextValue = {
    lenis: lenisRef.current,
    scrollTo,
    stop,
    start,
    refresh
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
export default SmoothScrollProvider;
