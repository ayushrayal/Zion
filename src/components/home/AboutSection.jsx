import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './AboutSection.css';

export default function AboutSection() {
  const principles = [
    {
      number: '01',
      title: 'Child-Centred',
      color: 'azure',
      description: 'We look at the whole child—communication, learning, sensory needs, motor skills, social-emotional development, independence, and strengths.'
    },
    {
      number: '02',
      title: 'Individual Support',
      color: 'green',
      description: 'Therapy is planned according to the individual’s abilities, needs, priorities and functional goals—never a one-size-fits-all approach.'
    },
    {
      number: '03',
      title: 'Family Engagement',
      color: 'lime',
      description: 'Progress is strongest when families understand, participate in, and carry over practical strategies into daily routines.'
    },
    {
      number: '04',
      title: 'Inclusive Learning',
      color: 'azure',
      description: 'Connecting intervention with education so children with diverse abilities can learn, participate, build friendships, and belong.'
    }
  ];

  return (
    <SectionWrapper id="about" background="warm" padding="default">
      {/* Organic Decorative Shapes */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -60, right: -80 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -40, left: -60 }} className="animate-float-delayed" />
      <BrandShape type="dots" style={{ bottom: 30, right: 40, opacity: 0.5 }} />

      <Container>
        <SectionHeading
          eyebrow="Our Story &amp; Philosophy"
          title="ABOUT ZION"
          tagline="Supporting Children &amp; Families"
          description="ZION Speech &amp; Hearing Clinic was established on 7th October 2021 with a vision to provide compassionate, evidence-informed, and individualised support under one collaborative roof."
        />

        <div className="about-grid">
          {/* Visual Column with Rich Theme Card */}
          <div className="about-visual-column">
            <div className="about-visual-card">
              <ImagePlaceholder
                aspectRatio="4/3"
                label="ZION Care &amp; Learning Space"
                sublabel="Multidisciplinary Intervention in Ajabpur, Dehradun"
                badge="Established Oct 2021"
                theme="green"
              />
              <div className="about-quote-card">
                <div className="quote-heart-icon">💚</div>
                <div>
                  <p className="about-quote-text font-accent">
                    “We Look Beyond the Diagnosis. Every milestone matters!”
                  </p>
                  <span className="about-quote-author">ZION Core Ethos</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars Column with Multi-Tone Cards */}
          <div className="about-content-column">
            <div className="about-intro-box">
              <p className="about-lead-text lead">
                At ZION, we understand that no two individuals develop in exactly the same way. Every child has their own strengths, challenges, pace, and potential. Our role is to understand the individual as a whole and create meaningful intervention that supports active participation at home, in school, and in everyday life.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((item) => (
                <div key={item.number} className={`principle-card card-accent-${item.color} hover-lift`}>
                  <div className="principle-card-top">
                    <span className="principle-num">{item.number}</span>
                    <span className="principle-dot" />
                  </div>
                  <h4 className="principle-title">{item.title}</h4>
                  <p className="principle-desc">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <Button href="#founder" variant="primary" size="md">
                Meet the Founder
              </Button>
              <Button href="#services" variant="secondary" size="md">
                View Our Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
