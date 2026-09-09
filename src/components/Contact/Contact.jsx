import React, { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';
import { initScrollAnimation, animateSectionReveal } from '../../animations/gsap';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const cleanup = initScrollAnimation(contactRef, () => {
      animateSectionReveal('.contact-reveal', contactRef.current);
    });
    return () => cleanup();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section" ref={contactRef}>
      <div className="container">
        {/* Section Header */}
        <div className="contact-header contact-reveal">
          <span className="section-label">CONTACT US</span>
          <h2 className="section-heading font-display">
            Let's Connect With <span className="text-highlight-peach">ZION</span>
          </h2>
          <p className="section-subheading">
            Let's help your child learn, grow and thrive. Reach out to discuss early intervention, preschool initiatives, therapies, or parent guidance.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Contact Information */}
          <div className="contact-info-card card-base contact-reveal">
            <h3 className="info-title font-display">Reach Out To Us</h3>
            <p className="info-intro">
              We welcome parents, caregivers, and educators to visit our society center or contact us directly.
            </p>

            <div className="info-items-list">
              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <FiMapPin />
                </div>
                <div className="info-details">
                  <strong>Location:</strong>
                  <span>Ajabpur, Dehradun, Uttarakhand</span>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon" aria-hidden="true">
                  <FiPhone />
                </div>
                <div className="info-details">
                  <strong>Phone Numbers:</strong>
                  <div className="phone-links">
                    <a href="tel:9286068945" className="phone-link">9286068945</a>
                    <span className="phone-sep">•</span>
                    <a href="tel:8057403683" className="phone-link">8057403683</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-initiative-box">
              <strong>ZION Early Learning & Preschool</strong>
              <p>Commenced educational & rehabilitation initiative in April 2026.</p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card card-base contact-reveal">
            {submitted ? (
              <div className="form-success-message">
                <div className="success-icon" aria-hidden="true">
                  <FiCheck size={32} />
                </div>
                <h3 className="success-title font-display">Enquiry Sent Successfully!</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>. Our team at ZION will reach out to you shortly at <strong>{formData.phone}</strong>.
                </p>
                <button 
                  className="btn-secondary" 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }); }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enquiry-form">
                <h3 className="form-title">Send An Enquiry</h3>

                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name <span className="req">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number <span className="req">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="e.g. 9286068945"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="e.g. parent@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Child Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="form-input form-textarea"
                    placeholder="How can ZION assist your child? (e.g. Early Intervention, Autism Support, Preschool Admission)"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  <span>Send Enquiry</span>
                  <FiSend aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
