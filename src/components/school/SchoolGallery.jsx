import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
import './SchoolGallery.css';

export default function SchoolGallery() {
  const schoolGalleryItems = websiteImages.preschoolGallery || [];

  return (
    <SectionWrapper id="school-gallery" background="white" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -50, right: -40, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -30, left: -40, opacity: 0.2 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 30, left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(213, 225, 81, 0.5)" style={{ bottom: 30, right: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Moments at ZION Academy"
          title="OUR PRESCHOOL GALLERY"
          tagline="Joyful Learning, Spontaneous Play & Authentic Belonging"
          description="Take a visual tour inside ZION Academy's inclusive classrooms, creative discovery stations, and active movement spaces in Dehradun."
          align="center"
        />

        <div className="gallery-grid school-gallery-grid">
          {/* Large Featured Card on Left */}
          {schoolGalleryItems[0] && (
            <div className="featured-card school-gallery-featured hover-lift">
              <div className="featured-inner-frame">
                <ImagePlaceholder
                  src={schoolGalleryItems[0].src}
                  alt={schoolGalleryItems[0].alt}
                  objectPosition={schoolGalleryItems[0].objectPosition}
                  aspectRatio="16/10"
                  label={schoolGalleryItems[0].label}
                  sublabel={schoolGalleryItems[0].sublabel}
                  badge={schoolGalleryItems[0].badge}
                  theme={schoolGalleryItems[0].theme}
                  className="school-feature-img"
                  showCaption={false}
                />
                <div className="school-feature-overlay-tag">
                  <span className="overlay-star font-accent">★</span>
                  <span>ZION Academy Inclusive Early Learning Classrooms</span>
                </div>
              </div>
            </div>
          )}

          {/* 4 Smaller Supporting Cards in Independent Side Grid */}
          <div className="gallery-side-grid">
            {schoolGalleryItems.slice(1).map((item) => (
              <div key={item.id} className="small-card school-gallery-card hover-lift">
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

        {/* Playful School Footer Banner */}
        <div className="school-gallery-quote-bar">
          <div className="quote-heart">💛</div>
          <p className="quote-message font-accent">
            “When children play and learn together, differences become strengths and friendships become natural.”
          </p>
          <span className="quote-cite">— ZION Academy Inclusion Ethos</span>
        </div>
      </Container>
    </SectionWrapper>
  );
}
