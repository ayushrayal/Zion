import React from 'react';
import { Link } from 'react-router-dom';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './OurServicesSection.css';

export default function OurServicesSection() {
  const categories = [
    {
      id: 'speech-language',
      number: '01',
      title: 'Speech & Language Services',
      theme: 'azure',
      targetUrl: '/therapy',
      ctaText: 'Explore Speech & Hearing Care',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 9h8"/>
          <path d="M8 13h5"/>
        </svg>
      ),
      items: [
        'Speech and language assessment',
        'Receptive and expressive language intervention',
        'Social communication and pragmatic language',
        'Fluency and stuttering therapy',
        'Articulation therapy',
        'Voice assessment and therapy',
        'Augmentative & Alternative Communication (AAC)',
        'Communication intervention for developmental conditions',
        'Parent training, counselling and communication strategies'
      ]
    },
    {
      id: 'early-intervention',
      number: '02',
      title: 'Early Intervention & Developmental Support',
      theme: 'green',
      targetUrl: '/therapy',
      ctaText: 'Explore Early Intervention Programs',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="m10 15 5-3-5-3v6Z"/>
        </svg>
      ),
      items: [
        'Developmental screening and assessment',
        'Early intervention',
        'Communication and language stimulation',
        'Play-based intervention',
        'School readiness',
        'Developmental skill-building',
        'Functional communication',
        'Parent coaching and home-based strategies'
      ]
    },
    {
      id: 'occupational-therapy',
      number: '03',
      title: 'Occupational Therapy',
      theme: 'lime',
      targetUrl: '/therapy',
      ctaText: 'Explore Occupational & Sensory Care',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      ),
      items: [
        'Fine motor development',
        'Gross motor coordination',
        'Sensory processing and sensory integration',
        'Visual-motor and perceptual skills',
        'Self-care and Activities of Daily Living (ADLs)',
        'Functional independence',
        'Play and participation skills'
      ]
    },
    {
      id: 'behaviour-learning',
      number: '04',
      title: 'Behaviour & Learning Support',
      theme: 'azure',
      targetUrl: '/school',
      ctaText: 'Explore ZION Academy & Learning Support',
      secondaryUrl: '/therapy',
      secondaryText: 'Clinical Behaviour Support',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
          <path d="M6 6h10"/>
          <path d="M6 10h10"/>
        </svg>
      ),
      items: [
        'Behavioural assessment',
        'ABA-based intervention',
        'Positive behaviour support',
        'Attention and regulation skills',
        'Learning support',
        'Individualised educational planning',
        'Special education',
        'Classroom and school-readiness support'
      ]
    },
    {
      id: 'physiotherapy',
      number: '05',
      title: 'Physiotherapy & Motor Development',
      theme: 'green',
      targetUrl: '/therapy',
      ctaText: 'Explore Physiotherapy Programs',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      items: [
        'Gross motor development',
        'Balance and coordination',
        'Strength and mobility',
        'Functional movement',
        'Motor skill development',
        'Individualised physiotherapy programmes'
      ]
    },
    {
      id: 'hearing-audiology',
      number: '06',
      title: 'Hearing & Audiology Services',
      theme: 'lime',
      targetUrl: '/therapy',
      ctaText: 'Explore Audiology & Hearing Care',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
        </svg>
      ),
      items: [
        'Hearing assessment',
        'Hearing health guidance',
        'Support for hearing aid users',
        'Auditory-verbal support',
        'Support for children with cochlear implants',
        'Parent counselling and auditory development guidance'
      ]
    },
    {
      id: 'adult-rehab',
      number: '07',
      title: 'Adult Communication & Rehabilitation',
      theme: 'azure',
      targetUrl: '/therapy',
      ctaText: 'Explore Adult Rehabilitation Care',
      isWide: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      note: 'Our services also extend to adults requiring rehabilitation and communication support, including:',
      items: [
        'Aphasia rehabilitation',
        'Dysarthria and motor speech intervention',
        'Cognitive-communication rehabilitation',
        'Post-stroke communication rehabilitation',
        'Voice and fluency support',
        'Feeding and swallowing support'
      ]
    }
  ];

  return (
    <SectionWrapper id="our-services" background="white" padding="default" className="our-services-section">
      {/* Decorative Brand Shapes behind content */}
      <BrandShape type="blob-lime" size="xl" style={{ top: -80, left: -80, opacity: 0.22, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-azure" size="lg" style={{ bottom: -60, right: -60, opacity: 0.15, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 40, right: '8%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-royal-azure)" style={{ bottom: 80, left: '6%', zIndex: 1, pointerEvents: 'none' }} />

      <Container className="services-container">
        <SectionHeading
          eyebrow="Clinical Disciplines &amp; Support"
          title="OUR SERVICES"
          tagline="Comprehensive Support. One Collaborative Team."
          taglineFont="kalam"
          description="At ZION, our services are designed to address the diverse needs of individuals across communication, hearing, development, behaviour, learning, sensory processing, movement and daily functioning."
          align="left"
          accentColor="azure"
        />

        {/* 7 Service Cards Grid */}
        <div className="services-grid-container">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`service-card card-theme-${cat.theme} ${cat.isWide ? 'service-card--wide' : ''}`}
            >
              <div className="service-card-top-bar">
                <div className={`service-icon-wrap icon-wrap-${cat.theme}`}>
                  {cat.icon}
                </div>
                <span className={`service-badge badge-${cat.theme}`}>
                  {cat.number}
                </span>
              </div>

              <div className="service-card-title-wrap">
                <h3 className="service-card-title">{cat.title}</h3>
              </div>

              {cat.note && (
                <div className="service-note-box">
                  <span className="service-note-dot" />
                  <p className="service-card-note">{cat.note}</p>
                </div>
              )}

              <ul className={`service-card-list ${cat.isWide ? 'service-list--wide-grid' : ''}`}>
                {cat.items.map((item, idx) => (
                  <li key={idx} className="service-list-item">
                    <span className="item-bullet" aria-hidden="true" />
                    <span className="item-text">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <Link to={cat.targetUrl} className={`service-card-cta cta-theme-${cat.theme}`}>
                  <span>{cat.ctaText}</span>
                  <span className="card-cta-arrow" aria-hidden="true">→</span>
                </Link>
                {cat.secondaryUrl && (
                  <Link to={cat.secondaryUrl} className="service-card-cta-sub">
                    <span>{cat.secondaryText}</span>
                    <span className="card-cta-arrow" aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Individualised Care Plans Callout Banner */}
        <div className="individualised-plans-card">
          <div className="plans-icon-wrapper" aria-hidden="true">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <div className="plans-content">
            <h3 className="plans-title">Individualised Care Plans</h3>
            <p className="plans-description">
              Following assessment, our professionals work with the family to identify priorities, functional goals and appropriate intervention strategies. Where appropriate, different disciplines may collaborate to provide a more comprehensive understanding of the individual’s needs. Because meaningful progress happens when everyone works towards the same goal.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
