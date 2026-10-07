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

    /**
     * INTEGRATION POINT:
     * When backend endpoint is active, dispatch data to your API:
     * e.g. await fetch('/api/therapy-assessment', { method: 'POST', body: JSON.stringify(formData) });
     * Currently running frontend validation & state feedback.
     */
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
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
                    Thank you, <strong>{formData.parentName}</strong>. Your assessment details for <strong>{formData.therapyInterest}</strong> have been validated.
                  </p>
                  <div className="feedback-notice-box">
                    <span className="notice-pin">📍</span>
                    <p>
                      <strong>Integration Note:</strong> This form is configured for the ZION frontend. To confirm your immediate assessment slot at our <strong>Main Branch (Khasra 678, Lane No. 4, Malviya Nagar, Dehrakhas, Dehradun)</strong> or Registered Office, our clinical coordinator is available at <a href="tel:+919286068945">+91 92860 68945</a>.
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

                  <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                    Request Assessment Consultation
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
