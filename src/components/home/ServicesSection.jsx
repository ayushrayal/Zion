import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './ServicesSection.css';

export default function ServicesSection() {
  const serviceCategories = [
    {
      id: 'therapy',
      cardTheme: 'card-theme-blue-white',
      badge: 'Clinical Care',
      badgeColor: 'azure',
      title: 'Therapy Services',
      description: 'Individualised clinical therapy designed to nurture functional everyday communication, sensory processing, and motor skills.',
      items: [
        'Speech & Language Therapy (Assessment, Articulation, AAC)',
        'Hearing & Audiology Support',
        'Occupational Therapy (Sensory Integration, Fine/Gross Motor)',
        'Positive Behaviour Support (ABA-informed)'
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      )
    },
    {
      id: 'education',
      cardTheme: 'card-theme-lime-surface',
      badge: 'Inclusive Learning',
      badgeColor: 'lime',
      title: 'Education & School',
      description: 'Developmental and inclusive learning programs supporting transition, school readiness, and peer socialisation.',
      items: [
        'ZION Academy — Inclusive Early Learning & Preschool',
        'School Readiness & Developmental Transition',
        'Special Education & Learning Support',
        'Individualised Educational Planning (IEP)'
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
        </svg>
      )
    },
    {
      id: 'intervention',
      cardTheme: 'card-theme-green-border',
      badge: 'Early Milestone',
      badgeColor: 'green',
      title: 'Development & Intervention',
      description: 'Early identification and targeted multidisciplinary support during critical foundational developmental years.',
      items: [
        'Early Identification & Screening Assessments',
        'ZION Early Intervention Centre Programs',
        'Play-Based Developmental Skill-Building',
        'Functional Communication & Social Engagement'
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="10"/>
          <path d="m10 15 5-3-5-3v6Z"/>
        </svg>
      )
    },
    {
      id: 'family',
      cardTheme: 'card-theme-blue-green-mix',
      badge: 'Collaborative Care',
      badgeColor: 'blue-green',
      title: 'Family Support & Partnership',
      description: 'Empowering parents, caregivers, and educators with practical strategies that support children in natural environments.',
      items: [
        'Parent Guidance & Counselling',
        'Home-Based Strategies & Practical Routines',
        'Parent Workshops & Hands-on Coaching',
        'Teacher & School Awareness Initiatives'
      ],
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    }
  ];

  return (
    <SectionWrapper id="services" background="lime" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-azure" size="lg" style={{ top: -80, right: -40, opacity: 0.3 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -30, left: -40, opacity: 0.35 }} className="animate-float-delayed" />
      <BrandShape type="wave" style={{ top: 40, left: '8%', opacity: 0.5 }} />

      <Container>
        <SectionHeading
          eyebrow="Multidisciplinary Care"
          title="OUR SERVICES"
          tagline="Supporting Every Stage of a Child's Journey"
          description="Comprehensive support delivered by qualified multidisciplinary professionals collaborating under one roof."
          align="center"
        />

        <div className="services-grid">
          {serviceCategories.map((svc) => (
            <div key={svc.id} className={`service-card ${svc.cardTheme} hover-lift`}>
              <div className="service-card-header">
                <div className={`service-icon-wrap icon-wrap-${svc.badgeColor}`}>
                  {svc.icon}
                </div>
                <span className={`service-badge badge-${svc.badgeColor}`}>{svc.badge}</span>
              </div>

              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>

              <ul className="service-items-list">
                {svc.items.map((item, idx) => (
                  <li key={idx} className="service-item-row">
                    <span className="service-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <a href="#contact" className="service-cta-link">
                  <span>Enquire for Assessment</span>
                  <span className="cta-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
