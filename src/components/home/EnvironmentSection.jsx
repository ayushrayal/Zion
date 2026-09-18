import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import './EnvironmentSection.css';

export default function EnvironmentSection() {
  return (
    <SectionWrapper id="environment" background="subtle" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Purpose-Built Facilities"
          title="OUR ENVIRONMENT"
          tagline="A Space Designed for Learning &amp; Growth"
          description="We aim to provide a welcoming, child-friendly, and inclusive space where individuals feel comfortable, respected, and encouraged to actively participate."
        />

        <div className="environment-layout">
          {/* Main Feature Visual Card */}
          <div className="environment-feature-card">
            <ImagePlaceholder
              aspectRatio="16/9"
              label="ZION Multidisciplinary Centre"
              sublabel="Dedicated Clinical &amp; Inclusive Spaces"
              badge="Centre Facility"
            />
            <div className="feature-card-content">
              <h3 className="feature-card-title">A Welcoming &amp; Inclusive Environment</h3>
              <p className="feature-card-desc">
                Our centre is intentionally designed to support children across sensory, developmental, and communicative needs. From comfortable assessment rooms to purposeful activity areas, every space encourages curiosity and active participation.
              </p>
            </div>
          </div>

          {/* Two Supporting Feature Cards */}
          <div className="environment-secondary-grid">
            <div className="secondary-facility-card">
              <ImagePlaceholder
                aspectRatio="4/3"
                label="Therapy &amp; Assessment Rooms"
                sublabel="Individualised One-on-One Support"
              />
              <div className="secondary-card-content">
                <h4 className="secondary-card-title">Individual Intervention Rooms</h4>
                <p className="secondary-card-desc">
                  Quiet, focused settings equipped for speech-language evaluations, hearing screening guidance, and structured developmental tasks without unnecessary distractions.
                </p>
              </div>
            </div>

            <div className="secondary-facility-card">
              <ImagePlaceholder
                aspectRatio="4/3"
                label="Sensory &amp; Inclusive Learning Areas"
                sublabel="Movement, Regulation &amp; Early Preschool"
              />
              <div className="secondary-card-content">
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
