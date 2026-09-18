import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const contentRef = useRef(null);
  const tagsRef = useRef(null);
  const actionsRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animation honoring prefers-reduced-motion
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
      <Container>
        <div className="hero-grid">
          {/* Left Column: Headline & Value Proposition */}
          <div className="hero-content">
            <div className="hero-eyebrow-chip">
              <span className="eyebrow-indicator" />
              <span>ZION Educational &amp; Rehabilitation Society</span>
            </div>

            <h1 className="hero-headline" ref={headlineRef}>
              Learning, Growing &amp; Belonging,{' '}
              <span className="hero-headline-highlight">One Milestone</span> at a Time
            </h1>

            <p className="hero-tagline-accent font-accent">
              “Where Every Milestone Matters”
            </p>

            <p className="hero-description lead" ref={contentRef}>
              Empowering Communication. Nurturing Potential. Supporting Every Journey.
              We provide ethical, evidence-informed and compassionate multidisciplinary care
              for children across early intervention, therapy, development, education, and family partnership.
            </p>

            {/* Service & Value Tags */}
            <div className="hero-tags-wrapper" ref={tagsRef}>
              <Tag variant="azure">Speech &amp; Hearing</Tag>
              <Tag variant="yellow-green">Early Intervention</Tag>
              <Tag variant="lemon-lime">Inclusive Preschool</Tag>
              <Tag variant="azure">Occupational Therapy</Tag>
              <Tag variant="outline">Family Partnership</Tag>
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
              <span className="trust-dot" />
              <span className="trust-text">
                Multidisciplinary Team • Individualised Care • Established Oct 2021
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composition with Official Emblem & Structured Focus */}
          <div className="hero-visual-column" ref={visualRef}>
            <div className="hero-card-composite">
              <div className="composite-accent-glow" />
              <div className="composite-badge">
                <img
                  src="/zionlogo.PNG"
                  alt="ZION Emblem"
                  className="composite-logo-img"
                />
                <div className="composite-badge-info">
                  <span className="badge-tagline font-accent">Every Child Deserves to Be Heard</span>
                  <span className="badge-sub">Non-Profit Society • Dehradun</span>
                </div>
              </div>

              {/* Visual Showcase Card */}
              <div className="hero-media-frame">
                <div className="media-placeholder-geometric">
                  <div className="geom-circle" />
                  <div className="geom-badge-mountain">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                    </svg>
                  </div>
                  <div className="geom-text-box">
                    <span className="geom-title">A Connected Ecosystem</span>
                    <span className="geom-desc">Therapy • Early Intervention • Inclusive Education</span>
                  </div>
                </div>

                <div className="floating-metric-card">
                  <div className="metric-pill">Active Ecosystem</div>
                  <div className="metric-text">
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
