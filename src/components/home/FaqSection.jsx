import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import BrandShape from '../ui/BrandShape';
import Button from '../ui/Button';
import './FaqSection.css';

export default function FaqSection() {
  const faqs = [
    {
      num: '01',
      question: 'When should I consider an assessment for my child?',
      answer: 'If you have concerns about your child’s speech, language, hearing, behaviour, learning, attention, sensory processing, motor skills, social interaction or overall development, an assessment can help you understand their current strengths and areas requiring support. You do not need to wait for difficulties to become more significant before seeking guidance.'
    },
    {
      num: '02',
      question: 'Does my child need a diagnosis before starting therapy?',
      answer: 'No. A formal diagnosis is not always required to seek an assessment or begin appropriate intervention. Our professionals first understand the individual’s needs and recommend the appropriate course of action. Where further medical or specialist evaluation is indicated, we may recommend referral to the relevant professional.'
    },
    {
      num: '03',
      question: 'How do I know which therapy my child needs?',
      answer: 'You don’t have to figure this out on your own. Based on the concerns shared and assessment findings, our team will explain which areas may benefit from intervention and whether support from one or multiple disciplines would be appropriate.'
    },
    {
      num: '04',
      question: 'What happens during the first visit?',
      answer: 'The first visit generally includes a detailed discussion of your concerns and relevant history, followed by an appropriate assessment or clinical observation. Depending on the individual’s needs, further sessions may be recommended to complete the assessment.'
    },
    {
      num: '05',
      question: 'Will my child receive therapy immediately after the assessment?',
      answer: 'Not necessarily. Our priority is to understand the individual’s needs before recommending intervention. Once the assessment is complete, we discuss the findings, goals and recommended plan with the family.'
    },
    {
      num: '06',
      question: 'How often will my child need therapy?',
      answer: 'Therapy frequency varies from person to person. It depends on the individual’s needs, goals, age, response to intervention and other relevant factors. Frequency is discussed after assessment and may be reviewed as progress is made.'
    },
    {
      num: '07',
      question: 'How long does therapy take to show results?',
      answer: 'Every individual progresses differently. Outcomes depend on several factors, including the nature and severity of the difficulty, consistency of intervention, participation, home support and individual learning patterns. We focus on meaningful progress rather than promising a fixed timeline.'
    },
    {
      num: '08',
      question: 'Will parents be involved in therapy?',
      answer: 'Yes. We believe parents and caregivers play an important role in supporting progress. Depending on the individual’s needs, we provide guidance, home strategies and practical ways to encourage skill development in everyday routines.'
    },
    {
      num: '09',
      question: 'Do you provide home programmes?',
      answer: 'Where appropriate, therapists may provide personalised recommendations and home strategies that complement therapy. These are designed to be practical and relevant to the individual’s everyday environment.'
    },
    {
      num: '10',
      question: 'Can my child receive more than one type of therapy at ZION?',
      answer: 'Yes. When an individual’s needs involve multiple developmental areas, different professionals may work collaboratively as part of a multidisciplinary approach. The recommended services depend on assessment findings and individual goals.'
    },
    {
      num: '11',
      question: 'Do you work with children with autism, ADHD or other developmental conditions?',
      answer: 'Yes. We provide assessment and intervention for a range of developmental, communication, behavioural, learning and functional needs. Intervention is individualised and based on the person’s strengths, needs and goals.'
    },
    {
      num: '12',
      question: 'Do you provide services for adults as well?',
      answer: 'Yes. In addition to our paediatric services, we provide selected assessment, therapy and rehabilitation services for adults, including support for communication, voice, fluency, aphasia, dysarthria, cognitive-communication and other relevant needs.'
    },
    {
      num: '13',
      question: 'Do you provide hearing assessments?',
      answer: 'Our audiology services include hearing assessment and hearing-related support, as appropriate. We also provide guidance for individuals using hearing aids or cochlear implants and support auditory development where indicated.'
    },
    {
      num: '14',
      question: 'Do you provide school-readiness and learning support?',
      answer: 'Yes. Our services may include school-readiness, special education and learning support based on the individual’s developmental and educational needs.'
    },
    {
      num: '15',
      question: 'Do you offer online sessions?',
      answer: 'Where clinically appropriate, certain services and parent-guidance sessions may be offered online. Suitability is determined on an individual basis.'
    },
    {
      num: '16',
      question: 'How is my child’s progress monitored?',
      answer: 'Progress is monitored through ongoing clinical observation, goal tracking and periodic review. Therapy goals may be modified as the individual’s skills and needs change.'
    },
    {
      num: '17',
      question: 'What if my child is not cooperating during the assessment?',
      answer: 'That is completely okay. Children may need time to become comfortable in a new environment. Our professionals use developmentally appropriate and child-friendly approaches, and additional observation or assessment sessions may be recommended when necessary.'
    },
    {
      num: '18',
      question: 'What should I bring for the first appointment?',
      answer: 'If available, you may bring previous assessment reports, therapy records, hearing reports, school records or other relevant documents. Any information that helps us understand your child’s developmental and educational history can be useful.'
    },
    {
      num: '19',
      question: 'Can I speak to someone before booking an assessment?',
      answer: 'Absolutely. We encourage families to share their concerns and ask questions. Our team can guide you regarding the most appropriate first step.'
    },
    {
      num: '20',
      question: 'How do I book an appointment?',
      answer: 'You can contact ZION Speech & Hearing Clinic and Early Intervention Centre through our contact channels to schedule an appointment or enquire about the appropriate service.'
    }
  ];

  // Default: first item open
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
    setOpenItems(faqs.map((_, idx) => idx));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <SectionWrapper id="faqs" background="azure-subtle" padding="default" className="faq-section">
      {/* Decorative Organic Brand Shapes */}
      <BrandShape type="blob-azure" size="xl" style={{ top: -80, right: -80, opacity: 0.16, zIndex: 1, pointerEvents: 'none' }} className="animate-float" />
      <BrandShape type="blob-lime" size="lg" style={{ bottom: -60, left: -60, opacity: 0.2, zIndex: 1, pointerEvents: 'none' }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 50, left: '6%', zIndex: 1, pointerEvents: 'none' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(13, 92, 238, 0.2)" style={{ bottom: 40, right: '5%', opacity: 0.7, zIndex: 1, pointerEvents: 'none' }} />

      <Container className="faq-container">
        <SectionHeading
          eyebrow="Help &amp; Guidance"
          title="FREQUENTLY ASKED QUESTIONS"
          tagline="Clear Answers to Your Questions"
          taglineFont="kalam"
          description="Everything you need to know about our clinical assessments, therapies, multidisciplinary care, and how to begin your child's developmental journey."
          align="left"
          accentColor="azure"
        />

        {/* Controls Bar */}
        <div className="faq-controls-bar">
          <p className="faq-controls-subtext">
            Explore 20 essential questions covering our assessment process, therapy sessions, family partnership, and practical care.
          </p>
          <div className="faq-action-buttons">
            <button
              type="button"
              className="faq-pill-btn"
              onClick={expandAll}
              aria-label="Expand all FAQ answers"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="7 13 12 18 17 13"></polyline>
                <polyline points="7 6 12 11 17 6"></polyline>
              </svg>
              <span>Expand All</span>
            </button>
            <button
              type="button"
              className="faq-pill-btn"
              onClick={collapseAll}
              aria-label="Collapse all FAQ answers"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="17 11 12 6 7 11"></polyline>
                <polyline points="17 18 12 13 7 18"></polyline>
              </svg>
              <span>Collapse All</span>
            </button>
          </div>
        </div>

        {/* Accordion List */}
        <div className="faq-accordion-list">
          {faqs.map((item, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={item.num}
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-header"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.num}`}
                  id={`faq-header-${item.num}`}
                >
                  <div className="faq-header-left">
                    <div className="faq-num-badge">
                      {item.num}
                    </div>
                    <h3 className="faq-question-title">{item.question}</h3>
                  </div>

                  <div className={`faq-chevron-wrap ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.num}`}
                  className="faq-collapse-wrapper"
                  role="region"
                  aria-labelledby={`faq-header-${item.num}`}
                >
                  <div className="faq-collapse-inner">
                    <div className="faq-answer-body">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="faq-help-card">
          <div className="faq-help-badge">A QUESTION WE HAVEN’T ANSWERED?</div>
          <div className="faq-help-content">
            <h3 className="faq-help-title">We’re Here to Help</h3>
            <p className="faq-help-body">
              Every individual and every family is different. If you have a concern that isn’t addressed above, please reach out to our team. We will help you understand the appropriate next step.
            </p>
            <p className="faq-help-lead font-accent">
              “You don’t need to have all the answers before you contact us. Sometimes, the first step is simply asking the right question.”
            </p>
            <div className="faq-help-actions">
              <Button href="#contact" variant="primary" size="md">
                Book an Assessment
              </Button>
              <Button
                href="https://wa.me/918057403683?text=Hello%20ZION%20Team%2C%20I%20have%20a%20question%20regarding%20my%20child's%20development."
                variant="outline-white"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
