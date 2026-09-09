import React, { useRef, useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import founderImg from '../../assets/images/founder-portrait.jpg';
import './Founder.css';

export default function Founder() {
  const founderRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(founderRef, () => {
      animateSectionReveal('.founder-reveal', founderRef.current);
    });
    return () => cleanup();
  }, []);

  return (
    <section id="founder" className="section founder-section" ref={founderRef}>
      <div className="founder-container">
        {/* Section Header */}
        <div className="founder-header-block founder-reveal">
          <h2 className="founder-main-title font-display">MEET THE FOUNDER</h2>
          <p className="founder-tagline font-display">
            A Vision Built Around <span className="text-highlight-peach">Every Child.</span>
          </p>
        </div>

        {/* Founder Content Grid / Vertical Mobile Flow */}
        <div className="founder-content-grid">
          {/* Founder Image Frame */}
          <div className="founder-visual-frame founder-reveal">
            <div className="founder-card-frame">
              <img 
                src={founderImg} 
                alt="Founder of ZION Educational & Rehabilitation Society" 
                className="founder-portrait-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Founder Details Block */}
          <div className="founder-info-block founder-reveal">
            <div className="founder-meta font-display">
              <h3 className="founder-name font-display">[Founder Name]</h3>
              <p className="founder-role">Founder & Managing Director, ZION</p>
            </div>

            <div className="founder-bio-text">
              <p>
                Driven by a deep passion for inclusive learning and child development, the leadership at ZION Educational & Rehabilitation Society was established to bridge the gap between early intervention, therapeutic support, and empowering education for children in Dehradun.
              </p>
              <p>
                Our foundation rests on empathy, scientific intervention methodologies, and active family involvement to ensure that no milestone is overlooked.
              </p>
            </div>

            {/* Vision Statement Quote */}
            <div className="founder-vision-box">
              <FaQuoteLeft className="quote-icon" aria-hidden="true" />
              <blockquote className="vision-quote font-display">
                "Our commitment is to create a safe, nurturing environment where every child feels seen, celebrated, and guided toward achieving their fullest potential."
              </blockquote>
              <cite className="quote-author">— ZION Founding Vision</cite>
            </div>

            {/* 03 Credibility Points */}
            <div className="founder-credibility-list">
              <div className="credibility-item">
                <span className="credibility-num font-display">01</span>
                <div className="credibility-text">
                  <span className="credibility-title">Early Intervention & Child Development</span>
                  <p className="credibility-sub">Specialized developmental care for early milestones</p>
                </div>
              </div>
              <div className="credibility-item">
                <span className="credibility-num font-display">02</span>
                <div className="credibility-text">
                  <span className="credibility-title">Scientific Therapeutic Methodologies</span>
                  <p className="credibility-sub">Evidence-based rehabilitation & sensory programs</p>
                </div>
              </div>
              <div className="credibility-item">
                <span className="credibility-num font-display">03</span>
                <div className="credibility-text">
                  <span className="credibility-title">Active Family & Holistic Guidance</span>
                  <p className="credibility-sub">Empowering parents throughout every step</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

