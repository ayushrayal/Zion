import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './SchoolGallery.css';

export default function SchoolGallery() {
  const schoolGalleryItems = [
    {
      id: 'feature-classroom',
      aspectRatio: '16/10',
      label: 'Inclusive Circle Time & Storytelling Hub',
      sublabel: 'Interactive morning routines encouraging spoken expression and shared focus',
      badge: 'Featured Classroom',
      theme: 'lime'
    },
    {
      id: 'support-art',
      aspectRatio: '4/3',
      label: 'Creative Art & Sensory Texture Play',
      sublabel: 'Hands-on tactile activities building fine motor control and imagination',
      badge: 'Creative Discovery',
      theme: 'green'
    },
    {
      id: 'support-motor',
      aspectRatio: '4/3',
      label: 'Indoor Gross Motor & Cooperative Play',
      sublabel: 'Active movement challenges fostering balance, coordination, and peer fun',
      badge: 'Movement & Play',
      theme: 'azure'
    },
    {
      id: 'support-literacy',
      aspectRatio: '4/3',
      label: 'Early Pre-Reading & Visual Schedules',
      sublabel: 'Phonics flashcards, communication charts, and structured learning games',
      badge: 'Early Literacy',
      theme: 'warm'
    },
    {
      id: 'support-friendship',
      aspectRatio: '4/3',
      label: 'Friendship & Milestone Celebrations',
      sublabel: 'Celebrating everyday achievements and fostering natural peer empathy',
      badge: 'Community & Joy',
      theme: 'lime'
    }
  ];

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
          description="Take a visual tour inside ZION Academy's inclusive classrooms, creative discovery stations, and active movement spaces in Ajabpur, Dehradun."
          align="center"
        />

        <div className="school-gallery-asymmetric-grid">
          {/* Large Featured Card on Left */}
          <div className="school-gallery-featured hover-lift">
            <div className="featured-inner-frame">
              <ImagePlaceholder
                aspectRatio="16/10"
                label={schoolGalleryItems[0].label}
                sublabel={schoolGalleryItems[0].sublabel}
                badge={schoolGalleryItems[0].badge}
                theme={schoolGalleryItems[0].theme}
                className="school-feature-img"
              />
              <div className="school-feature-overlay-tag">
                <span className="overlay-star font-accent">★</span>
                <span>ZION Academy Inclusive Early Learning Classrooms</span>
              </div>
            </div>
          </div>

          {/* 4 Smaller Supporting Cards in 2x2 Grid */}
          <div className="school-supporting-cards-grid">
            {schoolGalleryItems.slice(1).map((item) => (
              <div key={item.id} className="school-gallery-card hover-lift">
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label={item.label}
                  sublabel={item.sublabel}
                  badge={item.badge}
                  theme={item.theme}
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
