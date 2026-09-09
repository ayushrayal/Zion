import React, { useRef, useEffect } from 'react';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import aboutImg from '../../assets/images/about-zion.jpg';
import './About.css';

const values = [
  { title: 'Child-Centered' },
  { title: 'Family Engagement' },
  { title: 'Individual Support' },
  { title: 'Inclusive Learning' }
];

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(aboutRef, () => {
      animateSectionReveal('.about-reveal', aboutRef.current);
    });
    return () => cleanup();
  }, []);

  return (
    <section id="about" className="section section--alt" ref={aboutRef}>
      <div className="container about-wrapper">
        {/* Section Header */}
        <div className="about-header about-reveal">
          <span className="about-kalam-label font-display">About ZION</span>
          <h2 className="about-desktop-heading font-display">
            Every Child Is Unique. <span className="text-highlight-sage">Every Journey Is Different.</span>
          </h2>
        </div>

        {/* Main Card Container */}
        <div className="about-card-container">
          {/* Visual Image */}
          <div className="about-visual about-reveal">
            <div className="about-image-wrapper">
              <img 
                src={aboutImg} 
                alt="Child development specialist guiding a child in a supportive learning environment at ZION" 
                className="about-image"
                loading="lazy"
              />
              <div className="about-badge-card">
                <span className="badge-number">100%</span>
                <span className="badge-label">Inclusive & Compassionate Care</span>
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="about-content about-reveal">
            <h3 className="about-tagline font-display">Supporting Children & Families</h3>
            <p className="about-paragraph">
              ZION Educational & Rehabilitation Society is dedicated to supporting children and families through education, early intervention, child development, rehabilitation, and inclusive learning opportunities.
            </p>

            {/* Handwritten Editorial 2-Column Values */}
            <div className="about-values-grid">
              {values.map((item) => (
                <div key={item.title} className="value-note-item">
                  <span className="value-note-bullet">•</span>
                  <span className="value-note-text font-display">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

