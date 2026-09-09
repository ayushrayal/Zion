import React, { useRef, useEffect } from 'react';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import './Mission.css';

export default function Mission() {
  const missionRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(missionRef, () => {
      animateSectionReveal('.mission-reveal', missionRef.current);
    });
    return () => cleanup();
  }, []);

  return (
    <section className="section section--dark mission-section" ref={missionRef}>
      <div className="container">
        <div className="mission-grid">
          {/* Left Column: Big Brand Thought */}
          <div className="mission-content mission-reveal">
            <span className="section-label section-label--dark">OUR GUIDING PRINCIPLE</span>
            <h2 className="mission-heading font-display">
              "Where Every Milestone Matters."
            </h2>
            <p className="mission-lead-text">
              ZION Educational & Rehabilitation Society creates nurturing opportunities for children to learn, grow, and achieve independence through early intervention, early childhood education, and comprehensive family support.
            </p>
          </div>

          {/* Right Column: Key Commitments */}
          <div className="mission-cards mission-reveal">
            <div className="mission-card">
              <span className="mission-card-num">01</span>
              <div>
                <h3 className="mission-card-title">Early Intervention & Preschool</h3>
                <p className="mission-card-desc">Initiative commenced in April 2026 to nurture early developmental milestones.</p>
              </div>
            </div>

            <div className="mission-card">
              <span className="mission-card-num">02</span>
              <div>
                <h3 className="mission-card-title">Therapeutic & Inclusive Support</h3>
                <p className="mission-card-desc">Integrating speech, occupational, and sensory therapies tailored to each child.</p>
              </div>
            </div>

            <div className="mission-card">
              <span className="mission-card-num">03</span>
              <div>
                <h3 className="mission-card-title">Parent Partnership</h3>
                <p className="mission-card-desc">Guiding families with practical training and compassionate ongoing mentorship.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
