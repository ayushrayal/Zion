import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import BrandShape from '../ui/BrandShape';
import './SchoolAdmissionForm.css';

export default function SchoolAdmissionForm({ selectedProgram = '' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    programInterest: selectedProgram || 'ZION Academy Inclusive Preschool (Ages 2.5 – 5 Years)',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectedUrl, setRedirectedUrl] = useState(null);

  React.useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, programInterest: selectedProgram }));
    }
  }, [selectedProgram]);

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) {
      errs.parentName = 'Parent or Guardian name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid contact phone number';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userMessage = formData.message?.trim() ? formData.message.trim() : 'I would like to enquire about admission at ZION Academy.';
    const childAgeText = formData.childAge?.trim() ? formData.childAge.trim() : 'Not specified';
    const emailText = formData.email?.trim() ? formData.email.trim() : 'Not specified';

    // School Admissions WhatsApp Message: +91 92860 68945
    const messageText = `*ZION Academy – School Admission Enquiry*

*Parent / Guardian Name:* ${formData.parentName.trim()}
*Contact Phone:* ${formData.phone.trim()}
*Email Address:* ${emailText}
*Child's Age:* ${childAgeText}
*Program of Interest:* ${formData.programInterest}

*Message / Notes:*
${userMessage}

Please guide us regarding the admission process, assessment, and campus visit.

Thank you.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/919286068945?text=${encodedMessage}`;

    setRedirectedUrl(whatsappUrl);
    setIsSubmitted(true);

    // Open School Admissions WhatsApp chat
    const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!opened || opened.closed || typeof opened.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRedirectedUrl(null);
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      childAge: '',
      programInterest: 'ZION Academy Inclusive Preschool (Ages 2.5 – 5 Years)',
      message: ''
    });
    setErrors({});
  };

  return (
    <SectionWrapper id="admission-form" background="lime" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-azure" size="lg" style={{ top: -50, right: -40, opacity: 0.25 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -30, left: -30, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="var(--color-yellow-green)" style={{ bottom: 30, right: '8%', opacity: 0.7 }} />

      <Container>
        <SectionHeading
          eyebrow="Join ZION Academy"
          title="ENQUIRE ABOUT ADMISSION"
          tagline="Start Your Child's Inclusive Early Learning Journey"
          description="We welcome families who value inclusive early learning and supportive child development. Submit an admission enquiry below, and our preschool admissions team will connect with you."
        />

        <div className="school-admission-grid">
          {/* Left Column: Admission Pathway & Campus Info */}
          <div className="admission-guide-col">
            <div className="admission-guide-box hover-lift">
              <div className="admission-box-top">
                <span className="admission-guide-pill font-accent">The Enrolment Steps</span>
                <h3 className="admission-guide-title">How Admission Works</h3>
              </div>

              <div className="enrolment-steps-list">
                <div className="enrol-step-item">
                  <div className="enrol-num num-lime">1</div>
                  <div>
                    <h5 className="enrol-step-title">Enquiry &amp; Parent Call</h5>
                    <p className="enrol-step-text">
                      We connect to understand your child’s developmental age, communication style, and early learning goals.
                    </p>
                  </div>
                </div>

                <div className="enrol-step-item">
                  <div className="enrol-num num-green">2</div>
                  <div>
                    <h5 className="enrol-step-title">Classroom Visit &amp; Observation</h5>
                    <p className="enrol-step-text">
                      Visit our Ajabpur campus, explore our inclusive classrooms, meet educators, and observe our sensory-thoughtful environment.
                    </p>
                  </div>
                </div>

                <div className="enrol-step-item">
                  <div className="enrol-num num-azure">3</div>
                  <div>
                    <h5 className="enrol-step-title">Developmental Fit &amp; IEP Planning</h5>
                    <p className="enrol-step-text">
                      For children requiring extra support, our educators and therapists map custom adaptations before classroom entry.
                    </p>
                  </div>
                </div>

                <div className="enrol-step-item">
                  <div className="enrol-num num-lime">4</div>
                  <div>
                    <h5 className="enrol-step-title">Gentle Welcome &amp; Onboarding</h5>
                    <p className="enrol-step-text">
                      A phased transition schedule ensuring your child feels secure, comfortable, and excited to join peers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Admission Helpline */}
              <div className="admission-contact-card">
                <span className="contact-card-sub font-accent">Direct Admissions Desk:</span>
                <div className="admissions-phone-row">
                  <a href="tel:+919286068945" className="admission-phone">+91 92860 68945</a>
                  <span className="phone-sep">•</span>
                  <a href="tel:+918057403683" className="admission-phone">+91 80574 03683</a>
                </div>
                <div className="admission-location">
                  <p>📍 Main Branch: Khasra 678, Lane No. 4, Malviya Nagar, Dehrakhas, Dehradun</p>
                  <p style={{ fontSize: '0.82rem', opacity: 0.88, marginTop: '3px' }}>🏢 Registered Office: 47, Ekta Colony, Ajabpur, Dehradun 248001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="admission-form-col">
            <div className="admission-form-card hover-lift">
              {isSubmitted ? (
                <div className="admission-feedback-card" role="alert">
                  <div className="admission-check-circle">✓</div>
                  <h3 className="feedback-heading">Admission Enquiry Prepared</h3>
                  <p className="feedback-summary">
                    Thank you, <strong>{formData.parentName}</strong>. Your enquiry details for <strong>{formData.programInterest}</strong> are ready.
                  </p>
                  {redirectedUrl && (
                    <a
                      href={redirectedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="form-wa-button-link"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Continue to School WhatsApp (+91 92860 68945)</span>
                    </a>
                  )}
                  <div className="admission-notice-box">
                    <span className="notice-star">★</span>
                    <p>
                      <strong>Direct School Admissions Desk:</strong> If WhatsApp didn't open automatically, use the button above or call our admissions team directly at <a href="tel:+919286068945">+91 92860 68945</a>. Campus visits at <strong>Main Branch (Khasra 678, Lane No. 4, Malviya Nagar, Dehrakhas, Dehradun)</strong> require prior booking.
                    </p>
                  </div>
                  <Button variant="secondary" size="md" onClick={handleReset}>
                    Submit Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="school-enquiry-form" noValidate>
                  <div className="form-heading-lockup">
                    <span className="form-chip-lime font-accent">Early Learning Enrolment</span>
                    <h3 className="form-title-text">Enquire for Admission</h3>
                    <p className="form-subtitle-text">
                      Please provide your details and our team will get in touch with you.
                    </p>
                  </div>

                  {/* Parent / Guardian Name */}
                  <div className="form-field-group">
                    <label htmlFor="schoolParentName" className="form-field-label">
                      Parent / Guardian Name <span className="req-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      id="schoolParentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Meera Joshi"
                      className={`form-field-input ${errors.parentName ? 'has-error' : ''}`}
                    />
                    {errors.parentName && <span className="field-error-msg">{errors.parentName}</span>}
                  </div>

                  {/* Email & Phone in 2 Columns */}
                  <div className="form-fields-row">
                    <div className="form-field-group">
                      <label htmlFor="schoolEmail" className="form-field-label">
                        Email Address <span className="req-asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        id="schoolEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. meera@example.com"
                        className={`form-field-input ${errors.email ? 'has-error' : ''}`}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="schoolPhone" className="form-field-label">
                        Phone Number <span className="req-asterisk">*</span>
                      </label>
                      <input
                        type="tel"
                        id="schoolPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9286068945"
                        className={`form-field-input ${errors.phone ? 'has-error' : ''}`}
                      />
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Child's Age & Program of Interest in 2 Columns */}
                  <div className="form-fields-row">
                    <div className="form-field-group">
                      <label htmlFor="schoolChildAge" className="form-field-label">
                        Child's Age (e.g. 3 years)
                      </label>
                      <input
                        type="text"
                        id="schoolChildAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 3 years 4 months"
                        className="form-field-input"
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="programInterest" className="form-field-label">
                        Program of Interest <span className="req-asterisk">*</span>
                      </label>
                      <select
                        id="programInterest"
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="form-field-select"
                      >
                        <option value="ZION Academy Inclusive Preschool (Ages 2.5 – 5 Years)">
                          ZION Academy Inclusive Preschool (Ages 2.5 – 5 Years)
                        </option>
                        <option value="School Readiness & Developmental Transition (Ages 4 – 6 Years)">
                          School Readiness &amp; Transition (Ages 4 – 6 Years)
                        </option>
                        <option value="Special Education & Individualised Educational Planning (IEP)">
                          Special Education &amp; IEP Support
                        </option>
                        <option value="Social Communication & Guided Peer Play">
                          Social Communication &amp; Peer Playgroup
                        </option>
                        <option value="General Early Learning Admission Enquiry">
                          General Early Learning Admission Enquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="form-field-group">
                    <label htmlFor="schoolMessage" className="form-field-label">
                      Tell Us About Your Child
                    </label>
                    <textarea
                      id="schoolMessage"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your child's interests, developmental milestones, or any questions about our inclusive classroom environment..."
                      className="form-field-textarea"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="school-submit-wa-btn" style={{ width: '100%' }}>
                    <svg className="form-wa-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Submit Enquiry via WhatsApp</span>
                  </Button>

                  <p className="form-terms-note">
                    🌱 Prior appointment required for campus walkthroughs. We welcome every family with respect and care.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
