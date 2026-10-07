import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TherapyHero from '../components/therapy/TherapyHero';
import TherapyTeam from '../components/therapy/TherapyTeam';
import TherapyPrograms from '../components/therapy/TherapyPrograms';
import TherapyGallery from '../components/therapy/TherapyGallery';
import TherapyAssessmentForm from '../components/therapy/TherapyAssessmentForm';

gsap.registerPlugin(ScrollTrigger);

export default function Therapy() {
  const [selectedProgram, setSelectedProgram] = useState('');

  useEffect(() => {
    document.title = 'Therapy & Rehabilitation Services | ZION CARE';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.therapy-page .section-wrapper');
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
    <main id="main-content" className="therapy-page">
      {/* 1. Hero */}
      <TherapyHero />

      {/* 2. Our Team */}
      <TherapyTeam />

      {/* 3. Our Therapy Programs */}
      <TherapyPrograms onSelectProgram={(prog) => setSelectedProgram(prog)} />

      {/* 4. Our Gallery */}
      <TherapyGallery />

      {/* 5. Book an Assessment / Contact */}
      <TherapyAssessmentForm selectedProgram={selectedProgram} />
    </main>
  );
}
