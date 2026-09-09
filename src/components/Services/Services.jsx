import React, { useRef, useEffect } from 'react';
import { FiBookOpen, FiActivity, FiSmile, FiHeart } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import './Services.css';

const serviceCategories = [
  {
    num: '01',
    category: 'EDUCATION',
    icon: <FiBookOpen />,
    summary: 'Foundational learning programs focused on early childhood development and smooth school readiness.',
    accent: 'var(--color-sage-light)',
    accentBorder: 'var(--color-sage-dark)',
    items: [
      'Early Childhood Education',
      'School Readiness',
      'Inclusive Education'
    ]
  },
  {
    num: '02',
    category: 'DEVELOPMENT & INTERVENTION',
    icon: <FiActivity />,
    summary: 'Specialized early intervention and neurodiversity support tailored to individual developmental needs.',
    accent: 'var(--color-peach-light)',
    accentBorder: 'var(--color-peach)',
    items: [
      'Early Intervention',
      'Child Development',
      'Autism Support',
      'Neurodiversity Support'
    ]
  },
  {
    num: '03',
    category: 'THERAPY',
    icon: <FiSmile />,
    summary: 'Evidence-informed therapeutic interventions to improve speech, motor skills, and sensory processing.',
    accent: 'var(--color-yellow-light)',
    accentBorder: 'var(--color-yellow)',
    items: [
      'Speech & Language Development',
      'Sensory Integration Therapy',
      'Occupational Therapy'
    ]
  },
  {
    num: '04',
    category: 'FAMILY SUPPORT',
    icon: <FiHeart />,
    summary: 'Comprehensive parental guidance and training to foster supportive home learning environments.',
    accent: 'var(--color-sage-light)',
    accentBorder: 'var(--color-sage-dark)',
    items: [
      'Parent Guidance & Training'
    ]
  }
];

export default function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(servicesRef, () => {
      animateSectionReveal('.service-card-anim', servicesRef.current, { stagger: 0.12 });
    });
    return () => cleanup();
  }, []);

  return (
    <section id="services" className="section section--alt" ref={servicesRef}>
      <div className="container">
        {/* Section Header */}
        <div className="services-header">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-heading font-display">
            Supporting Every Stage of a <span className="text-highlight-sage">Child's Journey</span>
          </h2>
          <p className="section-subheading">
            Our structured programs combine early education, therapy, neurodiverse care, and family guidance into a cohesive support system.
          </p>
        </div>

        {/* 2x2 Desktop Grid */}
        <div className="services-grid">
          {serviceCategories.map((cat) => (
            <div key={cat.category} className="service-card card-base service-card-anim">
              <div className="service-card-top">
                <span className="category-num font-display">{cat.num}</span>
                <div 
                  className="category-icon" 
                  style={{ backgroundColor: cat.accent, color: cat.accentBorder }}
                  aria-hidden="true"
                >
                  {cat.icon}
                </div>
              </div>

              <h3 className="category-title">{cat.category}</h3>
              <p className="category-summary">{cat.summary}</p>

              <div className="category-items-wrapper">
                <span className="items-label">Included Programs:</span>
                <ul className="category-items-list">
                  {cat.items.map((item) => (
                    <li key={item} className="category-item-chip">
                      <span className="chip-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
