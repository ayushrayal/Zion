import React, { useRef, useEffect } from 'react';
import { FiMaximize2, FiShield, FiSun, FiLayers } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import sensoryImg from '../../assets/images/facility-sensory.jpg';
import classroomImg from '../../assets/images/facility-learning.jpg';
import './Facilities.css';

const topFeatures = [
  {
    icon: <FiLayers />,
    title: 'Sensory Integration Therapy Area',
    desc: 'Equipped with tactile wall panels, swings, soft crash pads, and calibrated sensory equipment designed for children with autism and sensory processing needs.'
  },
  {
    icon: <FiSun />,
    title: 'Early Learning & Preschool Classroom',
    desc: 'Bright, child-friendly spaces equipped with non-toxic wooden learning toys, low shelving, and collaborative activity stations for early learning initiative (April 2026).'
  }
];

const bottomFacilities = [
  {
    title: 'Individual Therapy & Assessment Pods',
    desc: 'Quiet, non-distracting environments designed for one-on-one speech, language, and occupational therapy assessments.',
    image: classroomImg,
    badge: 'Individual Care'
  },
  {
    title: 'Safe Indoor & Group Activity Zone',
    desc: 'Soft padded play areas fostering motor skills, social interaction, cooperative play, and group activities under expert supervision.',
    image: sensoryImg,
    badge: 'Group Interaction'
  }
];

export default function Facilities() {
  const facilitiesRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(facilitiesRef, () => {
      animateSectionReveal('.facility-reveal', facilitiesRef.current);
    });
    return () => cleanup();
  }, []);

  return (
    <section id="facilities" className="section" ref={facilitiesRef}>
      <div className="container">
        {/* Section Header */}
        <div className="facilities-header facility-reveal">
          <span className="section-label">OUR ENVIRONMENT</span>
          <h2 className="section-heading font-display">
            A Space Designed for <span className="text-highlight-peach">Learning & Growth</span>
          </h2>
          <p className="section-subheading">
            Our physical environment is purposefully crafted to feel calm, safe, non-overwhelming, and stimulating for children of all abilities.
          </p>
        </div>

        {/* Top Asymmetric Row */}
        <div className="facilities-top-row facility-reveal">
          {/* Left Large Featured Image */}
          <div className="facility-main-image-card">
            <img 
              src={sensoryImg} 
              alt="Sensory Integration Therapy Room at ZION" 
              className="facility-main-image"
              loading="lazy"
            />
            <div className="facility-image-overlay">
              <span className="facility-tag font-display">Featured Environment</span>
              <h3 className="facility-image-title">Sensory Integration Therapy Environment</h3>
            </div>
          </div>

          {/* Right Stacked Info Cards */}
          <div className="facility-info-stack">
            {topFeatures.map((feat) => (
              <div key={feat.title} className="facility-info-card card-base">
                <div className="info-card-header">
                  <div className="info-card-icon" aria-hidden="true">
                    {feat.icon}
                  </div>
                  <h3 className="info-card-title">{feat.title}</h3>
                </div>
                <p className="info-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2 Image/Content Cards */}
        <div className="facilities-bottom-grid facility-reveal">
          {bottomFacilities.map((fac) => (
            <div key={fac.title} className="sub-facility-card card-base">
              <div className="sub-facility-image-wrapper">
                <img 
                  src={fac.image} 
                  alt={fac.title} 
                  className="sub-facility-image"
                  loading="lazy"
                />
                <span className="sub-facility-badge">{fac.badge}</span>
              </div>
              <div className="sub-facility-content">
                <h3 className="sub-facility-title">{fac.title}</h3>
                <p className="sub-facility-desc">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
