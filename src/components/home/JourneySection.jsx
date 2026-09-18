import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import './JourneySection.css';

export default function JourneySection() {
  const milestones = [
    {
      year: '2021',
      title: 'ZION Speech & Hearing Clinic',
      subtitle: 'Established 7th October 2021',
      description: 'Founded with a focus on speech & language therapy, behaviour therapy, and special education to provide individualised care.',
      accentColor: 'azure'
    },
    {
      year: '2022',
      title: 'Expansion of Support',
      subtitle: 'Occupational Therapy Introduced',
      description: 'Extending support to sensory integration, fine & gross motor development, functional daily living skills, and self-care.',
      accentColor: 'lime'
    },
    {
      year: '2025',
      title: 'ZION Early Intervention Centre',
      subtitle: 'Multidisciplinary Holistic Care',
      description: 'Bringing broader multidisciplinary services together under one roof, coordinating speech, movement, learning, and behaviour.',
      accentColor: 'green'
    },
    {
      year: '2026',
      title: 'ZION Academy',
      subtitle: 'Inclusive Early Learning & Preschool',
      description: 'An inclusive preschool community where children with diverse abilities learn, play, build relationships, and belong alongside peers.',
      accentColor: 'azure'
    },
    {
      year: 'Today',
      title: 'A Growing Ecosystem',
      subtitle: 'Therapy • Education • Community',
      description: 'Extending beyond centre walls with parent training, teacher workshops, and school initiatives creating accepting communities.',
      accentColor: 'green'
    }
  ];

  return (
    <SectionWrapper id="journey" background="white" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Milestones of Care"
          title="THE ZION JOURNEY"
          tagline="One Vision. One Continuous Journey."
          description="From a dedicated speech clinic in 2021 to a comprehensive inclusive ecosystem today, our journey has evolved around the unique needs of every child."
          align="center"
        />

        {/* Timeline Component */}
        <div className="journey-timeline-container">
          <div className="timeline-track-line" />

          <div className="timeline-cards-row">
            {milestones.map((m, index) => (
              <div key={m.year} className={`timeline-step-node node-accent-${m.accentColor}`}>
                <div className="node-marker">
                  <span className="node-year">{m.year}</span>
                </div>

                <div className="timeline-card hover-lift">
                  <span className="timeline-card-step">Step 0{index + 1}</span>
                  <h4 className="timeline-card-title">{m.title}</h4>
                  <span className="timeline-card-sub">{m.subtitle}</span>
                  <p className="timeline-card-desc">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Ecosystem Callout */}
        <div className="ecosystem-callout-box">
          <div className="callout-pill font-accent">The ZION Promise</div>
          <p className="callout-text">
            “To meet every child where they are, understand where they need to go, and work together towards meaningful progress.”
          </p>
          <span className="callout-sub">Where Every Milestone Matters</span>
        </div>
      </Container>
    </SectionWrapper>
  );
}
