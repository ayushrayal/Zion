import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import BrandShape from '../ui/BrandShape';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import { websiteImages } from '../../data/websiteImages';
import './TherapyHero.css';

export default function TherapyHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.therapy-eyebrow',
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.therapy-headline',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.3'
      )
      .fromTo('.therapy-tagline-wrap',
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo('.therapy-lead',
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.3'
      )
      .fromTo('.therapy-tags-wrapper > *',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.45 },
        '-=0.3'
      )
      .fromTo('.therapy-actions > *',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
        '-=0.2'
      )
      .fromTo('.therapy-visual-frame',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAssessment = (e) => {
    e.preventDefault();
    const el = document.getElementById('assessment-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = (e) => {
    e.preventDefault();
    const el = document.getElementById('therapy-programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="therapy-hero" ref={heroRef}>
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-azure" size="xl" className="t-shape-blob-azure animate-float" />
      <BrandShape type="blob-lime" size="lg" className="t-shape-blob-lime animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 70, left: '46%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.25)" style={{ bottom: 40, left: '4%' }} />
      <BrandShape type="sparkle" color="var(--color-royal-azure)" style={{ top: 90, right: '6%' }} />
      <BrandShape type="circle-ring" style={{ bottom: 80, right: '40%' }} className="animate-float" />

      <Container>
        <div className="therapy-hero-grid">
          {/* Left Column: Heading, Supporting text, Tags, Actions */}
          <div className="therapy-hero-text">
            <div className="therapy-eyebrow">
              <span className="eyebrow-pill-dot" />
              <span className="eyebrow-label">ZION Multidisciplinary Rehabilitation &amp; Clinical Care</span>
              <span className="eyebrow-tag">Dehradun</span>
            </div>

            <h1 className="therapy-headline">
              Nurturing Potential Through{' '}
              <span className="headline-therapy-accent">
                Compassionate Therapy
                <svg className="therapy-underline-svg" viewBox="0 0 320 18" fill="none" aria-hidden="true">
                  <path d="M4 14 Q 80 2, 160 10 T 316 9" stroke="var(--color-yellow-green)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <div className="therapy-tagline-wrap">
              <span className="t-star">★</span>
              <p className="therapy-tagline font-accent">
                “Helping Every Child Communicate, Move, and Flourish”
              </p>
              <span className="t-star">★</span>
            </div>

            <p className="therapy-lead lead">
              At ZION, our qualified multidisciplinary clinical team provides individualised,
              evidence-informed speech-language therapy, occupational therapy, audiology support,
              and positive behaviour intervention. We partner closely with families to help children
              reach their unique developmental milestones in everyday life.
            </p>

            {/* Child-Friendly Clinical Tags */}
            <div className="therapy-tags-wrapper">
              <Tag variant="azure" icon="💬">Speech &amp; Language</Tag>
              <Tag variant="yellow-green" icon="🧩">Occupational Therapy</Tag>
              <Tag variant="lemon-lime" icon="🌟">Sensory Integration</Tag>
              <Tag variant="blue-green" icon="👂">Audiology Support</Tag>
              <Tag variant="lime-green" icon="🌱">Early Intervention</Tag>
              <Tag variant="azure" icon="🤝">Behaviour Support</Tag>
            </div>

            {/* Hero CTAs */}
            <div className="therapy-actions">
              <Button
                href="#assessment-form"
                onClick={scrollToAssessment}
                variant="primary"
                size="lg"
              >
                Book an Assessment
              </Button>
              <Button
                href="#therapy-programs"
                onClick={scrollToPrograms}
                variant="secondary"
                size="lg"
              >
                Explore Our Therapies
              </Button>
            </div>

            <div className="therapy-trust-pill">
              <span className="trust-dot" />
              <span className="trust-text font-accent">
                Multidisciplinary Team • Individualised Goals • Family Partnership
              </span>
            </div>
          </div>

          {/* Right Column: Genuine Therapy Visual Area */}
          <div className="therapy-hero-visual">
            <div className="therapy-visual-frame">
              {/* Layered Organic Frames */}
              <div className="visual-organic-lime" />
              <div className="visual-organic-green" />

              <div className="therapy-visual-card hover-lift">
                <ImagePlaceholder
                  src={websiteImages.therapy?.[0]?.src}
                  alt={websiteImages.therapy?.[0]?.alt}
                  objectPosition={websiteImages.therapy?.[0]?.objectPosition}
                  aspectRatio="4/3"
                  label="Multidisciplinary Therapy Clinic"
                  sublabel="Speech, Sensory &amp; Motor Clinical Suites in Dehradun"
                  badge="Clinical Excellence"
                  theme="azure"
                />

                <div className="therapy-visual-card-footer">
                  <div className="visual-stat-pill">
                    <span className="stat-indicator" />
                    <strong>Evidence-Informed</strong>
                    <span>Child-Centred Assessment</span>
                  </div>
                  <div className="visual-badge-leaf">
                    <span className="leaf-symbol">🌿</span>
                    <span>Holistic Care</span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="therapy-floating-badge hover-lift">
                <div className="badge-icon-wrap">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <div>
                  <strong className="badge-title">Where Every Milestone Matters</strong>
                  <span className="badge-subtitle">Founded 7th October 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
