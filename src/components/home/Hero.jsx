import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Tag from '../ui/Tag';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const contentRef = useRef(null);
  const tagsRef = useRef(null);
  const actionsRef = useRef(null);
  const visualRef = useRef(null);
  const counterRef = useRef(null);
  const animatedRef = useRef(false);

  const [count, setCount] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(700);
      setIsRevealed(true);
      return;
    }

    const startCounting = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;
      setIsRevealed(true);

      const counterObj = { val: 0 };
      gsap.to(counterObj, {
        val: 700,
        duration: 2.0,
        ease: 'power2.out',
        onUpdate: () => {
          setCount(Math.floor(counterObj.val));
        },
        onComplete: () => {
          setCount(700);
        }
      });
    };

    let triggerInstance = null;

    if (counterRef.current) {
      triggerInstance = ScrollTrigger.create({
        trigger: counterRef.current,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          startCounting();
        }
      });
    }

    return () => {
      if (triggerInstance) triggerInstance.kill();
    };
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(['.hero-eyebrow-chip', '.hero-contact-card'],
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }
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
            <div className="hero-top-row">
              <div className="hero-eyebrow-chip" aria-label="ZION / DEHRADUN">
                <span className="eyebrow-indicator" />
                <span className="eyebrow-brand">ZION</span>
                <span className="eyebrow-slash" aria-hidden="true">/</span>
                <span className="eyebrow-location">DEHRADUN</span>
              </div>

              <div className="hero-contact-card" aria-label="Direct Consultation Lines">
                <div className="hero-contact-caption">
                  <span className="contact-pulse-dot" />
                  <span>Direct Lines:</span>
                </div>
                <div className="hero-contact-pills">
                  <a
                    href="tel:+919286068945"
                    className="hero-contact-btn"
                    title="Call +91 92860 68945"
                  >
                    <svg className="contact-icon-phone" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>+91 92860 68945</span>
                  </a>

                  <span className="hero-contact-divider" aria-hidden="true">|</span>

                  <a
                    href="tel:+918057403683"
                    className="hero-contact-btn hero-contact-wa"
                    title="Call or WhatsApp +91 80574 03683"
                  >
                    <svg className="contact-icon-wa" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>+91 80574 03683</span>
                  </a>
                </div>
              </div>
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
                  <span className="composite-brand-title font-accent">ZION</span>
                  <p className="composite-brand-tagline">
                    Where Every Milestone Matters
                  </p>
                  <span className="composite-location-tag">Dehradun</span>
                </div>
              </div>

              {/* Colorful Visual Center Showcase with Real Photograph (Clean Presentation) */}
              <div className="hero-visual-center-plate">
                <img
                  src={websiteImages.hero.src}
                  alt={websiteImages.hero.alt}
                  className="hero-center-img"
                  style={{ objectPosition: websiteImages.hero.objectPosition }}
                />
                <div className="hero-center-overlay" />
              </div>

              {/* Animated Statistics Counter Positioned Immediately Below Photograph */}
              <div
                className={`hero-impact-counter-card ${isRevealed ? 'is-revealed' : ''}`}
                ref={counterRef}
                aria-label="700+ Families and Children Served"
              >
                <div className="impact-counter-icon-wrap" aria-hidden="true">
                  <svg className="impact-counter-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="impact-counter-body">
                  <div className="impact-counter-num-row">
                    <span className="impact-counter-digit">{count}</span>
                    <span className="impact-counter-plus">+</span>
                  </div>
                  <span className="impact-counter-label">FAMILIES &amp; CHILDREN SERVED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
