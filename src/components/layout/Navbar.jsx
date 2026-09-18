import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './Container';
import Button from '../ui/Button';
import BrandShape from '../ui/BrandShape';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const menuTimelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerRef.current || !backdropRef.current) return;

    const ctx = gsap.context(() => {
      menuTimelineRef.current = gsap.timeline({ paused: true })
        .to(backdropRef.current, {
          opacity: 1,
          visibility: 'visible',
          duration: 0.3,
          ease: 'power2.out'
        })
        .fromTo(
          drawerRef.current,
          { x: '100%' },
          { x: '0%', duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo(
          '.mobile-nav-link',
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, stagger: 0.05, duration: 0.3, ease: 'power2.out' },
          '-=0.2'
        );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!menuTimelineRef.current) return;

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      menuTimelineRef.current.play();
    } else {
      document.body.style.overflow = '';
      menuTimelineRef.current.reverse();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', color: 'azure' },
    { label: 'About', href: '#about', color: 'lime' },
    { label: 'Founder', href: '#founder', color: 'green' },
    { label: 'Services', href: '#services', color: 'azure' },
    { label: 'Environment', href: '#environment', color: 'lime' },
    { label: 'Gallery', href: '#gallery', color: 'green' },
    { label: 'Testimonials', href: '#testimonials', color: 'azure' },
    { label: 'School', href: '#school', color: 'lime' },
    { label: 'Therapy', href: '#therapy', color: 'green' },
    { label: 'Contact', href: '#contact', color: 'azure' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`zion-navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Playful Top Color Ribbon */}
      <div className="navbar-top-ribbon" aria-hidden="true">
        <span className="ribbon-seg seg-azure" />
        <span className="ribbon-seg seg-green" />
        <span className="ribbon-seg seg-lime" />
        <span className="ribbon-seg seg-azure" />
      </div>

      <Container className="navbar-container">
        {/* Brand Logo with Colorful Badge */}
        <a href="#hero" className="navbar-brand" aria-label="ZION Educational & Rehabilitation Society">
          <div className="navbar-logo-badge">
            <img src="/zionlogo.PNG" alt="ZION Logo" className="navbar-logo-img" />
            <span className="logo-active-dot" title="Active Society Ecosystem" />
          </div>
          <div className="brand-text-lockup">
            <div className="brand-title-row">
              <span className="brand-name">ZION</span>
              <span className="brand-leaf-tag">CARE</span>
            </div>
            <span className="brand-society">Educational &amp; Rehabilitation Society</span>
          </div>
        </a>

        {/* Desktop Navigation Links with Colorful Pill Hover */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className={`nav-link hover-pill-${link.color}`}>
                  <span className={`link-dot dot-${link.color}`} />
                  <span className="link-text">{link.label}</span>
                  {link.badge && <span className="nav-badge-pill">{link.badge}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navbar Right Action CTA */}
        <div className="navbar-action">
          <Button href="#contact" variant="primary" size="sm" className="navbar-cta-btn">
            Book Consultation
          </Button>

          {/* Hamburger Toggle */}
          <button
            type="button"
            className={`hamburger-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
            <span className="hamburger-bar" />
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Backdrop */}
      <div
        ref={backdropRef}
        className="mobile-backdrop"
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer with Brand Colors & Organic Shape */}
      <div ref={drawerRef} className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <BrandShape type="blob-lime" size="md" style={{ top: -50, right: -50, opacity: 0.5 }} />
        <BrandShape type="blob-azure" size="sm" style={{ bottom: 20, left: -40, opacity: 0.3 }} />

        <div className="mobile-drawer-header">
          <div className="drawer-brand">
            <img src="/zionlogo.PNG" alt="ZION" className="drawer-logo-img" />
            <div>
              <span className="drawer-brand-text">ZION</span>
              <span className="drawer-sub font-accent">Where Every Milestone Matters</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <div className="mobile-drawer-body">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.label} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className={`mobile-nav-link link-color-${link.color}`}
                    onClick={handleLinkClick}
                  >
                    <span className={`mobile-nav-bullet bullet-${link.color}`} />
                    <span>{link.label}</span>
                    {link.badge && <span className="mobile-badge-chip">{link.badge}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              style={{ width: '100%' }}
              onClick={handleLinkClick}
            >
              Book Consultation
            </Button>
            <div className="mobile-contact-meta">
              <a href="tel:+919286068945" className="mobile-phone-link">
                📞 +91 92860 68945
              </a>
              <span className="mobile-location-meta">
                📍 47, Ekta Colony, Ajabpur, Dehradun
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
