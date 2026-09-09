import React, { useRef, useEffect } from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { initScrollAnimation } from '../../animations/gsap';
import heroImg from '../../assets/images/hero-children.jpg';
import './Hero.css';

const tags = [
  'Early Childhood Education',
  'Early Intervention',
  'Autism & Neurodiversity Support',
  'Sensory Therapy'
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(heroRef, (gsap) => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo('.hero-tag-badge', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-pill-item', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.08 }, '-=0.3')
        .fromTo('.hero-actions', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-editorial-frame', { opacity: 0, scale: 0.97 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.6');
    });

    return () => cleanup();
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      <div className="hero-container container">
        {/* Left Column: Editorial Content */}
        <div className="hero-content">
          <div className="hero-tag-badge">
            <span className="badge-dot"></span>
            <span>Ajabpur, Dehradun • Uttarakhand</span>
          </div>

          <h1 className="hero-title">
            Where Every <span className="text-highlight-terracotta font-display">Milestone</span> Matters.
          </h1>

          <p className="hero-description">
            ZION Educational & Rehabilitation Society is dedicated to supporting children and families through education, early intervention, child development, rehabilitation, and inclusive learning opportunities.
          </p>

          {/* Service Highlight Pills */}
          <div className="hero-pills">
            {tags.map((tag) => (
              <span key={tag} className="hero-pill-item">
                <FiCheckCircle aria-hidden="true" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              <span>Contact Us</span>
              <FiArrowRight aria-hidden="true" />
            </a>
            <a href="#services" className="btn-secondary">
              <span>Learn About ZION</span>
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Image Composition */}
        <div className="hero-visual">
          <div className="hero-editorial-frame">
            <div className="frame-backdrop"></div>
            <img 
              src={heroImg} 
              alt="Children engaging in learning and sensory activities with a specialist at ZION" 
              className="hero-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
