import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import './TermsPoliciesSection.css';

export default function TermsPoliciesSection() {
  const policies = [
    {
      num: '01',
      title: 'Appointment Timings & Punctuality',
      content: [
        'Parents are requested to arrive 5–10 minutes before the scheduled therapy session.',
        'Sessions will commence and conclude as per the scheduled timings.',
        'Late arrivals will not result in an extension of the session.',
        'Regular punctuality is essential for maintaining therapeutic consistency.'
      ]
    },
    {
      num: '02',
      title: 'Respectful Conduct & Professional Behaviour',
      content: [
        'Parents, caregivers and visitors are expected to maintain respectful and courteous behaviour towards therapists, administrative personnel and other families.',
        'Abusive language, intimidation, harassment, threats or inappropriate conduct will not be tolerated.',
        'ZION is committed to maintaining a safe, inclusive and positive environment.',
        'Serious or repeated violations may result in suspension or discontinuation of services following management review.'
      ]
    },
    {
      num: '03',
      title: 'Therapy Planning & Professional Autonomy',
      content: [
        'Individual therapy plans are developed based on the child’s assessment, developmental needs and professional clinical judgement.',
        'Parents are encouraged to share observations, concerns and relevant information regarding their child’s progress.',
        'Therapists retain professional autonomy in selecting appropriate intervention strategies and modifying therapy goals.',
        'Parents are requested to avoid directing therapists to make frequent or unplanned changes to therapy activities.',
        'Concerns and suggestions regarding therapy approaches should be discussed during scheduled feedback meetings.'
      ]
    },
    {
      num: '04',
      title: 'Session Cancellation & Make-up Policy',
      content: [
        'Parents must inform the clinic at least 24 hours in advance for planned session cancellations.',
        'In cases of sudden illness or emergencies, parents should inform the clinic as early as possible, preferably at least 6 hours before the session.',
        'Sessions cancelled without the required notice will be considered attended and billed accordingly.',
        'Make-up sessions may be considered subject to therapist availability and the clinic’s schedule.',
        'Make-up sessions are not guaranteed and must be coordinated through the administration.',
        'Repeated last-minute cancellations may affect therapy continuity and scheduling.'
      ]
    },
    {
      num: '05',
      title: 'Monthly Fee & Payment Policy',
      content: [
        'Therapy packages are valid for one calendar month unless otherwise specified.',
        'Fees must be paid in advance, on or before the 5th of every month.',
        'A late payment charge of ₹100 per day will apply after the due date.',
        'If payment is not received by the 7th of the month, sessions may be temporarily suspended from the 8th until outstanding dues are cleared.',
        'Missed sessions without prior notice are non-refundable and cannot be adjusted against future sessions.',
        'Any changes in the fee structure will be communicated in advance.',
        'Fees once paid are non-refundable and non-transferable.'
      ]
    },
    {
      num: '06',
      title: 'Waiting Area Guidelines',
      content: [
        'Parents are requested to maintain silence and avoid loud conversations in the waiting area.',
        'Phone calls and discussions that may disturb ongoing sessions should be avoided.',
        'Children must not be left unattended in the waiting area.',
        'Parents and caregivers should wait for the therapist before handing over or collecting their child.',
        'Please cooperate with the reception and administrative team during arrival and departure.'
      ]
    },
    {
      num: '07',
      title: 'Parent Feedback & Review Meetings',
      content: [
        'Therapy feedback will generally be shared at the end of each month.',
        'Parent review meetings will generally be scheduled during the first week of the following month.',
        'Meetings will focus on the child’s progress, therapy goals, intervention strategies and home-based activities.',
        'Parents are encouraged to actively participate in these discussions.',
        'For urgent concerns, parents may request an appointment with the Clinic Head or concerned therapist through the official communication channel.'
      ]
    },
    {
      num: '08',
      title: 'Official Communication Policy',
      content: [
        'Parents are requested not to contact therapists through their personal mobile numbers or personal social media accounts.',
        'All appointments, queries, concerns and feedback must be directed through the clinic’s official contact number or designated administrative representative.',
        'Parents are requested to follow the established communication and reporting channels.',
        'Professional boundaries and staff privacy must be respected.'
      ]
    },
    {
      num: '09',
      title: 'Home Practice, Parent Participation & Behavioural Expectations',
      content: [
        'Therapy is most effective when intervention strategies are consistently supported at home.',
        'Parents are expected to participate actively in their child’s developmental journey.',
        'Assigned home practice activities should be completed regularly, as advised by the therapist.',
        'Parents are encouraged to follow the strategies and recommendations shared by the clinical team.',
        'Every child has an individual developmental journey. Comparisons with other children should be avoided.',
        'Initial crying, adjustment difficulties or behavioural responses may be part of the adaptation process for some children.',
        'Parents should communicate any concerns regarding behaviour, routines or developmental changes to the therapist.'
      ]
    },
    {
      num: '10',
      title: 'Health, Hygiene & Safety',
      content: [
        'Children experiencing fever, contagious infections or significant illness should refrain from attending therapy sessions.',
        'Parents must inform the clinic in advance if their child is unwell.',
        'Relevant health concerns, allergies or changes in the child’s medical history must be communicated to the concerned therapist.',
        'Parents and caregivers are requested to follow all hygiene and safety instructions provided by the clinic.'
      ]
    },
    {
      num: '11',
      title: 'Photography, Videography & Recording Policy',
      content: [
        'Photography, video recording and audio recording during therapy sessions are not permitted without prior authorization.',
        'Any recording undertaken for clinical documentation, professional purposes or parent training must be authorized by the clinic.',
        'The privacy, confidentiality and dignity of every child and family must be respected.',
        'Parents must not photograph or record other children, parents or staff without appropriate authorization.'
      ]
    },
    {
      num: '12',
      title: 'Feedback, Complaints & Grievance Redressal',
      content: [
        'ZION believes in transparency, accountability and continuous improvement.',
        'Parents are encouraged to communicate genuine concerns, suggestions or complaints regarding therapy services, staff conduct, facilities or administrative matters.'
      ],
      procedureTitle: 'Grievance Redressal Procedure:',
      procedure: [
        'Initial concerns should be communicated to the Reception Desk or designated Clinic Coordinator.',
        'Clinical concerns may be referred to the concerned Department Head.',
        'Unresolved matters may be escalated to the Clinic Head or Founder & Director.',
        'The management will review the concern and take appropriate action.',
        'Parents may request a formal meeting for matters requiring detailed discussion.'
      ],
      conclusion: [
        'All grievances will be handled professionally, with due consideration for confidentiality, fairness and the best interests of the child.',
        'Official communication should be made through the clinic’s designated contact details.'
      ]
    },
    {
      num: '13',
      title: 'Parent Acknowledgement & Agreement',
      intro: 'By enrolling their child for services at ZION Speech & Hearing Clinic & Early Intervention Center, parents and legal guardians acknowledge that:',
      content: [
        'They have read and understood the clinic’s guidelines and policies.',
        'They agree to follow the established appointment, payment, cancellation and communication procedures.',
        'They understand the importance of regular attendance and home-based practice.',
        'They agree to maintain respectful and professional conduct towards all staff members and other families.',
        'They will share accurate and relevant information regarding their child’s developmental and medical history.',
        'They understand that therapy outcomes vary from child to child and depend on several developmental and environmental factors.',
        'They agree to cooperate with the clinical and administrative team in the best interests of their child.'
      ],
      note: 'The clinic reserves the right to review and update its policies when necessary. Any significant revisions will be communicated to parents.'
    }
  ];

  // Store set of open indices; default to item 0 open
  const [openItems, setOpenItems] = useState([0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.__lenis?.resize();
    }, 380);
    return () => clearTimeout(timer);
  }, [openItems]);

  const toggleItem = (idx) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenItems(policies.map((_, idx) => idx));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <SectionWrapper id="terms-policies" background="white" padding="default" className="terms-policies-section">
      {/* Decorative brand shapes */}
      <BrandShape type="blob-azure" size="xl" style={{ top: -100, right: -100, opacity: 0.12, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-lime" size="lg" style={{ bottom: -60, left: -60, opacity: 0.18, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, left: '8%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.2)" style={{ bottom: 50, right: 40, opacity: 0.7, zIndex: 1, pointerEvents: 'none' }} />

      <Container className="policies-container">
        <SectionHeading
          eyebrow="ZION Speech &amp; Hearing Clinic &amp; Early Intervention Center"
          title="PARENT GUIDELINES, POLICIES &amp; CODE OF CONDUCT"
          tagline="WHERE EVERY MILESTONE MATTERS."
          taglineFont="nunito"
          description="At ZION, we believe that every child’s developmental journey is a collaborative effort involving therapists, parents and caregivers. Our policies are designed to ensure consistency, professional accountability, ethical practices and a safe, respectful and supportive environment for every child and family."
          align="left"
          accentColor="azure"
        />

        {/* Policies Subtext and Interactive Controls */}
        <div className="policies-controls-bar">
          <p className="policies-subtext">
            All parents and caregivers are requested to read, understand and adhere to the following guidelines.
          </p>
          <div className="accordion-action-buttons">
            <button
              type="button"
              className="accordion-pill-btn"
              onClick={expandAll}
              aria-label="Expand all policy sections"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
              </svg>
              <span>Expand All</span>
            </button>
            <button
              type="button"
              className="accordion-pill-btn"
              onClick={collapseAll}
              aria-label="Collapse all policy sections"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="17 11 12 6 7 11"></polyline>
                <polyline points="17 18 12 13 7 18"></polyline>
              </svg>
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* 13 Numbered Accordions */}
        <div className="accordion-list">
          {policies.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={item.num}
                className={`accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="accordion-header"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`policy-content-${item.num}`}
                  id={`policy-header-${item.num}`}
                >
                  <div className="accordion-header-left">
                    <div className="accordion-num-badge">
                      {item.num}
                    </div>
                    <h3 className="accordion-title">{item.title}</h3>
                  </div>

                  <div className={`accordion-chevron-wrap ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                <div
                  id={`policy-content-${item.num}`}
                  className="accordion-collapse-wrapper"
                  role="region"
                  aria-labelledby={`policy-header-${item.num}`}
                >
                  <div className="accordion-collapse-inner">
                    <div className="accordion-body">
                      {item.intro && (
                        <p className="policy-intro-text">{item.intro}</p>
                      )}

                      <ul className="policy-bullet-list">
                        {item.content.map((point, pIdx) => (
                          <li key={pIdx} className="policy-bullet-item">
                            <span className="policy-bullet-dot" aria-hidden="true" />
                            <span className="policy-bullet-text">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {item.procedureTitle && (
                        <div className="policy-procedure-box">
                          <h4 className="procedure-heading">{item.procedureTitle}</h4>
                          <ul className="procedure-bullet-list">
                            {item.procedure.map((step, sIdx) => (
                              <li key={sIdx} className="procedure-step-item">
                                <span className="procedure-step-dot" aria-hidden="true" />
                                <span className="procedure-step-text">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.conclusion && (
                        <ul className="policy-bullet-list mt-16">
                          {item.conclusion.map((cPoint, cIdx) => (
                            <li key={cIdx} className="policy-bullet-item">
                              <span className="policy-bullet-dot" aria-hidden="true" />
                              <span className="policy-bullet-text">{cPoint}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.note && (
                        <div className="policy-note-box">
                          <p>{item.note}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment to Every Child Callout Banner */}
        <div className="commitment-card">
          <div className="commitment-badge">OUR COMMITMENT TO EVERY CHILD</div>
          <div className="commitment-body">
            <p className="commitment-line">
              At ZION, we are committed to providing ethical, compassionate, evidence-informed and child-centred intervention.
            </p>
            <p className="commitment-line">
              We believe that meaningful developmental progress happens when therapists, parents and caregivers work together with mutual trust, consistency and respect.
            </p>
            <p className="commitment-emphasis">
              Every child deserves an opportunity to grow, learn and reach their fullest potential.
            </p>
            <p className="commitment-footer">
              Thank you for your trust, understanding and cooperation.
            </p>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
