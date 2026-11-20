import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSmoothScroll } from '../../context/SmoothScrollContext';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * ScrollToTop component
 * Automatically resets to top on route change without lag,
 * or scrolls smoothly to the target hash element with sticky navbar offset (-80px).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const { scrollTo, refresh } = useSmoothScroll();

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const elem = document.getElementById(id);
        if (elem) {
          scrollTo(elem, { offset: -80, duration: 1.15 });
        }
        ScrollTrigger.refresh();
      }, 120);
      return () => clearTimeout(timer);
    } else {
      // Immediate reset to top on route transition
      scrollTo(0, { immediate: true });
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash, scrollTo, refresh]);

  return null;
}
