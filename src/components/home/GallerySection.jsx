import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import CollageSlideshow from '../ui/CollageSlideshow';
import { gallerySlides } from '../../data/slideshowData';
import './GallerySection.css';

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" background="white" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -60, right: -60, opacity: 0.4 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, left: -40, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 30, left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="var(--color-lemon-lime)" style={{ bottom: 30, right: '6%', opacity: 0.7 }} />

      <Container>
        <SectionHeading
          eyebrow="Moments of Growth"
          title="OUR GALLERY"
          tagline="A Glimpse Into Life at ZION"
          description="Take a look at our learning spaces, activities, and the moments that make every milestone matter."
          align="center"
        />

        {/* Dynamic 5-Second Rotating Slideshow showcasing all 54 unique Gallery images */}
        <CollageSlideshow
          slides={gallerySlides}
          variant="light"
          idPrefix="gallery"
          showSlideInfo={false}
        />
      </Container>
    </SectionWrapper>
  );
}
