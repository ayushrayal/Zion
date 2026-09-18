import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
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
    <SectionWrapper id="contact" background="subtle" padding="default">
      <Container>
        <SectionHeading
          eyebrow="Reach Out to Our Team"
          title="LET'S CONNECT"
          tagline="Care That Begins With Listening"
          description="Whether you have questions about your child's speech, developmental milestones, or inclusive learning, we are here to guide you."
        />

        <div className="contact-grid">
          {/* Contact Details Card */}
          <div className="contact-info-col">
            <div className="contact-details-box">
              <h3 className="contact-box-title">Get in Touch</h3>
              <p className="contact-box-desc">
                Every child and every family is unique. You don't need to have all the answers before you reach out. Sometimes, the first step is simply having a conversation.
              </p>

              <div className="contact-methods-list">
                <div className="contact-method-card">
                  <div className="method-icon">📍</div>
                  <div>
                    <h5 className="method-label">Registered Office</h5>
                    <p className="method-val">
                      47, Ekta Colony, Ajabpur<br />
                      Dehradun 248001, Uttarakhand
                    </p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="method-icon">📞</div>
                  <div>
                    <h5 className="method-label">Direct Lines</h5>
                    <p className="method-val">
                      <a href="tel:+919286068945">+91 92860 68945</a>
                      <br />
                      <a href="tel:+918057403683">+91 80574 03683</a>
                    </p>
                  </div>
                </div>

                <div className="contact-method-card">
                  <div className="method-icon">⏰</div>
                  <div>
                    <h5 className="method-label">Consultations</h5>
                    <p className="method-val">
                      Monday to Saturday • Prior Appointment Required
                    </p>
                  </div>
                </div>
              </div>

              <div className="contact-social-prompt">
                <span className="social-prompt-text">Quick Contact Channels:</span>
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
                        email: '',
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
                  <h3 className="form-header-title">Schedule a Consultation</h3>
                  <p className="form-header-sub">
                    Fill out the form below and our team will get in touch.
                  </p>

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

                  <div className="form-row-2">
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
                        placeholder="e.g. 9876543210"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@domain.com"
                        className="form-input"
                      />
                    </div>
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
