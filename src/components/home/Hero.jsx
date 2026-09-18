import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import BrandShape from '../ui/BrandShape';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const contentRef = useRef(null);
  const tagsRef = useRef(null);
  const actionsRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.hero-eyebrow-chip',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo('.hero-tagline-accent',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo(tagsRef.current?.children || [],
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(actionsRef.current?.children || [],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo(visualRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.9 },
        '-=0.6'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="zion-hero" ref={heroRef}>
      {/* Decorative Organic Shapes in Brand Palette */}
      <BrandShape type="blob-azure" size="lg" className="hero-blob-azure animate-float" />
      <BrandShape type="blob-green" size="md" className="hero-blob-green animate-float-delayed" />
      <BrandShape type="blob-lime" size="lg" className="hero-blob-lime animate-float" />
      <BrandShape type="dots" className="hero-dots-pattern" />
      <BrandShape type="circle-ring" className="hero-ring-1 animate-float" />
      <BrandShape type="circle-ring" className="hero-ring-2 animate-float-delayed" />

      <Container>
        <div className="hero-grid">
          {/* Left Column: Headline, Tagline, Body & Colorful Service Pills */}
          <div className="hero-content">
            <div className="hero-eyebrow-chip">
              <span className="eyebrow-indicator" />
              <span className="eyebrow-text">ZION Educational &amp; Rehabilitation Society</span>
              <span className="eyebrow-city">Dehradun</span>
            </div>

            <h1 className="hero-headline" ref={headlineRef}>
              Learning, Growing &amp; Belonging,{' '}
              <span className="hero-headline-highlight">
                One Milestone
                <svg className="headline-underline-svg" viewBox="0 0 260 16" fill="none" aria-hidden="true">
                  <path d="M2 12 Q 65 3, 130 9 T 258 8" stroke="var(--color-yellow-green)" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span> at a Time
            </h1>

            <p className="hero-tagline-accent font-accent">
              “Where Every Milestone Matters”
            </p>

            <p className="hero-description lead" ref={contentRef}>
              Empowering Communication. Nurturing Potential. Supporting Every Journey.
              We provide ethical, evidence-informed, and compassionate multidisciplinary care
              bringing therapy, early intervention, inclusive early education, and family partnership together.
            </p>

            {/* Service & Value Tags with Intentional Color Variations */}
            <div className="hero-tags-wrapper" ref={tagsRef}>
              <Tag variant="azure" icon="💬">Speech &amp; Hearing</Tag>
              <Tag variant="yellow-green" icon="🌱">Early Intervention</Tag>
              <Tag variant="lemon-lime" icon="🎨">Inclusive Preschool</Tag>
              <Tag variant="blue-green" icon="🧩">Occupational Therapy</Tag>
              <Tag variant="lime-green" icon="🤝">Family Partnership</Tag>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions" ref={actionsRef}>
              <Button href="#contact" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="#about" variant="secondary" size="lg">
                Explore ZION
              </Button>
            </div>

            <div className="hero-trust-indicator">
              <span className="trust-pill font-accent">Compassionate Care</span>
              <span className="trust-text">
                Speech Therapy • Audiology • Occupational Therapy • ZION Academy
              </span>
            </div>
          </div>

          {/* Right Column: Colorful, Warm Visual Composition */}
          <div className="hero-visual-column" ref={visualRef}>
            <div className="hero-card-composite">
              {/* Colorful Multi-Layered Backdrops */}
              <div className="composite-backdrop-lime" />
              <div className="composite-backdrop-azure" />

              {/* Main Visual Emblem Header */}
              <div className="composite-header-card">
                <div className="composite-logo-wrap">
                  <img
                    src="/zionlogo.PNG"
                    alt="ZION Official Emblem"
                    className="composite-logo-img"
                  />
                  <div className="composite-logo-pulse" />
                </div>
                <div className="composite-header-text">
                  <span className="composite-brand-title">ZION ECOSYSTEM</span>
                  <p className="composite-brand-tagline font-accent">
                    Every Child Deserves to Be Heard
                  </p>
                  <span className="composite-location-tag">Registered Society • Ajabpur, Dehradun</span>
                </div>
              </div>

              {/* Colorful Visual Center Showcase */}
              <div className="hero-visual-center-plate">
                <div className="center-plate-mesh">
                  <div className="mesh-circle-green" />
                  <div className="mesh-circle-lime" />
                  <div className="mesh-circle-blue" />
                </div>

                <div className="center-plate-content">
                  <div className="plate-mountain-badge">
                    <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <h4 className="plate-title">Where Every Milestone Matters</h4>
                  <p className="plate-sub">
                    Multidisciplinary Therapy &amp; Inclusive Early Learning
                  </p>

                  <div className="plate-pillars-mini">
                    <span className="pillar-chip chip-green">Intervention</span>
                    <span className="pillar-chip chip-lime">Preschool</span>
                    <span className="pillar-chip chip-blue">Rehabilitation</span>
                  </div>
                </div>

                {/* Floating Highlight Card */}
                <div className="floating-highlight-card">
                  <div className="highlight-pill">Established April 2026</div>
                  <div className="highlight-body">
                    <strong>ZION Academy</strong>
                    <span>Inclusive Early Learning &amp; Preschool</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
