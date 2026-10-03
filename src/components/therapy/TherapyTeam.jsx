import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './TherapyTeam.css';

export default function TherapyTeam() {
  const verifiedFounder = {
    name: 'Anjali Subramanium',
    role: 'Founder & Clinical Director | ZION',
    specialties: [
      'Speech-Language Pathologist & Audiologist',
      'Behavioral Therapist (RBT)',
      '9+ Years Clinical Experience in Paediatric Care',
      'Specialised in Autism Intervention & Sensory Integration'
    ],
    quote: 'Development is interconnected. When we bring speech, movement, behaviour, and family support together, children gain real confidence in daily life.'
  };

  const clinicalRoles = [
    {
      title: 'Speech-Language Pathologist & Audiologist',
      focus: 'Communication & Hearing',
      color: 'azure',
      desc: 'Specialising in speech clarity, receptive & expressive language, auditory training, fluency, and augmentative & alternative communication (AAC).',
      badge: 'Verified Role'
    },
    {
      title: 'Occupational Therapist & Sensory Specialist',
      focus: 'Sensory & Motor Function',
      color: 'green',
      desc: 'Focusing on sensory modulation, fine & gross motor coordination, visual-motor skills, bilateral integration, and daily living independence.',
      badge: 'Verified Role'
    },
    {
      title: 'Behavior Therapist (RBT) & Special Educator',
      focus: 'Behaviour Support & Learning',
      color: 'lime',
      desc: 'Delivering positive, ABA-informed behaviour interventions, emotional regulation techniques, routine structure, and functional replacement skills.',
      badge: 'Verified Role'
    },
    {
      title: 'Family Guidance & Early Intervention Specialist',
      focus: 'Collaborative Care',
      color: 'azure',
      desc: 'Coordinating milestone evaluations, caregiver coaching, home routine carryover, and active family partnership across all developmental stages.',
      badge: 'Verified Role'
    }
  ];

  return (
    <SectionWrapper id="therapy-team" background="white" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -40, right: -40, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -30, left: -40, opacity: 0.2 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, left: '6%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(137, 203, 50, 0.4)" style={{ bottom: 30, right: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Clinical Collaboration"
          title="OUR MULTIDISCIPLINARY TEAM"
          tagline="Qualified Specialists Collaborating Under One Roof"
          description="At ZION, child development is addressed holistically. Rather than working in isolation, our clinical professionals coordinate closely to provide unified care tailored to your child's world."
          align="center"
        />

        <div className="therapy-team-grid">
          {/* Left Column: Verified Clinical Leadership & Model */}
          <div className="team-leader-card hover-lift">
            <div className="leader-visual-row">
              <div className="leader-avatar-wrapper">
                <ImagePlaceholder
                  aspectRatio="1/1"
                  label="Anjali Subramanium"
                  sublabel="Clinical Director"
                  badge="Director"
                  theme="azure"
                />
              </div>

              <div className="leader-meta">
                <div className="leader-badge-pill">
                  <span className="leader-dot" />
                  <span>Verified Clinical Leadership</span>
                </div>
                <h3 className="leader-name">{verifiedFounder.name}</h3>
                <p className="leader-role-label font-accent">{verifiedFounder.role}</p>
                <div className="leader-experience-tag">
                  <span>★ 9+ Years Paediatric Practice</span>
                </div>
              </div>
            </div>

            <blockquote className="leader-quote-box">
              <span className="quote-glyph font-accent">“</span>
              <p className="quote-text font-accent">{verifiedFounder.quote}</p>
            </blockquote>

            <div className="leader-specialties-list">
              <h5 className="specialties-title">Core Clinical Qualifications</h5>
              <ul>
                {verifiedFounder.specialties.map((spec, i) => (
                  <li key={i} className="specialty-item">
                    <span className="specialty-check">✓</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Multidisciplinary Care Model & Verified Disciplines */}
          <div className="team-disciplines-col">
            <div className="disciplines-header-card">
              <span className="disciplines-badge font-accent">The ZION Multidisciplinary Model</span>
              <h4 className="disciplines-title">Unified Support for Every Milestone</h4>
              <p className="disciplines-desc">
                Every child who enters ZION is evaluated through a collaborative lens. Our team meets regularly to share observations, review progress notes, and adjust intervention plans in unison with parents.
              </p>
            </div>

            <div className="disciplines-cards-grid">
              {clinicalRoles.map((role, idx) => (
                <div key={idx} className={`discipline-card card-accent-${role.color} hover-lift`}>
                  <div className="discipline-card-top">
                    <span className={`discipline-focus-chip chip-${role.color}`}>{role.focus}</span>
                    <span className="discipline-verified-badge">{role.badge}</span>
                  </div>
                  <h5 className="discipline-role-title">{role.title}</h5>
                  <p className="discipline-role-desc">{role.desc}</p>
                </div>
              ))}
            </div>

            <div className="clinical-ethics-notice">
              <span className="notice-icon">🛡️</span>
              <p className="notice-text">
                <strong>Professional Standard:</strong> All clinical therapy sessions at ZION are conducted by qualified professionals adhering to established ethical guidelines, evidenced-based methodologies, and family-centred rehabilitation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
