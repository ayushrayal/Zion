import React, { useState } from 'react';
import SectionWrapper from '../layout/SectionWrapper';
import Container from '../layout/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import BrandShape from '../ui/BrandShape';
import './TherapyAssessmentForm.css';

export default function TherapyAssessmentForm({ selectedProgram = '' }) {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childAge: '',
    therapyInterest: selectedProgram || 'Speech & Language Therapy',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectedUrl, setRedirectedUrl] = useState(null);

  // Sync selected program if passed down
  React.useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, therapyInterest: selectedProgram }));
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

    const userMessage = formData.message?.trim() ? formData.message.trim() : 'I would like to request an assessment / therapy consultation.';
    const childAgeText = formData.childAge?.trim() ? formData.childAge.trim() : 'Not specified';
    const emailText = formData.email?.trim() ? formData.email.trim() : 'Not specified';

    // Therapy Assessment WhatsApp Message: +91 80574 03683
    const messageText = `*ZION Clinical Care – Assessment Consultation Request*

*Parent / Guardian Name:* ${formData.parentName.trim()}
*Contact Phone:* ${formData.phone.trim()}
*Email Address:* ${emailText}
*Child's Age:* ${childAgeText}
*Therapy of Interest:* ${formData.therapyInterest}

*Observations / Notes:*
${userMessage}

Please connect with us regarding scheduling a clinical assessment.

Thank you.`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918057403683?text=${encodedMessage}`;

    setRedirectedUrl(whatsappUrl);
    setIsSubmitted(true);

    // Open Therapy Admissions WhatsApp chat
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
      therapyInterest: 'Speech & Language Therapy',
      message: ''
    });
    setErrors({});
  };

  return (
    <SectionWrapper id="assessment-form" background="lime" padding="default">
      {/* Decorative Organic Brand Accents */}
      <BrandShape type="blob-azure" size="lg" style={{ top: -50, right: -40, opacity: 0.25 }} className="animate-float" />
      <BrandShape type="blob-green" size="md" style={{ bottom: -30, left: -30, opacity: 0.3 }} className="animate-float-delayed" />
      <BrandShape type="star" color="var(--color-royal-azure)" style={{ top: 40, left: '8%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="var(--color-yellow-green)" style={{ bottom: 30, right: '8%', opacity: 0.7 }} />

      <Container>
        <SectionHeading
          eyebrow="Clinical Assessment Consultation"
          title="BOOK AN ASSESSMENT"
          tagline="Care That Begins With Understanding"
          description="Schedule a comprehensive clinical assessment with our multidisciplinary team. We take time to listen to your observations, evaluate developmental strengths, and map clear, measurable milestones."
        />

        <div className="assessment-grid">
          {/* Left Column: Assessment Guide & Contact Meta */}
          <div className="assessment-info-col">
            <div className="assessment-guide-card hover-lift">
              <div className="guide-header">
                <span className="guide-badge font-accent">What to Expect</span>
                <h3 className="guide-title">The Assessment Pathway</h3>
              </div>

              <div className="pathway-steps-list">
                <div className="pathway-step">
                  <div className="step-num step-azure">1</div>
                  <div>
                    <h5 className="step-heading">Initial Consultation &amp; History</h5>
                    <p className="step-desc">
                      Detailed discussion regarding your child's communication routines, milestones, sensory preferences, and family priorities.
                    </p>
                  </div>
                </div>

                <div className="pathway-step">
                  <div className="step-num step-green">2</div>
                  <div>
                    <h5 className="step-heading">Play-Based &amp; Clinical Evaluation</h5>
                    <p className="step-desc">
                      Standardised screening combined with comfortable, child-friendly observation to assess articulation, language, sensory, or motor skills.
                    </p>
                  </div>
                </div>

                <div className="pathway-step">
                  <div className="step-num step-lime">3</div>
                  <div>
                    <h5 className="step-heading">Collaborative Goal Roadmap</h5>
                    <p className="step-desc">
                      Clear findings review with parents outlining recommended therapy frequency, individualised goals, and home routine strategies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Clinical Lines */}
              <div className="assessment-quick-contact">
                <span className="quick-label font-accent">Direct Assessment Line:</span>
                <div className="quick-numbers">
                  <a href="tel:+919286068945" className="quick-phone">+91 92860 68945</a>
                  <span className="quick-sep">•</span>
                  <a href="tel:+918057403683" className="quick-phone">+91 80574 03683</a>
                </div>
                <p className="quick-hours">
                  Monday to Saturday • Prior Appointment Required
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Assessment Request Form */}
          <div className="assessment-form-col">
            <div className="form-card hover-lift">
              {isSubmitted ? (
                <div className="form-feedback-card" role="alert">
                  <div className="feedback-check-circle">✓</div>
                  <h3 className="feedback-title">Assessment Request Prepared</h3>
                  <p className="feedback-lead">
                    Thank you, <strong>{formData.parentName}</strong>. Your assessment details for <strong>{formData.therapyInterest}</strong> are ready.
                  </p>
                  {redirectedUrl && (
                    <a
                      href={redirectedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="therapy-wa-button-link"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      <span>Continue to Therapy WhatsApp (+91 80574 03683)</span>
                    </a>
                  )}
                  <div className="feedback-notice-box">
                    <span className="notice-pin">📍</span>
                    <p>
                      <strong>Direct Clinical Helpline:</strong> If WhatsApp did not open automatically, use the button above or connect directly with our clinical coordinator at <a href="tel:+918057403683">+91 80574 03683</a>. Clinical assessments require prior appointment.
                    </p>
                  </div>
                  <Button variant="secondary" size="md" onClick={handleReset}>
                    Submit Another Assessment Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="therapy-enquiry-form" noValidate>
                  <div className="form-top-lockup">
                    <span className="form-chip font-accent">Confidential &amp; Supportive</span>
                    <h3 className="form-main-title">Request an Assessment</h3>
                    <p className="form-main-sub">
                      Fill out this form and our clinical coordinator will connect with you.
                    </p>
                  </div>

                  {/* Parent Name */}
                  <div className="field-group">
                    <label htmlFor="parentName" className="field-label">
                      Parent / Guardian Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Sharma"
                      className={`field-input ${errors.parentName ? 'has-error' : ''}`}
                    />
                    {errors.parentName && <span className="error-text">{errors.parentName}</span>}
                  </div>

                  {/* Email & Phone in 2 Columns */}
                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="email" className="field-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. parent@example.com"
                        className={`field-input ${errors.email ? 'has-error' : ''}`}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="field-group">
                      <label htmlFor="phone" className="field-label">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9286068945"
                        className={`field-input ${errors.phone ? 'has-error' : ''}`}
                      />
                      {errors.phone && <span className="error-text">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Child's Age & Therapy Interest in 2 Columns */}
                  <div className="field-row">
                    <div className="field-group">
                      <label htmlFor="childAge" className="field-label">
                        Child's Age (e.g. 3 years)
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g. 3.5 years"
                        className="field-input"
                      />
                    </div>

                    <div className="field-group">
                      <label htmlFor="therapyInterest" className="field-label">
                        Therapy of Interest <span className="req">*</span>
                      </label>
                      <select
                        id="therapyInterest"
                        name="therapyInterest"
                        value={formData.therapyInterest}
                        onChange={handleChange}
                        className="field-select"
                      >
                        <option value="Speech & Language Therapy">Speech &amp; Language Therapy</option>
                        <option value="Hearing & Audiology Support">Hearing &amp; Audiology Support</option>
                        <option value="Occupational Therapy & Sensory Integration">Occupational Therapy &amp; Sensory Integration</option>
                        <option value="Positive Behaviour Support">Positive Behaviour Support</option>
                        <option value="Early Intervention Centre Programs">Early Intervention Centre Programs</option>
                        <option value="Family Guidance & Caregiver Coaching">Family Guidance &amp; Caregiver Coaching</option>
                        <option value="Comprehensive Multidisciplinary Assessment">Comprehensive Multidisciplinary Assessment</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="field-group">
                    <label htmlFor="message" className="field-label">
                      Additional Message / Observations
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share any specific milestones, communication habits, or concerns you would like our team to evaluate..."
                      className="field-textarea"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="therapy-submit-wa-btn" style={{ width: '100%' }}>
                    <svg className="form-wa-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>Request Assessment via WhatsApp</span>
                  </Button>

                  <p className="form-disclaimer">
                    🔒 Prior appointment required. Your information is treated with strict clinical confidentiality.
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
