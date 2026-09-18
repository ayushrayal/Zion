import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './EnvironmentSection.css';

export default function EnvironmentSection() {
  return (
    <SectionWrapper id="environment" background="white" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-green" size="lg" style={{ top: -80, left: -60, opacity: 0.3 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, right: -40, opacity: 0.35 }} className="animate-float-delayed" />
      <BrandShape type="arc" style={{ top: 30, right: '10%' }} />

      <Container>
        <SectionHeading
          eyebrow="Purpose-Built Facilities"
          title="OUR ENVIRONMENT"
          tagline="A Space Designed for Learning &amp; Growth"
          description="We aim to provide a welcoming, child-friendly, and inclusive space where individuals feel comfortable, respected, and encouraged to actively participate."
          align="center"
        />

        <div className="environment-layout">
          {/* Main Feature Visual Card with Blue Tint Block */}
          <div className="environment-feature-card hover-lift">
            <ImagePlaceholder
              aspectRatio="16/9"
              label="ZION Multidisciplinary Centre"
              sublabel="Dedicated Clinical &amp; Inclusive Spaces in Ajabpur, Dehradun"
              badge="Centre Facility"
              theme="azure"
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

          {/* Two Supporting Feature Cards with Green & Lime Tints */}
          <div className="environment-secondary-grid">
            <div className="secondary-facility-card card-theme-green hover-lift">
              <ImagePlaceholder
                aspectRatio="4/3"
                label="Therapy &amp; Assessment Rooms"
                sublabel="Individualised One-on-One Support"
                badge="Focused Care"
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
                aspectRatio="4/3"
                label="Sensory &amp; Inclusive Learning Areas"
                sublabel="Movement, Regulation &amp; Early Preschool"
                badge="Active Play"
                theme="lime"
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
