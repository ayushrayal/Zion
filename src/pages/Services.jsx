import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import InclusionSection from '../components/services/InclusionSection';
import OurServicesSection from '../components/services/OurServicesSection';
import WhyChooseSection from '../components/services/WhyChooseSection';
import TermsPoliciesSection from '../components/services/TermsPoliciesSection';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    document.title = 'Services, Inclusion & Policies | ZION Care';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.services-page .section-wrapper');
    const ctx = gsap.context(() => {
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 88%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content" className="services-page">
      {/* 1. INCLUSION BEYOND OUR WALLS */}
      <InclusionSection />

      {/* 2. OUR SERVICES */}
      <OurServicesSection />

      {/* 3. WHY CHOOSE ZION? */}
      <WhyChooseSection />

      {/* 4. TERMS & POLICIES */}
      <TermsPoliciesSection />
    </main>
  );
}
