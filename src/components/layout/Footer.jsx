import React from 'react';
import Container from './Container';
import SocialLinks from '../ui/SocialLinks';
import BrandShape from '../ui/BrandShape';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="zion-footer" role="contentinfo">
      {/* Decorative Organic Shapes in Brand Palette */}
      <BrandShape type="blob-lime" size="lg" style={{ top: -60, right: -40, opacity: 0.2 }} />
      <BrandShape type="blob-azure" size="lg" style={{ bottom: -60, left: -40, opacity: 0.25 }} />
      <BrandShape type="star" color="var(--color-yellow-green)" style={{ top: 30, right: '15%' }} className="animate-spin-slow" />
      <BrandShape type="dots" color="rgba(213, 225, 81, 0.3)" style={{ bottom: 40, right: '6%' }} />

      <Container className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo-lockup">
              <img src="/zionlogo.PNG" alt="ZION Logo" className="footer-logo-img" />
              <div>
                <span className="footer-brand-title">ZION</span>
                <span className="footer-brand-subtitle">Educational &amp; Rehabilitation Society</span>
              </div>
            </div>
            <p className="footer-tagline-text font-accent">
              “Where Every Milestone Matters”
            </p>
            <p className="footer-bio">
              Empowering Communication. Nurturing Potential. Supporting Every Journey. Multidisciplinary care bringing speech therapy, early intervention, occupational therapy, and inclusive early education together.
            </p>
            <div className="footer-social-wrapper">
              <SocialLinks />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-links-col">
            <div className="footer-col-header">
              <span className="col-header-dot dot-azure" />
              <h4 className="footer-heading">Navigation</h4>
            </div>
            <ul className="footer-list">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About ZION</a></li>
              <li><a href="#founder">Meet the Founder</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#environment">Our Environment</a></li>
              <li><a href="#gallery">Photo Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#journey">The ZION Journey</a></li>
            </ul>
          </div>

          {/* Core Domains Column */}
          <div className="footer-links-col">
            <div className="footer-col-header">
              <span className="col-header-dot dot-green" />
              <h4 className="footer-heading">Programs</h4>
            </div>
            <ul className="footer-list">
              <li><a href="#services">Speech &amp; Hearing Clinic</a></li>
              <li><a href="#services">Early Intervention Centre</a></li>
              <li><a href="#school">Inclusive Early Learning &amp; Preschool</a></li>
              <li><a href="#therapy">Occupational Therapy</a></li>
              <li><a href="#therapy">Behaviour Support &amp; Special Education</a></li>
              <li><a href="#services">Family Guidance &amp; Training</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-contact-col">
            <div className="footer-col-header">
              <span className="col-header-dot dot-lime" />
              <h4 className="footer-heading">Society Office</h4>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <address className="contact-address">
                47, Ekta Colony, Ajabpur<br />
                Dehradun 248001, Uttarakhand
              </address>
            </div>
            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <a href="tel:+919286068945" className="footer-phone-link">+91 92860 68945</a>
                <br />
                <a href="tel:+918057403683" className="footer-phone-link">+91 80574 03683</a>
              </div>
            </div>

            {/* Lemon-Lime Highlight Badge */}
            <div className="footer-hours-badge">
              <span className="hours-badge-dot" />
              <span>Prior Appointment Required</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {currentYear} ZION Educational &amp; Rehabilitation Society. All rights reserved.
          </p>
          <div className="footer-bottom-meta">
            <span className="meta-society-pill font-accent">Registered Non-Profit Society • Dehradun</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
