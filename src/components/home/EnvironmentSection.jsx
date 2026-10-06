import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
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

        <div className="environment-layout">
          {/* Main Feature Visual Card */}
          <div className="environment-feature-card hover-lift">
            <ImagePlaceholder
              src={websiteImages.environment[0].src}
              alt={websiteImages.environment[0].alt}
              objectPosition={websiteImages.environment[0].objectPosition}
              aspectRatio="16/9"
              badge={websiteImages.environment[0].badge}
              theme="lime"
            />
            <div className="feature-card-content">
              <div className="facility-pill-header">
                <span className="facility-dot dot-azure" />
                <span className="facility-type">Integrated Development Hub</span>
              </div>
              <h3 className="feature-card-title">A Welcoming &amp; Inclusive Environment</h3>
              <p className="feature-card-desc">
                Our centre is intentionally designed to support children across sensory, developmental, and communicative needs. From comfortable assessment rooms to purposeful activity areas, every space encourages curiosity and active participation.
              </p>
            </div>
          </div>

          {/* Two Supporting Feature Cards */}
          <div className="environment-secondary-grid">
            <div className="secondary-facility-card card-theme-green hover-lift">
              <ImagePlaceholder
                src={websiteImages.environment[1].src}
                alt={websiteImages.environment[1].alt}
                objectPosition={websiteImages.environment[1].objectPosition}
                aspectRatio="4/3"
                badge={websiteImages.environment[1].badge}
                theme="green"
              />
              <div className="secondary-card-content">
                <div className="facility-pill-header">
                  <span className="facility-dot dot-green" />
                  <span className="facility-type">Individual Therapy</span>
                </div>
                <h4 className="secondary-card-title">Individual Intervention Rooms</h4>
                <p className="secondary-card-desc">
                  Quiet, focused settings equipped for speech-language evaluations, hearing screening guidance, and structured developmental tasks without unnecessary distractions.
                </p>
              </div>
            </div>

            <div className="secondary-facility-card card-theme-lime hover-lift">
              <ImagePlaceholder
                src={websiteImages.environment[2].src}
                alt={websiteImages.environment[2].alt}
                objectPosition={websiteImages.environment[2].objectPosition}
                aspectRatio="4/3"
                badge={websiteImages.environment[2].badge}
                theme="azure"
              />
              <div className="secondary-card-content">
                <div className="facility-pill-header">
                  <span className="facility-dot dot-lime" />
                  <span className="facility-type">Sensory &amp; Preschool</span>
                </div>
                <h4 className="secondary-card-title">Sensory &amp; Learning Spaces</h4>
                <p className="secondary-card-desc">
                  Spaces structured to support sensory integration, motor coordination, social interactions, and play-based preschool learning for children of diverse abilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
