import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import Button from '../ui/Button';
import './TherapyPrograms.css';

export default function TherapyPrograms({ onSelectProgram }) {
  const programs = [
    {
      id: 'speech-language',
      title: 'Speech & Language Therapy',
      category: 'Communication',
      badgeColor: 'azure',
      themeClass: 'card-theme-azure',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      ),
      description: 'Individualised clinical evaluation and speech therapy designed to build clear articulation, functional vocabulary, fluency, and expressive language confidence.',
      items: [
        'Comprehensive Speech & Language Evaluations',
        'Articulation & Speech Sound Disorders',
        'Expressive & Receptive Language Delay',
        'Augmentative & Alternative Communication (AAC)'
      ]
    },
    {
      id: 'hearing-audiology',
      title: 'Hearing & Audiology Support',
      category: 'Auditory Care',
      badgeColor: 'green',
      themeClass: 'card-theme-green',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>
        </svg>
      ),
      description: 'Pediatric audiology screening guidance, auditory-verbal therapy, and listening habilitation empowering children with hearing differences to develop spoken language.',
      items: [
        'Auditory Screening & Pediatric Hearing Guidance',
        'Auditory-Verbal Therapy (AVT) Techniques',
        'Listening Skills & Sound Discrimination',
        'Assistive Listening Device Consultation'
      ]
    },
    {
      id: 'occupational-sensory',
      title: 'Occupational Therapy & Sensory Integration',
      category: 'Sensory & Motor',
      badgeColor: 'lime',
      themeClass: 'card-theme-lime',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 12h8M12 8v8"/>
        </svg>
      ),
      description: 'Targeted support for sensory modulation, balance, gross/fine motor dexterity, handwriting, self-care routines, and overall functional physical independence.',
      items: [
        'Sensory Modulation & Regulation Strategies',
        'Fine Motor Dexterity & Pre-Writing Skills',
        'Gross Motor Coordination & Balance Gym',
        'Activities of Daily Living (ADL) Independence'
      ]
    },
    {
      id: 'behaviour-support',
      title: 'Positive Behaviour Support',
      category: 'Regulation & Coping',
      badgeColor: 'azure',
      themeClass: 'card-theme-azure',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
      description: 'ABA-informed, compassionate positive behaviour support helping children learn self-regulation, adaptive routines, and functional communication in place of distress.',
      items: [
        'Functional Behavioural Assessments (FBA)',
        'Positive Reinforcement & Structured Routines',
        'Emotional Regulation & De-escalation Tools',
        'Functional Replacement Communication'
      ]
    },
    {
      id: 'early-intervention',
      title: 'Early Intervention Centre Programs',
      category: 'Foundational Growth',
      badgeColor: 'green',
      themeClass: 'card-theme-green',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      description: 'High-impact multidisciplinary early support for infants and toddlers (0–6 years) experiencing developmental delays or atypical milestone trajectories.',
      items: [
        'Developmental Milestone Screening',
        'Play-Based Skill Exploration & Curiosity',
        'Social Interaction & Joint Attention',
        'Integrated Multi-Specialist Early Planning'
      ]
    },
    {
      id: 'family-guidance',
      title: 'Family Guidance & Caregiver Coaching',
      category: 'Home Partnership',
      badgeColor: 'lime',
      themeClass: 'card-theme-lime',
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      description: 'Equipping parents with practical coaching and home-based intervention routines so therapeutic progress continues naturally in everyday life environments.',
      items: [
        'One-on-One Caregiver Strategy Consultations',
        'Home Routine Activity Customisation',
        'Parent Support & Developmental Guidance',
        'Collaborative Milestone Review Sessions'
      ]
    }
  ];

  const handleEnquire = (programTitle) => {
    if (onSelectProgram) {
      onSelectProgram(programTitle);
    }
    const el = document.getElementById('assessment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="therapy-programs" background="green" padding="default">
      {/* Playful Floating Shapes */}
      <BrandShape type="blob-lime" size="xl" style={{ top: -90, right: -90, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="lg" style={{ bottom: -70, left: -60, opacity: 0.2 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-white)" style={{ top: 50, left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-lemon-lime)" style={{ bottom: 50, right: '8%' }} />

      <Container>
        <SectionHeading
          eyebrow="Clinical Specialisations"
          title="OUR THERAPY PROGRAMS"
          tagline="Tailored Clinical Support Built Around Your Child"
          description="Every child's developmental profile is unique. Our therapy programs are planned in partnership with families to foster functional, sustainable progress."
          align="center"
        />

        <div className="therapy-programs-grid">
          {programs.map((prog) => (
            <div key={prog.id} className={`therapy-program-card ${prog.themeClass} hover-lift`}>
              <div className="program-card-header">
                <div className={`program-icon-badge badge-${prog.badgeColor}`}>
                  {prog.icon}
                </div>
                <span className={`program-cat-pill pill-${prog.badgeColor}`}>
                  {prog.category}
                </span>
              </div>

              <h3 className="program-title">{prog.title}</h3>
              <p className="program-desc">{prog.description}</p>

              <div className="program-items-box">
                <span className="items-box-label">Key Clinical Components:</span>
                <ul className="program-items-list">
                  {prog.items.map((item, idx) => (
                    <li key={idx} className="program-item-row">
                      <span className="item-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="program-card-footer">
                <button
                  type="button"
                  className="program-cta-btn"
                  onClick={() => handleEnquire(prog.title)}
                >
                  <span>Book for this Service</span>
                  <span className="cta-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
