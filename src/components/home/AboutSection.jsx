import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import { websiteImages } from '../../data/websiteImages';
import './AboutSection.css';

export default function AboutSection() {
  const approaches = [
    {
      number: '01',
      title: 'Early Identification',
      color: 'azure',
      description: 'Recognising concerns early can help families access appropriate support at the right time.'
    },
    {
      number: '02',
      title: 'Individualised Intervention',
      color: 'green',
      description: 'Therapy is planned according to the individual’s abilities, needs, priorities and functional goals.'
    },
    {
      number: '03',
      title: 'Family Partnership',
      color: 'lime',
      description: 'Parents and caregivers are an integral part of the intervention process. We believe progress is strongest when families understand, participate in and carry over strategies into everyday routines.'
    },
    {
      number: '04',
      title: 'Functional Outcomes',
      color: 'azure',
      description: 'We focus not only on therapy-room skills, but on helping individuals use their abilities meaningfully in real-life situations.'
    }
  ];

  return (
    <SectionWrapper id="about" background="lime" padding="default" className="about-section">
      {/* Decorative Brand Shapes */}
      <BrandShape type="blob-green" size="lg" style={{ top: -60, right: -60, opacity: 0.35, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, left: -40, opacity: 0.2, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, right: '12%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="var(--color-yellow-green)" style={{ bottom: 30, right: 30, opacity: 0.6, zIndex: 1, pointerEvents: 'none' }} />

      <Container className="about-container">
        <SectionHeading
          eyebrow="Established 7th October 2021"
          title="ABOUT ZION"
          tagline="Where Every Milestone Matters"
          taglineFont="kalam"
          description="Empowering Communication. Nurturing Potential. Supporting Every Journey."
          align="left"
        />

        <div className="about-grid">
          {/* Visual Column & Vision/Mission */}
          <div className="about-visual-column">
            <div className="about-visual-card">
              <ImagePlaceholder
                src={websiteImages.about.src}
                alt={websiteImages.about.alt}
                objectPosition={websiteImages.about.objectPosition}
                aspectRatio="4/3"
                label={websiteImages.about.title}
                sublabel={websiteImages.about.sublabel}
                badge={websiteImages.about.badge}
                theme="green"
              />

              {/* Vision & Mission Cards */}
              <div className="vision-mission-cards">
                <div className="vm-card vm-card-vision hover-lift">
                  <div className="vm-header">
                    <span className="vm-badge badge-vision">Our Vision</span>
                  </div>
                  <p className="vm-text">
                    To create an inclusive environment where every child is heard, understood, supported and empowered to reach their potential.
                  </p>
                </div>

                <div className="vm-card vm-card-mission hover-lift">
                  <div className="vm-header">
                    <span className="vm-badge badge-mission">Our Mission</span>
                  </div>
                  <p className="vm-text">
                    To provide ethical, evidence-informed, compassionate and collaborative care that supports communication, development, learning, independence and quality of life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column: Intro, Philosophy & Approach */}
          <div className="about-content-column">
            <div className="about-intro-box">
              <div className="about-est-tag">
                <span className="est-dot" />
                <span>Established 7th October 2021 · Dehradun</span>
              </div>
              <p className="about-lead-text">
                ZION Speech &amp; Hearing Clinic was established on 7th October 2021 with a vision to provide compassionate, evidence-informed and individualised support for children on the spectrum, neurodevelopmental, adolescents and adults with communication, developmental, behavioural, learning, sensory and functional needs.
              </p>
              <p className="about-philosophy-text">
                At ZION, we understand that no two individuals develop in exactly the same way. Every child has their own strengths, challenges, pace and potential. Our role is to understand the individual as a whole and create meaningful intervention that supports their participation at home, in school and in everyday life.
              </p>
              <div className="about-team-callout">
                <span className="team-callout-icon" aria-hidden="true">🤝</span>
                <p className="team-callout-text">
                  We bring together a multidisciplinary team of qualified professionals to provide coordinated assessment and intervention under one roof.
                </p>
              </div>
            </div>

            {/* Our Approach (4 Principles) */}
            <div className="about-approach-section">
              <div className="approach-header">
                <h3 className="approach-title">Our Approach</h3>
                <p className="approach-subtitle">Our work is guided by four important principles:</p>
              </div>

              <div className="principles-grid">
                {approaches.map((item) => (
                  <div key={item.number} className={`principle-card card-accent-${item.color} hover-lift`}>
                    <div className="principle-card-top">
                      <span className="principle-num">{item.number}</span>
                      <span className="principle-pill-dot" />
                    </div>
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-actions">
              <Button href="#founder" variant="primary" size="md">
                Meet the Founder
              </Button>
              <Button href="/team" variant="outline-black" size="md">
                Meet Our Team
              </Button>
              <Button href="/services" variant="secondary" size="md">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
