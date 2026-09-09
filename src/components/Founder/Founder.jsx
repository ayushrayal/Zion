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
    <section id="founder" className="section" ref={founderRef}>
      <div className="container">
        {/* Section Header */}
        <div className="founder-header founder-reveal">
          <span className="section-label">MEET THE FOUNDER</span>
          <h2 className="section-heading font-display">
            A Vision Built Around <span className="text-highlight-peach">Every Child</span>
          </h2>
        </div>

        {/* 2-Column Founder Grid */}
        <div className="founder-grid">
          {/* Left Column: Image */}
          <div className="founder-visual founder-reveal">
            <div className="founder-card-frame">
              <img 
                src={founderImg} 
                alt="Founder of ZION Educational & Rehabilitation Society" 
                className="founder-image"
                loading="lazy"
              />
              <div className="founder-tag">Founder & Leadership</div>
            </div>
          </div>

          {/* Right Column: Information & Vision */}
          <div className="founder-info founder-reveal">
            <div className="founder-title-block">
              <h3 className="founder-name font-display">[Founder Name]</h3>
              <p className="founder-role">Founder & Managing Director, ZION</p>
            </div>

            <div className="founder-bio">
              <p>
                Driven by a deep passion for inclusive learning and child development, the leadership at ZION Educational & Rehabilitation Society was established to bridge the gap between early intervention, therapeutic support, and empowering education for children in Dehradun.
              </p>
              <p>
                Our foundation rests on empathy, scientific intervention methodologies, and active family involvement to ensure that no milestone is overlooked.
              </p>
            </div>

            {/* Vision Statement Box */}
            <div className="founder-vision-box">
              <FaQuoteLeft className="quote-icon" aria-hidden="true" />
              <blockquote className="vision-quote">
                "Our commitment is to create a safe, nurturing environment where every child feels seen, celebrated, and guided toward achieving their fullest potential."
              </blockquote>
              <cite className="quote-author">— ZION Founding Vision</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
