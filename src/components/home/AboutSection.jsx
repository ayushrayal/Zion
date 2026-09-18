import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import './AboutSection.css';

export default function AboutSection() {
  const principles = [
    {
      number: '01',
      title: 'Child-Centred',
      description: 'We look at the whole child—communication, learning, sensory needs, motor skills, social-emotional development, independence, and strengths.'
    },
    {
      number: '02',
      title: 'Individual Support',
      description: 'Therapy is planned according to the individual’s abilities, needs, priorities and functional goals—never a one-size-fits-all approach.'
    },
    {
      number: '03',
      title: 'Family Engagement',
      description: 'Progress is strongest when families understand, participate in, and carry over practical strategies into daily routines.'
    },
    {
      number: '04',
      title: 'Inclusive Learning',
      description: 'Connecting intervention with education so children with diverse abilities can learn, participate, build friendships, and belong.'
    }
  ];

  return (
    <SectionWrapper id="about" background="white" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Our Story &amp; Philosophy"
          title="ABOUT ZION"
          tagline="Supporting Children &amp; Families"
          description="ZION Speech &amp; Hearing Clinic was established on 7th October 2021 with a vision to provide compassionate, evidence-informed, and individualised support under one collaborative roof."
        />

        <div className="about-grid">
          {/* Visual Column */}
          <div className="about-visual-column">
            <div className="about-visual-card">
              <ImagePlaceholder
                aspectRatio="4/3"
                label="ZION Care &amp; Learning Space"
                sublabel="Multidisciplinary Intervention in Ajabpur, Dehradun"
                badge="Established Oct 2021"
              />
              <div className="about-quote-card">
                <p className="about-quote-text font-accent">
                  “We Look Beyond the Diagnosis. Every milestone matters!”
                </p>
                <span className="about-quote-author">ZION Core Ethos</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Column */}
          <div className="about-content-column">
            <p className="about-lead-text lead">
              At ZION, we understand that no two individuals develop in exactly the same way. Every child has their own strengths, challenges, pace, and potential. Our role is to understand the individual as a whole and create meaningful intervention that supports active participation at home, in school, and in everyday life.
            </p>

            <div className="principles-grid">
              {principles.map((item) => (
                <div key={item.number} className="principle-card hover-lift">
                  <span className="principle-num">{item.number}</span>
                  <div className="principle-info">
                    <h4 className="principle-title">{item.title}</h4>
                    <p className="principle-desc">{item.description}</p>
                  </div>
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
