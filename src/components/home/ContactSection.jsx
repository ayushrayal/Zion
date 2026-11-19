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

  const [errors, setErrors] = useState({});
  const [redirectedUrl, setRedirectedUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter Parent / Guardian Name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter a Contact Phone Number';
    } else if (formData.phone.trim().replace(/[^0-9]/g, '').length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const userMessage = formData.message?.trim() ? formData.message.trim() : 'I would like to enquire about a consultation.';

    const messageText = `Hello ZION Team,\n\nI would like to enquire about a consultation.\n\nParent / Guardian Name: ${formData.name.trim()}\nContact Number: ${formData.phone.trim()}\nService of Interest: ${formData.service || 'Speech & Language Therapy'}\n\nMessage:\n${userMessage}\n\nPlease contact me regarding the consultation.\n\nThank you.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918057403683?text=${encodedMessage}`;

    setRedirectedUrl(whatsappUrl);

    // Open WhatsApp click-to-chat
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <SectionWrapper id="contact" background="white" padding="default">
      {/* Decorative Organic Accents */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -50, left: -60, opacity: 0.35 }} className="animate-float" />
      <BrandShape type="blob-azure" size="md" style={{ bottom: -40, right: -40, opacity: 0.25 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 50, right: '8%' }} className="animate-spin-slow" />
      <BrandShape type="circle-ring" style={{ top: 70, left: '5%' }} />

      <Container>
        <SectionHeading
          eyebrow="Reach Out to Our Team"
          title="LET'S CONNECT"
          tagline="Care That Begins With Listening"
          description="Whether you have questions about your child's speech, developmental milestones, or inclusive preschool learning, we are here to guide you."
        />

        <div className="contact-grid">
          {/* Contact Details Card: Vibrant Brand Card */}
          <div className="contact-info-col">
            <div className="contact-details-box hover-lift">
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
                  <div className="method-content">
                    <h5 className="method-label">Main Branch</h5>
                    <p className="method-val">
                      Khasra 678, Lane No. 4<br />
                      Malviya Nagar, Dehrakhas<br />
                      Dehradun
                    </p>
                  </div>
                </div>

                <div className="contact-method-card method-office">
                  <div className="method-icon-wrap icon-azure">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M3 21h18M5 21V7l8-4 6 4v14M9 9v.01M9 13v.01M9 17v.01M15 9v.01M15 13v.01M15 17v.01"/>
                    </svg>
                  </div>
                  <div className="method-content">
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
                  <div className="method-content">
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
                  <div className="method-content">
                    <h5 className="method-label">Consultations</h5>
                    <p className="method-val">
                      Monday to Saturday • Prior Appointment Required
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social-prompt">
                <span className="social-prompt-text font-accent">Quick channels:</span>
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-col">
            <div className="form-wrapper-card hover-lift">
              <form onSubmit={handleSubmit} className="zion-contact-form" noValidate>
                <div className="form-card-header">
                  <span className="form-badge font-accent">Begin Your Journey</span>
                  <h3 className="form-header-title">Schedule a Consultation</h3>
                  <p className="form-header-sub">
                    Share your details and connect directly with our team on WhatsApp.
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
                    className={`form-input ${errors.name ? 'has-error' : ''}`}
                    required
                  />
                  {errors.name && <span className="form-field-error">{errors.name}</span>}
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
                    placeholder="e.g. 8057403683"
                    className={`form-input ${errors.phone ? 'has-error' : ''}`}
                    required
                  />
                  {errors.phone && <span className="form-field-error">{errors.phone}</span>}
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

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="submit-btn whatsapp-submit-btn"
                >
                  <svg className="whatsapp-btn-svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Continue on WhatsApp</span>
                </Button>

                {redirectedUrl && (
                  <div className="form-wa-redirect-notice" role="status">
                    Connecting to WhatsApp chat (+91 80574 03683)...{' '}
                    <a href={redirectedUrl} target="_blank" rel="noopener noreferrer">
                      Click here to open directly
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
