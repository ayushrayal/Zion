import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import FounderSection from '../components/home/FounderSection';
import ServicesSection from '../components/home/ServicesSection';
import EnvironmentSection from '../components/home/EnvironmentSection';
import GallerySection from '../components/home/GallerySection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import JourneySection from '../components/home/JourneySection';
import ContactSection from '../components/home/ContactSection';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Check if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Subtle scroll-reveal animations for all section wrappers
    const sections = document.querySelectorAll('.section-wrapper');
    const ctx = gsap.context(() => {
      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main id="main-content" className="zion-landing-page">
      <Hero />
      <AboutSection />
      <FounderSection />
      {/* Anchor targets for School & Therapy nav items */}
      <div id="school" style={{ scrollMarginTop: '90px' }} />
      <div id="therapy" style={{ scrollMarginTop: '90px' }} />
      <ServicesSection />
      <EnvironmentSection />
      <GallerySection />
      <TestimonialsSection />
      <JourneySection />
      <ContactSection />
    </main>
  );
}
