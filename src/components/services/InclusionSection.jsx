import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './InclusionSection.css';

export default function InclusionSection() {
  const objectives = [
    {
      num: '01',
      text: 'Creating awareness among parents and families',
      theme: 'azure'
    },
    {
      num: '02',
      text: 'Empowering teachers and school teams',
      theme: 'green'
    },
    {
      num: '03',
      text: 'Promoting understanding of developmental and learning differences',
      theme: 'lime'
    },
    {
      num: '04',
      text: 'Sharing practical strategies for inclusive classrooms',
      theme: 'azure'
    },
    {
      num: '05',
      text: 'Encouraging early identification and appropriate referral',
      theme: 'green'
    },
    {
      num: '06',
      text: 'Supporting schools in developing more inclusive practices',
      theme: 'lime'
    },
    {
      num: '07',
      text: 'Reducing misconceptions and stigma',
      theme: 'azure'
    },
    {
      num: '08',
      text: 'Promoting acceptance, participation and belonging',
      theme: 'green'
    },
    {
      num: '09',
      text: 'Building stronger collaboration between families, educators and professionals',
      theme: 'lime'
    }
  ];

  return (
    <SectionWrapper id="inclusion" background="azure-subtle" padding="default" className="inclusion-section">
      {/* Decorative Organic Brand Shapes behind content */}
      <BrandShape type="blob-azure" size="xl" style={{ top: -80, right: -80, opacity: 0.16, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-green" size="lg" style={{ bottom: -60, left: -60, opacity: 0.18, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 50, right: '8%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.2)" style={{ bottom: 40, right: 30, opacity: 0.8, zIndex: 1, pointerEvents: 'none' }} />

      <Container className="inclusion-container">
        <SectionHeading
          eyebrow="Community &amp; Outreach"
          title="INCLUSION BEYOND OUR WALLS"
          tagline="Creating Awareness. Building Understanding. Inspiring Inclusion."
          taglineFont="kalam"
          align="left"
          accentColor="azure"
        />

        {/* Narrative / Context Box */}
        <div className="inclusion-intro-box">
          <p className="inclusion-intro-lead">
            At ZION, we believe that inclusion begins with awareness and understanding.
          </p>
          <p className="inclusion-intro-body">
            Our vision extends beyond the children and families we directly serve. We aspire to contribute towards creating more informed, accepting and inclusive schools and communities, where children with diverse abilities are understood, respected and given meaningful opportunities to participate.
          </p>
          <p className="inclusion-intro-body">
            Through our parent workshops, teacher training programmes, school awareness sessions and community outreach initiatives, our team works with schools, educators, parents and other stakeholders to build understanding around developmental differences, communication needs, learning difficulties, behaviour, sensory needs and neurodiversity.
          </p>

          <div className="inclusion-quote-card">
            <div className="quote-heart-icon" aria-hidden="true">💚</div>
            <div className="quote-text-wrap">
              <p className="inclusion-quote-text">
                Our aim is not simply to provide support within ZION, but to share knowledge and empower the people and environments around the child.
              </p>
              <span className="inclusion-quote-meta">ZION Mission &amp; Community Vision</span>
            </div>
          </div>
        </div>

        {/* Working Together for Meaningful Inclusion */}
        <div className="inclusion-objectives-block">
          <div className="objectives-header">
            <h3 className="objectives-title">Working Together for Meaningful Inclusion</h3>
            <p className="objectives-subtitle">
              A child grows and learns across many environments — home, school and community. For inclusion to be meaningful, understanding and support need to extend across all of them.
            </p>
            <p className="objectives-prompt">We therefore work towards:</p>
          </div>

          <div className="objectives-grid">
            {objectives.map((item) => (
              <div key={item.num} className={`objective-card card-accent-${item.theme}`}>
                <div className="objective-card-top">
                  <span className="objective-num">{item.num}</span>
                  <span className="objective-pill-dot" />
                </div>
                <p className="objective-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Larger Vision Card */}
        <div className="inclusion-vision-card">
          <div className="vision-badge">Our Larger Vision</div>
          <div className="vision-content">
            <p className="vision-line-primary">
              We don’t want inclusion to exist only within ZION.
            </p>
            <p className="vision-line-secondary">
              We want the understanding, acceptance and practices that support inclusion to become part of the schools children attend, the communities they grow up in and the society they belong to.
            </p>
            <div className="vision-divider" />
            <p className="vision-highlight">
              True inclusion is not created in one centre or one classroom.
            </p>
            <p className="vision-highlight-strong">
              It is created when an entire community learns to understand, accept and include.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
