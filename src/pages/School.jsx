import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SchoolHero from '../components/school/SchoolHero';
import SchoolEnvironment from '../components/school/SchoolEnvironment';
import SchoolPrograms from '../components/school/SchoolPrograms';
import SchoolGallery from '../components/school/SchoolGallery';
import SchoolAdmissionForm from '../components/school/SchoolAdmissionForm';

gsap.registerPlugin(ScrollTrigger);

export default function School() {
  const [selectedProgram, setSelectedProgram] = useState('');

  useEffect(() => {
    document.title = 'ZION Academy: Inclusive Early Learning & Preschool | ZION Society';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.school-page .section-wrapper');
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
    <main id="main-content" className="school-page">
      {/* 1. Hero */}
      <SchoolHero />

      {/* 2. Our Team / Learning Environment */}
      <SchoolEnvironment />

      {/* 3. Our Programs */}
      <SchoolPrograms onSelectProgram={(prog) => setSelectedProgram(prog)} />

      {/* 4. Our Gallery */}
      <SchoolGallery />

      {/* 5. Admission Enquiry */}
      <SchoolAdmissionForm selectedProgram={selectedProgram} />
    </main>
  );
}
