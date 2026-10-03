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

    /**
     * INTEGRATION POINT:
     * When backend endpoint is active, dispatch data to your API:
     * e.g. await fetch('/api/school-admission-enquiry', { method: 'POST', body: JSON.stringify(formData) });
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
                <p className="admission-location">
                  📍 47, Ekta Colony, Ajabpur, Dehradun 248001
                </p>
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
                    Thank you, <strong>{formData.parentName}</strong>. Your enquiry details for <strong>{formData.programInterest}</strong> have been validated.
                  </p>
                  <div className="admission-notice-box">
                    <span className="notice-star">★</span>
                    <p>
                      <strong>Integration Note:</strong> This form is configured for the ZION frontend. To confirm your immediate classroom visit at <strong>47, Ekta Colony, Ajabpur, Dehradun</strong>, our admissions desk is directly reachable at <a href="tel:+919286068945">+91 92860 68945</a>.
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

                  <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                    Submit Admission Enquiry
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
