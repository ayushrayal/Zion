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
    shortDesc: 'Equipped with tactile wall panels, swings, soft crash pads, and calibrated sensory equipment.',
    desc: 'Equipped with tactile wall panels, swings, soft crash pads, and calibrated sensory equipment designed for children with autism and sensory processing needs.'
  },
  {
    icon: <FiSun />,
    title: 'Early Learning Classroom',
    shortDesc: 'Child-friendly spaces equipped with wooden learning toys, low shelving, and activity stations.',
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
    <section id="facilities" className="section facilities-section" ref={facilitiesRef}>
      <div className="facilities-container">
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

        {/* MOBILE LAYOUT (< 768px) */}
        <div className="facilities-mobile-layout mobile-only-block facility-reveal">
          {/* 1. First Split Feature Card (Facilities 1 & 2) */}
          <div className="facility-split-card">
            <div className="split-card-image-col">
              <img 
                src={sensoryImg} 
                alt="Sensory Therapy Environment" 
                className="split-card-img" 
                loading="lazy"
              />
            </div>
            <div className="split-card-content-col">
              <div className="split-item">
                <h3 className="split-item-title font-display">{topFeatures[0].title}</h3>
                <p className="split-item-desc">{topFeatures[0].shortDesc}</p>
              </div>
              <div className="split-divider" />
              <div className="split-item">
                <h3 className="split-item-title font-display">{topFeatures[1].title}</h3>
                <p className="split-item-desc">{topFeatures[1].shortDesc}</p>
              </div>
            </div>
          </div>

          {/* 2. Facility Three Card */}
          <div className="facility-mobile-card">
            <div className="facility-mobile-img-wrapper">
              <img 
                src={bottomFacilities[0].image} 
                alt={bottomFacilities[0].title} 
                className="facility-mobile-img" 
                loading="lazy"
              />
              <span className="facility-mobile-badge">{bottomFacilities[0].badge}</span>
            </div>
            <div className="facility-mobile-content">
              <h3 className="facility-mobile-title font-display">{bottomFacilities[0].title}</h3>
              <p className="facility-mobile-desc">{bottomFacilities[0].desc}</p>
            </div>
          </div>

          {/* 3. Facility Four Card */}
          <div className="facility-mobile-card">
            <div className="facility-mobile-img-wrapper">
              <img 
                src={bottomFacilities[1].image} 
                alt={bottomFacilities[1].title} 
                className="facility-mobile-img" 
                loading="lazy"
              />
              <span className="facility-mobile-badge">{bottomFacilities[1].badge}</span>
            </div>
            <div className="facility-mobile-content">
              <h3 className="facility-mobile-title font-display">{bottomFacilities[1].title}</h3>
              <p className="facility-mobile-desc">{bottomFacilities[1].desc}</p>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT (>= 768px) */}
        <div className="facilities-desktop-layout desktop-only-block">
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
      </div>
    </section>
  );
}

