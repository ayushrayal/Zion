import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import CollageSlideshow from '../ui/CollageSlideshow';
import { environmentSlides } from '../../data/slideshowData';
import './EnvironmentSection.css';

export default function EnvironmentSection() {
  return (
    <SectionWrapper id="environment" background="azure" padding="default">
      {/* Playful Floating Shapes in White, Lime & Green */}
      <BrandShape type="blob-lime" size="xl" style={{ top: -100, left: -100, opacity: 0.3 }} className="animate-float" />
      <BrandShape type="blob-green" size="lg" style={{ bottom: -60, right: -60, opacity: 0.35 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-lemon-lime)" style={{ top: 50, right: '12%' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-yellow-green)" style={{ bottom: 70, left: '8%' }} />
      <BrandShape type="dots" color="rgba(255, 255, 255, 0.4)" style={{ top: 40, left: '5%' }} />

      <Container>
        <SectionHeading
          eyebrow="Purpose-Built Facilities"
          title="OUR ENVIRONMENT"
          tagline="A Space Designed for Learning &amp; Growth"
          description="We aim to provide a welcoming, child-friendly, and inclusive space where individuals feel comfortable, respected, and encouraged to actively participate."
          align="center"
        />

        {/* Dynamic 5-Second Rotating Slideshow showcasing all Environment assets */}
        <CollageSlideshow
          slides={environmentSlides}
          variant="azure"
          idPrefix="env"
          showSlideInfo={true}
        />
      </Container>
    </SectionWrapper>
  );
}
