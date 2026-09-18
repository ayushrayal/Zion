import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import './TestimonialsSection.css';

export default function TestimonialsSection() {
  const placeholderCards = [
    {
      id: 'story-1',
      domain: 'Speech & Language Journey',
      note: 'Reserved for Authentic Parent Story',
      description: 'Documenting real experiences of children discovering functional communication, speech clarity, and confidence through individualised therapy.'
    },
    {
      id: 'story-2',
      domain: 'Early Intervention & Inclusive Learning',
      note: 'Reserved for Authentic Parent Story',
      description: 'Documenting milestones in sensory regulation, social engagement, and smooth transition into inclusive preschool settings.'
    },
    {
      id: 'story-3',
      domain: 'Occupational Therapy & Family Support',
      note: 'Reserved for Authentic Parent Story',
      description: 'Documenting practical independence, motor skills development, and collaborative parent guidance in everyday routines.'
    }
  ];

  return (
    <SectionWrapper id="testimonials" background="subtle" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Parent &amp; Family Voices"
          title="TESTIMONIALS"
          tagline="Celebrating Every Milestone Along the Way"
          description="We respect family privacy and authentic experiences. Testimonials will showcase genuine parent journeys as our community continues to grow."
          align="center"
        />

        <div className="testimonials-grid">
          {placeholderCards.map((card) => (
            <div key={card.id} className="testimonial-card hover-lift">
              <div className="testimonial-card-badge">
                <span className="badge-dot" />
                <span>{card.domain}</span>
              </div>

              <div className="testimonial-quote-icon">“</div>

              <p className="testimonial-placeholder-desc">
                {card.description}
              </p>

              <div className="testimonial-footer-meta">
                <div className="avatar-placeholder">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="meta-identity">
                  <strong className="identity-title">{card.note}</strong>
                  <span className="identity-sub">ZION Family Community</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
