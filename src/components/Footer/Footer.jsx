import React from 'react';
import { FiPhone, FiMapPin, FiHeart } from 'react-icons/fi';
import './Footer.css';

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About ZION', href: '#about' },
  { name: 'Meet Founder', href: '#founder' },
  { name: 'Our Services', href: '#services' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <a href="#hero" className="footer-brand">
              <span className="footer-brand-title font-display">ZION</span>
              <span className="footer-brand-subtitle">Educational & Rehabilitation Society</span>
            </a>
            <p className="footer-brand-thought font-display">"Where Every Milestone Matters."</p>
            <p className="footer-desc">
              Dedicated to supporting children and families through early intervention, child development, therapies, and inclusive education in Dehradun.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Summary */}
          <div className="footer-col">
            <h4 className="footer-col-title">Location & Contact</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <FiMapPin className="footer-icon" aria-hidden="true" />
                <span>Ajabpur, Dehradun, Uttarakhand</span>
              </div>
              <div className="footer-contact-item">
                <FiPhone className="footer-icon" aria-hidden="true" />
                <div className="footer-phones">
                  <a href="tel:9286068945">9286068945</a>
                  <span>/</span>
                  <a href="tel:8057403683">8057403683</a>
                </div>
              </div>
              <p className="footer-initiative-note">
                Early Learning & Preschool initiative commenced April 2026.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} ZION Educational & Rehabilitation Society. All rights reserved.</p>
          <p className="footer-heart">
            Crafted with <FiHeart aria-hidden="true" /> for Children & Families
          </p>
        </div>
      </div>
    </footer>
  );
}
