import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './SchoolPrograms.css';

export default function SchoolPrograms({ onSelectProgram }) {
  const schoolPrograms = [
    {
      id: 'inclusive-preschool',
      name: 'ZION Academy Inclusive Early Learning & Preschool',
      ageGroup: 'Ages 2.5 – 5 Years',
      badge: 'Core Program',
      badgeColor: 'lime',
      themeClass: 'theme-border-lime',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10M6 10h10"/>
        </svg>
      ),
      description: 'A vibrant, child-centred preschool curriculum blending sensory exploration, early communication, numeracy, and cooperative play in an inclusive classroom where every child belongs.',
      highlights: [
        'Daily Circle Time & Multi-Sensory Storytelling',
        'Creative Expression, Music & Movement',
        'Peer-to-Peer Interaction & Spontaneous Play',
        'Sensory-Friendly Classroom Design'
      ]
    },
    {
      id: 'school-readiness',
      name: 'School Readiness & Developmental Transition',
      ageGroup: 'Ages 4 – 6 Years',
      badge: 'Transition',
      badgeColor: 'green',
      themeClass: 'theme-border-green',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
          <path d="M3 6h18"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      ),
      description: 'Structured preparation fostering developmental and functional readiness for children preparing to transition into mainstream, inclusive, or specialized school environments.',
      highlights: [
        'Pre-Writing & Fine Motor Task Coordination',
        'Following Multi-Step Instructions in Groups',
        'Classroom Independence & Self-Care Skills',
        'Routine Adaptation & Smooth School Entry'
      ]
    },
    {
      id: 'special-education-iep',
      name: 'Special Education & Individualised Educational Planning (IEP)',
      ageGroup: null, // Only verified age ranges used
      badge: 'Tailored Support',
      badgeColor: 'azure',
      themeClass: 'theme-border-azure',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10"/>
          <path d="m10 15 5-3-5-3v6Z"/>
        </svg>
      ),
      description: 'Individualised educational plans aligned with unique cognitive, communicative, and sensory profiles, providing modified learning strategies without compromising dignity.',
      highlights: [
        'Customised Learning Goals & Milestone Tracking',
        'Multi-Sensory Visual Schedules & Pacing',
        'Therapist-Educator Unified Implementation',
        'Quarterly Progress Reviews With Parents'
      ]
    },
    {
      id: 'social-playgroup',
      name: 'Social Communication & Guided Peer Play',
      ageGroup: null,
      badge: 'Social Skills',
      badgeColor: 'lime',
      themeClass: 'theme-border-lime',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      description: 'Facilitated small-group interactive sessions helping children practice turn-taking, shared attention, cooperative game play, and empathy in a low-pressure social setting.',
      highlights: [
        'Structured Cooperative Games & Activities',
        'Empathy & Emotional Awareness Support',
        'Functional Conversation & Turn-Taking Practice',
        'Guided Conflict Resolution in Play'
      ]
    }
  ];

  const handleEnquire = (programName) => {
    if (onSelectProgram) {
      onSelectProgram(programName);
    }
    const el = document.getElementById('admission-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="school-programs" background="lime" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-azure" size="xl" style={{ top: -90, left: -90, opacity: 0.2 }} className="animate-float" />
      <BrandShape type="blob-green" size="lg" style={{ bottom: -70, right: -70, opacity: 0.35 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 50, right: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="var(--color-yellow-green)" style={{ bottom: 40, left: '6%', opacity: 0.7 }} />

      <Container>
        <SectionHeading
          eyebrow="Preschool &amp; Early Learning"
          title="OUR PROGRAMS"
          tagline="Building Foundations for Lifelong Learning"
          description="At ZION Academy, our programs nurture the whole child—fostering communication, curiosity, social belonging, and smooth developmental transitions."
          align="center"
        />

        <div className="school-programs-grid">
          {schoolPrograms.map((prog) => (
            <div key={prog.id} className={`school-program-card ${prog.themeClass} hover-lift`}>
              <div className="program-top-bar">
                <div className={`program-icon-box box-${prog.badgeColor}`}>
                  {prog.icon}
                </div>
                <div className="program-badge-group">
                  {prog.ageGroup && (
                    <span className="program-age-pill">{prog.ageGroup}</span>
                  )}
                  <span className={`program-tag-badge badge-color-${prog.badgeColor}`}>
                    {prog.badge}
                  </span>
                </div>
              </div>

              <h3 className="school-prog-title">{prog.name}</h3>
              <p className="school-prog-desc">{prog.description}</p>

              <div className="school-prog-highlights">
                <span className="highlights-caption">Program Highlights:</span>
                <ul className="highlights-list">
                  {prog.highlights.map((item, idx) => (
                    <li key={idx} className="highlight-item">
                      <span className="highlight-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="school-prog-card-bottom">
                <button
                  type="button"
                  className="school-enquire-link"
                  onClick={() => handleEnquire(prog.name)}
                >
                  <span>Enquire for Admission</span>
                  <span className="enquire-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
