import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

import TeamHero from '../components/team/TeamHero';
import TeamDirectory from '../components/team/TeamDirectory';
import TeamGroupsShowcase from '../components/team/TeamGroupsShowcase';
import Container from '../components/layout/Container';
import BrandShape from '../components/ui/BrandShape';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  useEffect(() => {
    document.title = 'Meet Our Team: Specialists, Therapists & Educators | ZION Society';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const sections = document.querySelectorAll('.team-page .section-wrapper');
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
    <main id="main-content" className="team-page">
      {/* 1. Hero Section */}
      <TeamHero />

      {/* 2. Full Specialists Directory */}
      <TeamDirectory />

      {/* 3. Department Units Showcase (All Group Photos) */}
      <TeamGroupsShowcase />

      {/* 4. Consultation & Society Connect Banner */}
      <section className="team-cta-section section-wrapper" aria-labelledby="team-cta-heading">
        <BrandShape type="blob-azure" size="lg" style={{ top: -50, right: -40, opacity: 0.15 }} />
        <BrandShape type="blob-lime" size="md" style={{ bottom: -30, left: -30, opacity: 0.2 }} />
        <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 20, left: '12%' }} className="animate-spin-slow" />

        <Container className="team-cta-container">
          <div className="team-cta-card">
            <div className="team-cta-label-badge">
              <span className="cta-dot" />
              <span>CONSULT OUR SPECIALISTS</span>
            </div>
            <h2 id="team-cta-heading" className="team-cta-title">
              Ready to Discuss Your Child's Unique Developmental Journey?
            </h2>
            <p className="team-cta-lead">
              Our multidisciplinary team is here to listen, assess, and design an individualized intervention or learning roadmap tailored to your child’s unique pace and abilities.
            </p>
            <div className="team-cta-buttons">
              <a href="/#contact" className="cta-btn cta-btn-primary">
                Book a Consultation
              </a>
              <Link to="/therapy" className="cta-btn cta-btn-secondary">
                Explore Therapy Programs
              </Link>
              <Link to="/school" className="cta-btn cta-btn-outline">
                Visit ZION Academy
              </Link>
            </div>
            <div className="team-cta-meta-info">
              <span>📍 47, Ekta Colony, Ajabpur, Dehradun</span>
              <span>📞 +91 92860 68945 / +91 78957 76366</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
