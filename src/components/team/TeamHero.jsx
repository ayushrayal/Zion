import React from 'react';
import Container from '../layout/Container';
import BrandShape from '../ui/BrandShape';
import './TeamHero.css';

export default function TeamHero() {
  const scrollToDirectory = (e) => {
    e.preventDefault();
    const directory = document.getElementById('team-directory');
    if (directory) {
      directory.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGroups = (e) => {
    e.preventDefault();
    const groups = document.getElementById('team-groups');
    if (groups) {
      groups.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="team-hero-section section-wrapper" aria-labelledby="team-hero-heading">
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-azure" size="lg" style={{ top: -80, right: -60, opacity: 0.15 }} />
      <BrandShape type="blob-lime" size="md" style={{ bottom: 20, left: -40, opacity: 0.2 }} />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: '15%', left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.25)" style={{ bottom: 30, right: '10%' }} />

      <Container className="team-hero-container">
        <div className="team-hero-content">
          {/* Centered Section Label */}
          <div className="team-hero-label-badge">
            <span className="team-hero-label-dot" />
            <span className="team-hero-label-text">OUR TEAM</span>
          </div>

          {/* Prominent Heading */}
          <h1 id="team-hero-heading" className="team-hero-title">
            Meet the People Behind <span className="title-highlight">ZION</span>
          </h1>

          {/* Compassionate Multidisciplinary Intro */}
          <p className="team-hero-lead">
            At ZION Educational &amp; Rehabilitation Society, our multidisciplinary team of licensed
            speech-language pathologists, audiologists, pediatric neurodevelopmental therapists,
            physiotherapists, special educators, and caring administrators works in unified synergy.
            Every clinical intervention, individualized curriculum, and daily breakthrough is delivered
            with scientific rigor, deep empathy, and boundless heart.
          </p>

          {/* Key Quick Stats & Credentials */}
          <div className="team-hero-pills">
            <div className="hero-pill pill-azure">
              <span className="pill-dot dot-azure" />
              <span className="pill-strong">17+ Specialists</span>
              <span className="pill-desc">Therapists, Educators &amp; Support</span>
            </div>
            <div className="hero-pill pill-green">
              <span className="pill-dot dot-green" />
              <span className="pill-strong">Multidisciplinary</span>
              <span className="pill-desc">Holistic Child-Centred Care</span>
            </div>
            <div className="hero-pill pill-lime">
              <span className="pill-dot dot-lime" />
              <span className="pill-strong">Unified Vision</span>
              <span className="pill-desc">Empowering Every Milestone</span>
            </div>
          </div>

          {/* Action Anchors */}
          <div className="team-hero-actions">
            <a href="#team-directory" onClick={scrollToDirectory} className="team-hero-btn btn-primary-azure">
              Explore Team Members
            </a>
            <a href="#team-groups" onClick={scrollToGroups} className="team-hero-btn btn-outline-brand">
              View Department Teams
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
