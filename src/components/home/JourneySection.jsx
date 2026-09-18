import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './JourneySection.css';

export default function JourneySection() {
  const milestones = [
    {
      year: '2021',
      title: 'ZION Speech & Hearing Clinic',
      subtitle: 'Established 7th October 2021',
      description: 'Founded with a focus on speech & language therapy, behaviour therapy, and special education to provide individualised care.',
      nodeColor: 'azure',
      cardTheme: 'theme-card-white'
    },
    {
      year: '2022',
      title: 'Expansion of Support',
      subtitle: 'Occupational Therapy Introduced',
      description: 'Extending support to sensory integration, fine & gross motor development, functional daily living skills, and self-care.',
      nodeColor: 'green',
      cardTheme: 'theme-card-lime-tint'
    },
    {
      year: '2025',
      title: 'ZION Early Intervention Centre',
      subtitle: 'Multidisciplinary Holistic Care',
      description: 'Bringing broader multidisciplinary services together under one roof, coordinating speech, movement, learning, and behaviour.',
      nodeColor: 'azure',
      cardTheme: 'theme-card-green-tint'
    },
    {
      year: '2026',
      title: 'ZION Academy',
      subtitle: 'Inclusive Early Learning & Preschool',
      description: 'An inclusive preschool community where children with diverse abilities learn, play, build relationships, and belong alongside peers.',
      nodeColor: 'lime',
      cardTheme: 'theme-card-highlight',
      isHighlight: true
    },
    {
      year: 'Today',
      title: 'A Growing Ecosystem',
      subtitle: 'Therapy • Education • Community',
      description: 'Extending beyond centre walls with parent training, teacher workshops, and school initiatives creating accepting communities.',
      nodeColor: 'green',
      cardTheme: 'theme-card-azure-tint'
    }
  ];

  return (
    <SectionWrapper id="journey" background="cool" padding="default">
      {/* Decorative Brand Shapes */}
      <BrandShape type="blob-lime" size="xl" style={{ top: -100, right: -100, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-green" size="lg" style={{ bottom: -60, left: -60, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="wave" style={{ top: 50, right: '12%', opacity: 0.5 }} />

      <Container>
        <SectionHeading
          eyebrow="Milestones of Care"
          title="THE ZION JOURNEY"
          tagline="One Vision. One Continuous Journey."
          description="From a dedicated speech clinic in 2021 to a comprehensive inclusive ecosystem today, our journey has evolved around the unique needs of every child."
          align="center"
        />

        {/* Timeline Component with Royal Blue Line & Colorful Nodes */}
        <div className="journey-timeline-container">
          <div className="timeline-track-line" />

          <div className="timeline-cards-row">
            {milestones.map((m, index) => (
              <div key={m.year} className={`timeline-step-node node-color-${m.nodeColor} ${m.isHighlight ? 'node-is-highlight' : ''}`}>
                <div className="node-marker hover-lift">
                  <span className="node-year">{m.year}</span>
                  {m.isHighlight && <span className="highlight-star">★</span>}
                </div>

                <div className={`timeline-card ${m.cardTheme} hover-lift`}>
                  <div className="timeline-card-header">
                    <span className="timeline-card-step">Step 0{index + 1}</span>
                    {m.isHighlight && <span className="milestone-badge">Key Milestone</span>}
                  </div>
                  <h4 className="timeline-card-title">{m.title}</h4>
                  <span className="timeline-card-sub font-accent">{m.subtitle}</span>
                  <p className="timeline-card-desc">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Ecosystem Callout with Colorful Gradients */}
        <div className="ecosystem-callout-box hover-lift">
          <div className="callout-pill font-accent">The ZION Promise</div>
          <p className="callout-text">
            “To meet every child where they are, understand where they need to go, and work together towards meaningful progress.”
          </p>
          <span className="callout-sub font-accent">Where Every Milestone Matters</span>
        </div>
      </Container>
    </SectionWrapper>
  );
}
