import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import BrandShape from '../ui/BrandShape';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { websiteImages } from '../../data/websiteImages';
import './SchoolHero.css';

export default function SchoolHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.school-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.school-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo('.school-tagline-wrap',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo('.school-lead',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo('.school-tags-wrapper > *',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.45 },
        '-=0.3'
      )
      .fromTo('.school-actions > *',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo('.school-hero-visual',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAdmission = (e) => {
    e.preventDefault();
    const el = document.getElementById('admission-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = (e) => {
    e.preventDefault();
    const el = document.getElementById('school-programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="school-hero" ref={heroRef}>
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-lime" size="xl" className="s-shape-blob-lime animate-float" />
      <BrandShape type="blob-green" size="lg" className="s-shape-blob-green animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 60, left: '48%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(213, 225, 81, 0.4)" style={{ bottom: 50, right: '6%' }} />
      <BrandShape type="sparkle" color="var(--color-yellow-green)" style={{ top: 80, right: '5%' }} />
      <BrandShape type="circle-ring" style={{ bottom: 90, left: '5%' }} className="animate-float" />

      <Container>
        <div className="school-hero-grid">
          {/* Left Column: Headline & Early Learning Messaging */}
          <div className="school-hero-text">
            <div className="school-eyebrow">
              <span className="school-pill-dot" />
              <span className="school-eyebrow-label">ZION Academy • Inclusive Early Learning &amp; Preschool</span>
              <span className="school-badge-year">2026 Ecosystem</span>
            </div>

            <h1 className="school-headline">
              Everyday Learning, Inclusive Play &amp;{' '}
              <span className="headline-school-accent">
                a Brighter Beginning
                <svg className="school-underline-svg" viewBox="0 0 320 18" fill="none" aria-hidden="true">
                  <path d="M4 14 Q 80 2, 160 10 T 316 9" stroke="var(--color-royal-azure)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="school-tagline-wrap">
              <span className="s-star">★</span>
              <p className="school-tagline font-accent">
                “A Place Where Every Child Belongs and Learns with Joy”
              </p>
              <span className="s-star">★</span>
            </div>

            <p className="school-lead lead">
              At ZION Academy, we believe every child belongs. Our inclusive early learning preschool
              brings children of diverse abilities together in a joyful, sensory-thoughtful environment.
              Through play-based discovery, structured routines, and warm educator guidance, children build
              foundational social confidence, school readiness, and authentic peer friendships.
            </p>

            {/* Child-Friendly Preschool Tags */}
            <div className="school-tags-wrapper">
              <Tag variant="lemon-lime" icon="🎨">Inclusive Preschool</Tag>
              <Tag variant="yellow-green" icon="🌱">Early Learning</Tag>
              <Tag variant="azure" icon="🎒">School Readiness</Tag>
              <Tag variant="blue-green" icon="🧩">Play-Based Curriculum</Tag>
              <Tag variant="lime-green" icon="🤝">Social Communication</Tag>
              <Tag variant="lemon-lime" icon="💛">Zero Exclusion</Tag>
            </div>

            {/* Action CTAs */}
            <div className="school-actions">
              <Button
                href="#admission-form"
                onClick={scrollToAdmission}
                variant="primary"
                size="lg"
              >
                Enquire About Admission
              </Button>
              <Button
                href="#school-programs"
                onClick={scrollToPrograms}
                variant="secondary"
                size="lg"
              >
                Explore Our Programs
              </Button>
            </div>

            <div className="school-trust-pill">
              <span className="trust-leaf">🌱</span>
              <span className="school-trust-text font-accent">
                Inclusive Community • Sensory-Friendly Classrooms • Collaborative Care
              </span>
            </div>
          </div>

          {/* Right Column: Classroom & Early Learning Visual Area */}
          <div className="school-hero-visual">
            <div className="school-visual-card-wrap">
              {/* Decorative Asymmetric Shapes strictly in 5 colors */}
              <div className="school-bg-shape-azure" />
              <div className="school-bg-shape-lime" />

              <div className="school-main-visual hover-lift">
                <ImagePlaceholder
                  src={websiteImages.school?.[0]?.src}
                  alt={websiteImages.school?.[0]?.alt}
                  objectPosition={websiteImages.school?.[0]?.objectPosition}
                  aspectRatio="4/3"
                  label="ZION Academy Inclusive Classroom"
                  sublabel="Early Learning &amp; Preschool Community in Dehradun"
                  badge="Inclusive Preschool"
                  theme="lime"
                />

                <div className="school-visual-footer">
                  <div className="school-stat-col">
                    <span className="stat-highlight font-accent">“Zero Exclusion”</span>
                    <span className="stat-sub">Learning Alongside Peers</span>
                  </div>
                  <div className="school-badge-heart">
                    <span className="heart-icon">💛</span>
                    <span>Early Childhood</span>
                  </div>
                </div>
              </div>

              {/* Cheerful Floating Floating Card */}
              <div className="school-floating-callout hover-lift">
                <div className="callout-sun-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                  </svg>
                </div>
                <div>
                  <strong className="callout-strong">Preschool &amp; Transition</strong>
                  <span className="callout-text font-accent">Where Learning Begins With Joy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
