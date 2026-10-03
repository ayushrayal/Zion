import React from 'react';
import Container from '../layout/Container';
import BrandShape from '../ui/BrandShape';
import { teamGroups } from '../../data/teamData';
import './TeamGroupsShowcase.css';

export default function TeamGroupsShowcase() {
  return (
    <section id="team-groups" className="team-groups-section section-wrapper" aria-labelledby="groups-heading">
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -60, left: -50, opacity: 0.2 }} />
      <BrandShape type="blob-azure" size="md" style={{ bottom: 20, right: -40, opacity: 0.18 }} />
      <BrandShape type="dots" color="rgba(137, 203, 50, 0.3)" style={{ top: 40, right: '8%' }} />

      <Container className="team-groups-container">
        {/* Section Header */}
        <div className="groups-header">
          <div className="groups-header-badge">
            <span className="groups-badge-dot" />
            <span>COLLECTIVE EXCELLENCE</span>
          </div>
          <h2 id="groups-heading" className="groups-title">
            Our Multidisciplinary Units in Action
          </h2>
          <p className="groups-lead">
            True therapeutic and developmental breakthroughs happen when speech pathologists,
            neurophysiotherapists, early interventionists, and special educators operate as one cohesive
            support network around every child and family.
          </p>
        </div>

        {/* Groups Cards */}
        <div className="groups-cards-stack">
          {teamGroups.map((group, index) => (
            <div
              key={group.id}
              className={`group-showcase-card ${index % 2 === 1 ? 'card-reverse' : ''}`}
            >
              {/* Image Frame */}
              <div className="group-image-col">
                <div className="group-image-frame">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="group-team-photo"
                    loading="lazy"
                  />
                  <div className="group-image-overlay" />
                  <span className={`group-floating-pill badge-${group.badgeColor}`}>
                    {group.badge}
                  </span>
                </div>
              </div>

              {/* Text / Info Column */}
              <div className="group-info-col">
                <div className="group-dept-ribbon">
                  <span className={`dept-dot dot-${group.badgeColor}`} />
                  <span className="dept-tag-text">Department Unit #{index + 1}</span>
                </div>

                <h3 className="group-card-title">{group.title}</h3>
                <p className="group-card-subtitle">{group.subtitle}</p>

                <p className="group-card-desc">{group.description}</p>

                <div className="group-features-list">
                  <div className="group-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Regular interdisciplinary clinical case reviews</span>
                  </div>
                  <div className="group-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Individualised Milestone Tracking &amp; Parent Counseling</span>
                  </div>
                  <div className="group-feature-item">
                    <span className="check-icon">✓</span>
                    <span>Continuous professional development &amp; evidence-based care</span>
                  </div>
                </div>

                <div className="group-action-row">
                  <a href="/#contact" className="group-consult-btn">
                    Connect With This Wing
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
