import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './TherapyGallery.css';

export default function TherapyGallery() {
  const galleryItems = [
    {
      id: 'item-feature',
      aspectRatio: '16/10',
      label: 'Multidisciplinary Assessment & Therapy Suite',
      sublabel: 'Comprehensive one-on-one evaluations in a calm, welcoming environment',
      badge: 'Featured Clinical Suite',
      theme: 'azure',
      gridArea: 'featured'
    },
    {
      id: 'item-sensory',
      aspectRatio: '4/3',
      label: 'Sensory Integration & Motor Gym',
      sublabel: 'Sensory swings, balance coordination, and modulation activities',
      badge: 'Sensory & Motor',
      theme: 'lime',
      gridArea: 'support-1'
    },
    {
      id: 'item-speech',
      aspectRatio: '4/3',
      label: 'Speech & Auditory-Verbal Training Room',
      sublabel: 'Acoustic-treated room for listening, speech clarity, and AAC technology',
      badge: 'Speech & Hearing',
      theme: 'green',
      gridArea: 'support-2'
    },
    {
      id: 'item-play',
      aspectRatio: '4/3',
      label: 'Play-Based Early Intervention Corner',
      sublabel: 'Naturalistic, toy-centred developmental interactions for toddlers',
      badge: 'Early Intervention',
      theme: 'warm',
      gridArea: 'support-3'
    },
    {
      id: 'item-caregiver',
      aspectRatio: '4/3',
      label: 'Family Consultation & Guidance Room',
      sublabel: 'Private, collaborative space for parent coaching and progress reviews',
      badge: 'Family Partnership',
      theme: 'azure',
      gridArea: 'support-4'
    }
  ];

  return (
    <SectionWrapper id="therapy-gallery" background="white" padding="default">
      {/* Decorative Organic Shapes in strict brand palette */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -50, left: -50, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, right: -40, opacity: 0.25 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 30, right: '10%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.25)" style={{ bottom: 40, left: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Inside Our Centre"
          title="OUR THERAPY ENVIRONMENT & GALLERY"
          tagline="Purposefully Designed Spaces for Confidence & Growth"
          description="A glimpse into the dedicated clinical rooms, sensory activity gyms, and family consultation spaces at ZION in Ajabpur, Dehradun."
          align="center"
        />

        <div className="therapy-gallery-wireframe-grid">
          {/* Featured Large Card */}
          <div className="gallery-featured-card hover-lift">
            <ImagePlaceholder
              aspectRatio="16/10"
              label={galleryItems[0].label}
              sublabel={galleryItems[0].sublabel}
              badge={galleryItems[0].badge}
              theme={galleryItems[0].theme}
              className="featured-placeholder"
            />
            <div className="featured-card-overlay-badge">
              <span className="dot-pulse" />
              <span>Dedicated Child Observation Suite • Ajabpur, Dehradun</span>
            </div>
          </div>

          {/* 4 Supporting Image Cards in 2x2 Grid */}
          <div className="gallery-supporting-grid">
            {galleryItems.slice(1).map((item) => (
              <div key={item.id} className="gallery-supporting-card hover-lift">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label={item.label}
                  sublabel={item.sublabel}
                  badge={item.badge}
                  theme={item.theme}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Authentic Note */}
        <div className="gallery-authenticity-banner">
          <span className="banner-icon">📍</span>
          <p className="banner-text">
            <strong>Authentic Centre Environment:</strong> Located at 47, Ekta Colony, Ajabpur, Dehradun. Every therapy space is sanitised, child-proofed, and maintained with individualised equipment for safety and focus.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
