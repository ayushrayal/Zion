import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import BrandShape from '../ui/BrandShape';
import './FounderSection.css';

export default function FounderSection() {
  const credentials = [
    { title: '9+ Years Experience', desc: 'Paediatric communication & developmental support', color: 'azure' },
    { title: 'Speech-Language Pathologist & Audiologist', desc: 'Comprehensive speech, language & hearing clinical care', color: 'green' },
    { title: 'Behavior Therapist (RBT)', desc: 'Applied behaviour analysis & positive regulation support', color: 'lime' },
    { title: 'Specialised Certifications', desc: 'Autism intervention, sensory integration & neuropsychology', color: 'azure' }
  ];

  const zionAcronym = [
    { letter: 'Z', term: 'Zero Exclusion', text: 'Every child deserves a place where differences are understood and supported rather than becoming barriers to belonging.', color: 'azure' },
    { letter: 'I', term: 'Individual Growth', text: 'We recognise unique developmental journeys and believe progress should be celebrated in relation to the individual.', color: 'green' },
    { letter: 'O', term: 'Opportunity to Thrive', text: 'Creating meaningful opportunities to communicate, learn, develop independence, and realise potential.', color: 'lime' },
    { letter: 'N', term: 'Nurturing Relationships', text: 'Environments built on trust, compassion, patience, and understanding between families, educators, and therapists.', color: 'azure' }
  ];

  return (
    <SectionWrapper id="founder" background="white" padding="default">
      {/* Organic Shapes */}
      <BrandShape type="blob-azure" size="md" style={{ top: 40, left: -60, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-lime" size="lg" style={{ bottom: 20, right: -50, opacity: 0.4 }} className="animate-float-delayed" />

      <Container>
        <SectionHeading
          eyebrow="Clinical Leadership"
          title="MEET THE FOUNDER"
          tagline="A Vision Built Around Every Child"
          description="Dedicated to creating a compassionate, multidisciplinary ecosystem where children are recognised for their strengths, individuality, and possibilities."
        />

        <div className="founder-grid">
          {/* Founder Bio Content on White */}
          <div className="founder-bio-col">
            <div className="founder-name-badge">
              <div className="founder-title-tag">
                <span className="founder-dot" />
                <span>Founder &amp; Director | ZION</span>
              </div>
              <h3 className="founder-name">Anjali Subramanium</h3>
            </div>

            {/* Proverbs 22:6 Quote on Lemon-Lime Tinted Card */}
            <blockquote className="founder-proverb-card">
              <span className="proverb-icon">“</span>
              <p className="proverb-text font-accent">
                Train up a child in the way he should go; even when he is old he will not depart from it.
              </p>
              <cite className="proverb-cite">— Proverbs 22:6</cite>
            </blockquote>

            <p className="founder-narrative">
              My professional journey in paediatric communication and developmental support began in 2018 with a simple belief—that every child deserves to be understood, supported, and given the opportunity to reach their potential.
            </p>
            <p className="founder-narrative">
              As a Speech-Language Pathologist, Audiologist &amp; Behavioral Therapist, I have had the privilege of working closely with children and families on the spectrum and with diverse developmental, behavioural, and learning needs. Over 9+ years, this experience has taught me that no two children are the same, and meaningful development cannot always be addressed through a single approach.
            </p>
            <p className="founder-narrative">
              A child’s development is interconnected. Communication, behaviour, learning, sensory processing, motor development, and social participation all influence how a child experiences the world.
            </p>

            {/* Credentials with multi-tone indicators */}
            <div className="credentials-list">
              <h5 className="credentials-section-title">Verified Clinical Qualifications</h5>
              {credentials.map((cred) => (
                <div key={cred.title} className="credential-item">
                  <div className={`cred-bullet bullet-${cred.color}`} />
                  <div>
                    <h6 className="cred-title">{cred.title}</h6>
                    <p className="cred-desc">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Colorful Visual Frame */}
          <div className="founder-visual-col">
            <div className="founder-frame-wrapper">
              <div className="frame-organic-lime" />
              <div className="frame-organic-azure" />

              <div className="founder-portrait-frame">
                <ImagePlaceholder
                  aspectRatio="4/5"
                  label="Anjali Subramanium"
                  sublabel="Founder / Director, ZION"
                  badge="Clinical Director"
                  theme="warm"
                />

                {/* Soft Yellow-Green/Lime Founder Vision Card */}
                <div className="founder-quote-banner">
                  <span className="quote-banner-tag">Founder's Vision</span>
                  <p className="quote-banner-text font-accent">
                    “And I want every child to experience something equally important: The feeling that they belong.”
                  </p>
                </div>
              </div>
            </div>

            {/* ZION Values Acronym Showcase with Multi-Color Badges */}
            <div className="zion-values-card">
              <div className="values-header-lockup">
                <span className="values-dot" />
                <h4 className="values-heading">What ZION Stands For</h4>
              </div>
              <div className="values-grid">
                {zionAcronym.map((val) => (
                  <div key={val.letter} className="value-row">
                    <span className={`value-letter letter-${val.color}`}>{val.letter}</span>
                    <div>
                      <strong className="value-term">{val.term}</strong>
                      <p className="value-text">{val.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
