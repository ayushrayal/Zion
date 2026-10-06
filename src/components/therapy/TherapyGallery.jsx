import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
import './TherapyGallery.css';

export default function TherapyGallery() {
  const galleryItems = websiteImages.therapyGallery || [];

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

        <div className="gallery-grid therapy-gallery-grid">
          {/* Featured Large Card */}
          {galleryItems[0] && (
            <div className="featured-card gallery-featured-card hover-lift">
              <ImagePlaceholder
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                objectPosition={galleryItems[0].objectPosition}
                aspectRatio="16/10"
                label={galleryItems[0].label}
                sublabel={galleryItems[0].sublabel}
                badge={galleryItems[0].badge}
                theme={galleryItems[0].theme}
                className="featured-placeholder"
                showCaption={false}
              />
              <div className="featured-card-overlay-badge">
                <span className="dot-pulse" />
                <span>Dedicated Child Observation Suite • Ajabpur, Dehradun</span>
              </div>
            </div>
          )}

          {/* 4 Supporting Image Cards in Independent Side Grid */}
          <div className="gallery-side-grid">
            {galleryItems.slice(1).map((item) => (
              <div key={item.id} className="small-card hover-lift">
                <ImagePlaceholder
                  src={item.src}
                  alt={item.alt}
                  objectPosition={item.objectPosition}
                  aspectRatio="1.3/1"
                  label={item.label}
                  sublabel={item.sublabel}
                  badge={item.badge}
                  theme={item.theme}
                  showCaption={true}
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
