import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import BrandShape from '../ui/BrandShape';
import './LegalGovernanceSection.css';

export default function LegalGovernanceSection() {
  const registrationDetails = [
    {
      id: 'name',
      label: 'Registered Name',
      value: 'ZION Rehabilitation and Educational Society',
      subtext: 'Societies Registration Act, 1860',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 10h1" />
          <path d="M9 14h1" />
          <path d="M14 10h1" />
          <path d="M14 14h1" />
          <path d="M9 18h6" />
        </svg>
      ),
      theme: 'azure'
    },
    {
      id: 'number',
      label: 'Registration Number',
      value: 'UK0600892026016465',
      subtext: 'Registrar of Societies, Uttarakhand',
      isCode: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      theme: 'green'
    },
    {
      id: 'address',
      label: 'Registered Address',
      value: 'J-47, Ekta Colony, Ajabpur, Dehradun, Uttarakhand – 248001',
      subtext: 'Official Statutory Domicile',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      theme: 'azure'
    }
  ];

  return (
    <SectionWrapper
      id="legal-governance"
      background="white"
      padding="default"
      className="legal-governance-section"
    >
      {/* Decorative Organic Brand Shapes */}
      <BrandShape
        type="blob-azure"
        size="xl"
        style={{ top: -70, right: -60, opacity: 0.12, zIndex: 1, pointerEvents: 'none' }}
        className="animate-float"
      />
      <BrandShape
        type="blob-lime"
        size="lg"
        style={{ bottom: -50, left: -50, opacity: 0.15, zIndex: 1, pointerEvents: 'none' }}
        className="animate-float-delayed"
      />
      <BrandShape
        type="star"
        color="var(--color-yellow-green)"
        style={{ top: 36, left: '6%', zIndex: 1, pointerEvents: 'none' }}
        className="animate-spin-slow"
      />
      <BrandShape
        type="dots"
        color="rgba(13, 92, 238, 0.2)"
        style={{ bottom: 30, right: '6%', zIndex: 1, pointerEvents: 'none' }}
      />

      <Container className="legal-governance-container">
        {/* Section Header */}
        <div className="legal-header">
          <div className="legal-eyebrow-badge">
            <span className="legal-badge-dot" />
            <span className="legal-badge-text">STATUTORY DISCLOSURE &amp; GOVERNANCE</span>
          </div>

          <h1 className="legal-title">
            Legal Registration &amp; Institutional Governance
          </h1>

          <p className="legal-lead">
            ZION Rehabilitation and Educational Society is a duly registered society under the Societies Registration Act, 1860, Government of Uttarakhand.
          </p>

          <p className="legal-sublead">
            The Society is registered with the Registrar of Societies, Uttarakhand, under the following details:
          </p>
        </div>

        {/* Registration Details Layout: 3 Structured Cards */}
        <div className="legal-cards-grid" role="region" aria-label="Official Registration Details">
          {registrationDetails.map((item) => (
            <div
              key={item.id}
              className={`legal-card card-accent-${item.theme}`}
            >
              <div className="legal-card-header">
                <div className={`legal-icon-box icon-${item.theme}`}>
                  {item.icon}
                </div>
                <div className="legal-card-label-block">
                  <span className="legal-card-label">{item.label}</span>
                  <span className="legal-card-subtext">{item.subtext}</span>
                </div>
              </div>

              <div className="legal-card-body">
                {item.isCode ? (
                  <div className="legal-code-display">
                    <span className="legal-code-value">{item.value}</span>
                    <span className="legal-verified-tag">
                      <span className="verified-dot" />
                      Verified
                    </span>
                  </div>
                ) : (
                  <p className="legal-card-value">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Society Objectives Block */}
        <div className="legal-objective-card">
          <div className="legal-objective-ribbon">
            <span className="objective-dot" />
            <span className="objective-ribbon-text">OBJECTIVES &amp; MANDATE</span>
          </div>
          <p className="legal-objective-text">
            The Society is established with the objective of promoting education, rehabilitation, inclusion, child development and holistic support services. Through its educational and therapeutic initiatives, the Society aims to create accessible, inclusive and developmentally supportive opportunities for children and families.
          </p>
        </div>

        {/* Our Commitment Highlight Card */}
        <div className="legal-commitment-card">
          <div className="commitment-inner">
            <div className="commitment-badge">
              <span className="commitment-dot" />
              <span>OUR COMMITMENT</span>
            </div>
            <h2 className="commitment-title">Our Commitment</h2>
            <p className="commitment-text">
              We are committed to providing quality educational and rehabilitation services through ethical practices, professional expertise and an inclusive approach, ensuring that every child receives opportunities to learn, grow and achieve their potential.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
