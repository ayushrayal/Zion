import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import BrandShape from '../ui/BrandShape';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Speech & Language Therapy',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <SectionWrapper id="contact" background="white" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -50, left: -60, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, right: -40, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="circle-ring" style={{ top: 60, right: '6%' }} />

      <Container>
        <SectionHeading
          eyebrow="Reach Out to Our Team"
          title="LET'S CONNECT"
          tagline="Care That Begins With Listening"
          description="Whether you have questions about your child's speech, developmental milestones, or inclusive preschool learning, we are here to guide you."
        />

        <div className="contact-grid">
          {/* Contact Details Card: Soft Blue Background with Green Accent Icons */}
          <div className="contact-info-col">
            <div className="contact-details-box">
              <div className="contact-card-header">
                <span className="contact-header-badge font-accent">We are here to help</span>
                <h3 className="contact-box-title">Get in Touch</h3>
              </div>

              <p className="contact-box-desc">
                Every child and every family is unique. You don't need to have all the answers before you reach out. Sometimes, the first step is simply having a conversation.
              </p>

              <div className="contact-methods-list">
                <div className="contact-method-card method-office">
                  <div className="method-icon-wrap icon-green">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="method-label">Registered Office</h5>
                    <p className="method-val">
                      47, Ekta Colony, Ajabpur<br />
                      Dehradun 248001, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="contact-method-card method-phone">
                  <div className="method-icon-wrap icon-azure">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="method-label">Direct Phone Lines</h5>
                    <p className="method-val">
                      <a href="tel:+919286068945">+91 92860 68945</a>
                      <br />
                      <a href="tel:+918057403683">+91 80574 03683</a>
                    </p>
                  </div>
                </div>

                {/* Lemon-Lime Highlight for Consultation Schedule */}
                <div className="contact-method-card method-consultation">
                  <div className="method-icon-wrap icon-lime">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="method-label">Consultations</h5>
                    <p className="method-val">
                      Monday to Saturday • Prior Appointment Required
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social-prompt">
                <span className="social-prompt-text font-accent">Connect directly via:</span>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-wrapper-card">
              {isSubmitted ? (
                <div className="form-success-message" role="alert">
                  <div className="success-icon-check">✓</div>
                  <h3 className="success-title">Thank You for Reaching Out</h3>
                  <p className="success-text">
                    We have received your message. Our clinical coordinator will reach out to you promptly on <strong>{formData.phone}</strong> to discuss your consultation.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        service: 'Speech & Language Therapy',
                        message: ''
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="zion-contact-form" noValidate>
                  <div className="form-card-header">
                    <span className="form-badge font-accent">Begin Your Journey</span>
                    <h3 className="form-header-title">Schedule a Consultation</h3>
                    <p className="form-header-sub">
                      Share your details and our team will get in touch with you.
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Parent / Guardian Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Contact Phone <span className="req-star">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9286068945"
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service" className="form-label">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="Speech & Language Therapy">Speech &amp; Language Therapy</option>
                      <option value="Hearing & Audiology Assessment">Hearing &amp; Audiology Assessment</option>
                      <option value="Occupational Therapy & Sensory Integration">Occupational Therapy &amp; Sensory Integration</option>
                      <option value="Early Intervention Programme">Early Intervention Programme</option>
                      <option value="ZION Academy - Inclusive Preschool">ZION Academy - Inclusive Preschool</option>
                      <option value="Behaviour Support & Special Education">Behaviour Support &amp; Special Education</option>
                      <option value="General Milestone Consultation">General Milestone Consultation</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message / Notes
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific concerns, child's age, or milestones you'd like to discuss..."
                      className="form-textarea"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="submit-btn">
                    Let's Talk
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
