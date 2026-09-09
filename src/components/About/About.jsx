import React, { useRef, useEffect } from 'react';
import { FiHeart, FiUserCheck, FiUsers, FiSun } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import aboutImg from '../../assets/images/about-zion.jpg';
import './About.css';

const points = [
  {
    icon: <FiHeart />,
    title: 'Child-Centered Support',
    desc: 'Focusing on the emotional, developmental, and learning needs of every unique child.'
  },
  {
    icon: <FiUserCheck />,
    title: 'Individualized Support',
    desc: 'Tailoring intervention programs to match individual learning styles and milestones.'
  },
  {
    icon: <FiUsers />,
    title: 'Family Engagement',
    desc: 'Empowering parents and caregivers with guidance, training, and continuous active partnership.'
  },
  {
    icon: <FiSun />,
    title: 'Inclusive Learning',
    desc: 'Creating an atmosphere where neurodiverse children feel understood, valued, and capable.'
  }
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
      <div className="container">
        {/* Section Header */}
        <div className="about-header about-reveal">
          <span className="section-label">ABOUT ZION</span>
          <h2 className="section-heading font-display">
            Every Child Is Unique. <span className="text-highlight-sage">Every Journey Is Different.</span>
          </h2>
          <p className="section-subheading">
            At ZION Educational & Rehabilitation Society, we believe that early intervention and holistic guidance create lifelong opportunities for growth.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="about-grid">
          {/* Left Column: Image Card */}
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

          {/* Right Column: Content & Points */}
          <div className="about-content about-reveal">
            <h3 className="about-subtitle font-display">Supporting Children & Families</h3>
            <p className="about-paragraph">
              ZION Educational & Rehabilitation Society is dedicated to supporting children and families through education, early intervention, child development, rehabilitation, and inclusive learning opportunities.
            </p>

            <div className="points-grid">
              {points.map((point) => (
                <div key={point.title} className="point-card">
                  <div className="point-icon-wrapper" aria-hidden="true">
                    {point.icon}
                  </div>
                  <div className="point-text">
                    <h4 className="point-title">{point.title}</h4>
                    <p className="point-desc">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
