import React from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './WhyChooseSection.css';

export default function WhyChooseSection() {
  const differentiators = [
    {
      num: '01',
      title: 'Qualified Multidisciplinary Team',
      description: 'Professionals from different disciplines work together to address the individual’s needs from multiple perspectives.',
      theme: 'azure'
    },
    {
      num: '02',
      title: 'Individualised Therapy Plans',
      description: 'We do not believe in a one-size-fits-all approach. Intervention is planned around the individual’s strengths, needs and functional goals.',
      theme: 'green'
    },
    {
      num: '03',
      title: 'Assessment Before Intervention',
      description: 'Understanding the underlying needs is an important part of planning appropriate intervention. We use assessment findings to guide therapy goals and recommendations.',
      theme: 'lime'
    },
    {
      num: '04',
      title: 'Evidence-Informed Practice',
      description: 'Our intervention is informed by established clinical approaches, professional expertise and the individual’s response to therapy.',
      theme: 'azure'
    },
    {
      num: '05',
      title: 'Family-Centred Care',
      description: 'Parents are not merely observers. We involve families through guidance, counselling, home strategies and regular communication wherever appropriate.',
      theme: 'green'
    },
    {
      num: '06',
      title: 'Functional & Meaningful Goals',
      description: 'Our focus extends beyond performing a task in therapy. We aim to help individuals apply their skills in everyday environments.',
      theme: 'lime'
    },
    {
      num: '07',
      title: 'Collaborative Care',
      description: 'When multiple areas of development are involved, collaboration between professionals can provide a more holistic picture and coordinated support.',
      theme: 'azure'
    },
    {
      num: '08',
      title: 'Progress Monitoring',
      description: 'Therapy should have direction. Goals and progress are reviewed periodically so that intervention can be adapted according to changing needs.',
      theme: 'green'
    },
    {
      num: '09',
      title: 'Child-Friendly & Inclusive Environment',
      description: 'We aim to provide a welcoming space where individuals feel comfortable, respected and encouraged to participate.',
      theme: 'lime'
    },
    {
      num: '10',
      title: 'Parent Education & Empowerment',
      description: 'We help families understand their child’s needs and provide practical strategies that can be incorporated into everyday routines.',
      theme: 'azure'
    }
  ];

  return (
    <SectionWrapper id="why-choose" background="subtle" padding="default" className="why-choose-section">
      {/* Decorative brand shapes behind content */}
      <BrandShape type="blob-green" size="xl" style={{ top: -80, right: -80, opacity: 0.18, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-azure" size="lg" style={{ bottom: -60, left: -60, opacity: 0.15, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 60, left: '6%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="sparkle" color="var(--color-yellow-green)" style={{ bottom: 80, right: '8%', zIndex: 1, pointerEvents: 'none' }} />

      <Container className="why-choose-container">
        <SectionHeading
          eyebrow="What Sets Us Apart"
          title="WHY CHOOSE ZION?"
          tagline="Professional Care. Personalised Attention. A Partnership With Families."
          taglineFont="kalam"
          description="Choosing a therapy centre is an important decision for every family. At ZION, we strive to make that journey transparent, supportive and centred around the individual."
          align="left"
          accentColor="azure"
        />

        <div className="why-choose-grid">
          {differentiators.map((item) => (
            <div key={item.num} className={`differentiator-card card-border-${item.theme}`}>
              <div className="differentiator-card-header">
                <div className={`differentiator-num-badge badge-${item.theme}`}>
                  {item.num}
                </div>
                <h3 className="differentiator-title">{item.title}</h3>
              </div>
              <p className="differentiator-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
