import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import anamikaImg from '../../assets/Team/ANAMIKA BHANDARI.jpg';
import './CoFounderSection.css';

export default function CoFounderSection() {
  const credentials = [
    {
      label: 'Experience',
      title: '5+ Years of Experience',
      desc: 'Specialized clinical focus in pediatric neurodevelopment and early childhood developmental therapy.',
      color: 'azure'
    },
    {
      label: 'Specialization',
      title: 'Pediatric Neurodevelopment & Early Intervention Therapy',
      desc: 'Supporting movement, participation, motor planning, and daily functional independence.',
      color: 'green'
    },
    {
      label: 'Qualifications',
      title: 'SI Certified · ABA Therapist · Certified Brain Gym® Practitioner',
      desc: 'Comprehensive multi-disciplinary expertise combining Sensory Integration, Applied Behavior Analysis, and Brain Gym® methods.',
      color: 'lime'
    }
  ];

  return (
    <SectionWrapper id="co-founder" background="subtle" padding="default">
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-lime" size="lg" style={{ top: 20, right: -50, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: 30, left: -40, opacity: 0.25 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 50, left: '5%' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-yellow-green)" style={{ bottom: 80, right: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Early Intervention Leadership"
          title="MEET THE CO-FOUNDER"
          tagline="Nurturing Every Potential, Step by Step"
          description="Dedicated to empowering children through child-centred early therapy, collaborative caregiver partnership, and celebrating every milestone."
        />

        <div className="cofounder-grid">
          {/* Left Column: Visual Profile & Credentials */}
          <div className="cofounder-visual-col">
            <div className="cofounder-frame-wrapper">
              <div className="cofounder-frame-lime" />
              <div className="cofounder-frame-azure" />

              <div className="cofounder-portrait-frame">
                <div className="cofounder-photo-wrap">
                  <img
                    src={anamikaImg}
                    alt="Dr. Anamika Bhandari - Co-Founder, ZION Early Intervention Center"
                    className="cofounder-photo-img"
                    loading="lazy"
                  />
                  <div className="cofounder-photo-badge">
                    <span className="cofounder-photo-badge-dot" />
                    <span>Dr. Anamika Bhandari · Co-Founder</span>
                  </div>
                </div>

                {/* Co-Founder Vision Card */}
                <div className="cofounder-vision-card">
                  <div className="vision-header-row">
                    <span className="vision-dot" />
                    <span className="vision-card-tag">Co-Founder's Vision</span>
                  </div>
                  <p className="vision-card-text font-accent">
                    “My vision is to help every child discover their abilities, build confidence, and grow towards greater independence, while being valued for who they are.”
                  </p>
                </div>
              </div>
            </div>

            {/* Qualifications & Clinical Focus Card */}
            <div className="cofounder-credentials-card">
              <div className="cred-header-lockup">
                <span className="cred-dot" />
                <h4 className="cred-heading">Specialization &amp; Credentials</h4>
              </div>

              <div className="cred-items-list">
                {credentials.map((cred) => (
                  <div key={cred.label} className="cred-row-item">
                    <div className={`cred-indicator bullet-${cred.color}`} />
                    <div className="cred-details">
                      <span className="cred-tag-label">{cred.label}</span>
                      <h5 className="cred-main-title">{cred.title}</h5>
                      <p className="cred-sub-text">{cred.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Message & Philosophy */}
          <div className="cofounder-bio-col">
            <div className="cofounder-name-badge">
              <div className="cofounder-title-tag">
                <span className="cofounder-dot" />
                <span>Co-Founder, ZION Early Intervention Center</span>
              </div>
              <h3 className="cofounder-name">Dr. Anamika Bhandari</h3>
            </div>

            {/* A Message from the Co-Founder Card */}
            <blockquote className="cofounder-message-card">
              <div className="message-header-bar">
                <span className="message-label-badge">A MESSAGE FROM THE CO-FOUNDER</span>
                <span className="message-quote-glyph font-accent">“</span>
              </div>
              <p className="message-quote-text font-accent">
                “I envision a world where every child is seen beyond their challenges, recognised for their abilities, and given the right opportunities to thrive.”
              </p>
            </blockquote>

            {/* Supporting Content Paragraphs */}
            <div className="cofounder-narrative-block">
              <p className="cofounder-narrative-p">
                I believe that every child has the potential to move, explore, participate, and become more independent when given the right support at the right time.
              </p>
              <p className="cofounder-narrative-p">
                Childhood is not about fitting every child into the same path. It is about understanding how each child learns, moves, communicates, connects, and experiences the world.
              </p>
              <p className="cofounder-narrative-p">
                We believe that meaningful progress happens when therapists and parents work together. We focus on practical, functional goals that make a difference in a child's everyday life, from movement and participation to confidence and independence.
              </p>
              <p className="cofounder-narrative-p">
                At ZION, we strive to make therapy meaningful, functional, and child-centred, while working closely with families and celebrating every step of a child's journey.
              </p>

              {/* Callout Highlight */}
              <div className="cofounder-highlight-box">
                <div className="highlight-indicator" />
                <p className="highlight-text font-accent">
                  Because every child's journey is different, and every little step forward matters.
                </p>
              </div>
            </div>

            {/* Closing Tagline Card */}
            <div className="cofounder-tagline-card">
              <div className="tagline-icon-wrap">
                <span className="tagline-sparkle-dot" />
              </div>
              <div className="tagline-content">
                <span className="tagline-kicker">Core Belief</span>
                <p className="tagline-text">
                  Understanding Every Child. Nurturing Every Potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
