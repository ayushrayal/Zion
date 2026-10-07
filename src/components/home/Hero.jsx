import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
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
      {/* Playful Floating Shapes, Stars & Dots */}
      <BrandShape type="blob-lime" size="xl" className="hero-blob-lime animate-float" />
      <BrandShape type="blob-green" size="lg" className="hero-blob-green animate-float-delayed" />
      <BrandShape type="blob-azure" size="lg" className="hero-blob-azure animate-float" />
      <BrandShape type="star" className="hero-star-1 animate-spin-slow" style={{ top: 70, left: '42%' }} />
      <BrandShape type="star" className="hero-star-2 animate-spin-slow" color="var(--color-yellow-green)" style={{ bottom: 90, left: '6%' }} />
      <BrandShape type="sparkle" className="hero-sparkle-1 animate-float" style={{ top: 120, right: '8%' }} />
      <BrandShape type="sparkle" className="hero-sparkle-2 animate-float-delayed" color="var(--color-royal-azure)" style={{ bottom: 140, right: '45%' }} />
      <BrandShape type="dots" className="hero-dots-pattern" color="var(--color-yellow-green)" />
      <BrandShape type="wave" className="hero-wave-doodle" style={{ top: 20, right: '28%' }} />
      <BrandShape type="circle-ring" className="hero-ring-1 animate-float" />

      <Container>
        <div className="hero-grid">
          {/* Left Column: Headline & Child-Friendly Messaging */}
          <div className="hero-content">
            <div className="hero-eyebrow-chip">
              <span className="eyebrow-indicator" />
              <span className="eyebrow-text">ZION CARE</span>
              <span className="eyebrow-badge-pill">Dehradun</span>
            </div>

            <h1 className="hero-headline" ref={headlineRef}>
              Learning, Growing &amp; Belonging,{' '}
              <span className="hero-headline-highlight">
                One Milestone
                <svg className="headline-underline-svg" viewBox="0 0 280 18" fill="none" aria-hidden="true">
                  <path d="M4 14 Q 70 2, 140 10 T 276 9" stroke="var(--color-yellow-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span> at a Time
            </h1>

            <div className="hero-tagline-wrap">
              <span className="hero-tagline-star">★</span>
              <p className="hero-tagline-accent font-accent">
                “Where Every Milestone Matters”
              </p>
              <span className="hero-tagline-star">★</span>
            </div>

            <p className="hero-description lead" ref={contentRef}>
              Empowering Communication. Nurturing Potential. Supporting Every Journey.
              We provide ethical, evidence-informed and compassionate multidisciplinary care
              bringing therapy, early intervention, inclusive early preschool education, and family partnership together under one roof.
            </p>

            {/* Child-Friendly Multi-Tone Service Pills */}
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
              <span className="trust-pill font-accent">Safe &amp; Inclusive</span>
              <span className="trust-text">
                Multidisciplinary Clinical Care • Inclusive Early Learning
              </span>
            </div>
          </div>

          {/* Right Column: Colorful, High-Energy Visual Composition */}
          <div className="hero-visual-column" ref={visualRef}>
            <div className="hero-card-composite">
              {/* Playful Layered Under-Badges */}
              <div className="composite-layer-lime" />
              <div className="composite-layer-green" />

              {/* Top Emblem Bar */}
              <div className="composite-header-card">
                <div className="composite-logo-wrap">
                  <img
                    src="/zionlogo.PNG"
                    alt="ZION Official Emblem"
                    className="composite-logo-img"
                  />
                  <div className="composite-logo-ring" />
                </div>
                <div className="composite-header-text">
                  <span className="composite-brand-title font-accent">ZION CARE</span>
                  <p className="composite-brand-tagline">
                    Every Child Deserves to Be Heard
                  </p>
                  <span className="composite-location-tag">Main Branch • Dehradun</span>
                </div>
              </div>

              {/* Colorful Visual Center Showcase with Real Photograph */}
              <div className="hero-visual-center-plate">
                <img
                  src={websiteImages.hero.src}
                  alt={websiteImages.hero.alt}
                  className="hero-center-img"
                  style={{ objectPosition: websiteImages.hero.objectPosition }}
                />
                <div className="hero-center-overlay" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
