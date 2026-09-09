import React, { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import './Navbar.css';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Founder', href: '#founder' },
  { name: 'Services', href: '#services' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when drawer is active and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleLinkClick = (e, href) => {
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container container">
        {/* Brand Identity */}
        <a href="#hero" className="navbar-brand" onClick={(e) => handleLinkClick(e, '#hero')}>
          <div className="brand-badge font-display">ZION</div>
          <div className="brand-text">
            <span className="brand-title font-display">ZION</span>
            <span className="brand-subtitle">Educational & Rehabilitation Society</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Hamburger */}
        <div className="navbar-actions">
          <a href="tel:9286068945" className="nav-cta btn-secondary" aria-label="Call ZION at 9286068945">
            <FiPhone aria-hidden="true" />
            <span>9286068945</span>
          </a>

          <button
            className="hamburger-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-drawer"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        id="mobile-drawer" 
        className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-overlay" onClick={() => setIsOpen(false)} />
        <div className="drawer-content">
          <div className="drawer-header">
            <span className="brand-title font-display">ZION</span>
            <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close menu">
              <HiX size={24} />
            </button>
          </div>
          <ul className="drawer-nav-list">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="drawer-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="drawer-footer">
            <p className="drawer-contact-title">Ajabpur, Dehradun</p>
            <a href="tel:9286068945" className="drawer-phone">📞 9286068945</a>
            <a href="tel:8057403683" className="drawer-phone">📞 8057403683</a>
          </div>
        </div>
      </div>
    </header>
  );
}
