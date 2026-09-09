import React, { useRef, useEffect } from 'react';
import { FiCheckCircle, FiShield, FiHeart } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import './TrustIntro.css';

const pillars = [
  {
    icon: <FiCheckCircle />,
    title: 'Early Intervention & Early Learning',
    desc: 'Supporting early childhood development, school readiness, and foundational learning milestones.'
  },
  {
    icon: <FiShield />,
    title: 'Autism & Neurodiversity Support',
    desc: 'Creating inclusive learning opportunities, speech development, and sensory integration support.'
  },
  {
    icon: <FiHeart />,
    title: 'Family Guidance & Empowerment',
    desc: 'Empowering parents and caregivers with training and continuous supportive partnership.'
  }
];

export default function TrustIntro() {
  const introRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(introRef, () => {
      animateSectionReveal('.intro-reveal', introRef.current);
    });
    return () => cleanup();
  }, []);

  return (
    <section className="section intro-section" ref={introRef}>
      <div className="container">
        <div className="intro-grid">
          {/* Left Editorial Statement */}
          <div className="intro-statement intro-reveal">
            <span className="section-label">OUR CORE COMMITMENT</span>
            <h2 className="intro-heading">
              Dedicated to supporting children and families through <span className="text-highlight-terracotta">education</span>, early intervention, rehabilitation, and inclusive learning.
            </h2>
            <p className="intro-lead-text font-display">
              "Where Every Milestone Matters."
            </p>
          </div>

          {/* Right Pillar Cards */}
          <div className="intro-pillars intro-reveal">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="pillar-item">
                <div className="pillar-icon" aria-hidden="true">
                  {pillar.icon}
                </div>
                <div className="pillar-text">
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
