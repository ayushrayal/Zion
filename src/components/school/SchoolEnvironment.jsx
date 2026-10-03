import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './SchoolEnvironment.css';

export default function SchoolEnvironment() {
  const environmentFeatures = [
    {
      title: 'Inclusive Classroom Community',
      subtitle: 'Where Every Child Truly Belongs',
      desc: 'Classrooms designed for diverse abilities to interact, collaborate, and build spontaneous friendships alongside neurotypical peers.',
      icon: '🤝',
      color: 'azure'
    },
    {
      title: 'Sensory-Conscious Learning Spaces',
      subtitle: 'Regulation & Comfort First',
      desc: 'Quiet corners, adaptable seating, and tactile zones that prevent sensory overwhelm while promoting active, focused engagement.',
      icon: '🌟',
      color: 'lime'
    },
    {
      title: 'Multidisciplinary Educator Model',
      subtitle: 'Therapist & Teacher Collaboration',
      desc: 'Our educators work side-by-side with speech, occupational, and behaviour specialists to adapt daily activities for individual growth.',
      icon: '🌱',
      color: 'green'
    },
    {
      title: 'Play-Based Foundation Curriculum',
      subtitle: 'Joyful Childhood Milestones',
      desc: 'Learning through storytelling, creative arts, music, numbers, and guided inquiry tailored to each child’s developmental stage.',
      icon: '🎨',
      color: 'azure'
    }
  ];

  return (
    <SectionWrapper id="school-environment" background="white" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -50, right: -40, opacity: 0.3 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -30, left: -40, opacity: 0.25 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, left: '6%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(213, 225, 81, 0.45)" style={{ bottom: 30, right: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Preschool Learning Spaces"
          title="OUR LEARNING ENVIRONMENT & TEAM"
          tagline="A Nurturing Community Designed for Every Child"
          description="Early childhood is where curiosity, empathy, and self-worth take root. Our school environment and early childhood educators provide a safe, joyful foundation where children of all abilities thrive together."
          align="center"
        />

        <div className="school-environment-grid">
          {/* Left Column: Large Image Area with Rich Overlay */}
          <div className="env-visual-col">
            <div className="env-visual-wrapper hover-lift">
              <div className="env-organic-border" />
              <ImagePlaceholder
                aspectRatio="16/11"
                label="Inclusive Preschool Classroom"
                sublabel="Storytelling, Sensory Exploration & Circle Time in Dehradun"
                badge="Preschool Environment"
                theme="green"
              />

              <div className="env-visual-callout-card">
                <div className="callout-pill-tag">
                  <span className="pill-dot-green" />
                  <span className="font-accent">Zero Exclusion Philosophy</span>
                </div>
                <h4 className="callout-heading">A Natural Environment for Growing Together</h4>
                <p className="callout-sub">
                  When children learn in inclusive spaces early in life, empathy, patience, and mutual respect become second nature.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Approach & Features */}
          <div className="env-content-col">
            <div className="env-intro-banner">
              <span className="banner-badge font-accent">The ZION Academy Approach</span>
              <h3 className="banner-title">Individualized Attention in a Warm Group Setting</h3>
              <p className="banner-lead">
                Every child progresses at their own developmental rhythm. Our educators and rehabilitation therapists collaborate daily, ensuring that instruction, seating, communication tools, and social routines support each student's unique needs.
              </p>
            </div>

            <div className="env-features-grid">
              {environmentFeatures.map((feat, idx) => (
                <div key={idx} className={`env-feature-card feature-border-${feat.color} hover-lift`}>
                  <div className="feature-icon-row">
                    <span className="feat-emoji">{feat.icon}</span>
                    <span className={`feat-color-pill pill-${feat.color}`}>{feat.title}</span>
                  </div>
                  <h5 className="feat-sub font-accent">{feat.subtitle}</h5>
                  <p className="feat-desc">{feat.desc}</p>
                </div>
              ))}
            </div>

            <div className="env-values-strip">
              <span className="strip-star">★</span>
              <span className="strip-text">
                <strong>ZION Promise:</strong> To meet every child where they are, understand where they need to go, and celebrate every milestone along the way.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
