import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EnvironmentSection from '../components/home/EnvironmentSection';
import GallerySection from '../components/home/GallerySection';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  useEffect(() => {
    document.title = 'Our Environment & Gallery | ZION';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.gallery-page .section-wrapper');
    const ctx = gsap.context(() => {
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 86%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content" className="gallery-page">
      {/* 1. Existing Purpose-Built Facilities & Environment */}
      <EnvironmentSection />

      {/* 2. Existing Main Gallery Visual Showcase */}
      <GallerySection />
    </main>
  );
}
