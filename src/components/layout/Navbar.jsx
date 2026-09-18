import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from './Container';
import Button from '../ui/Button';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);
  const menuTimelineRef = useRef(null);

  // Monitor scroll for subtle shadow/border change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for mobile drawer
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

  // Handle open/close state
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

  // Handle escape key
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
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Founder', href: '#founder' },
    { label: 'Services', href: '#services' },
    { label: 'Environment', href: '#environment' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'School', href: '#school' },
    { label: 'Therapy', href: '#therapy' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`zion-navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <Container className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand" aria-label="ZION Educational & Rehabilitation Society">
          <img src="/zionlogo.PNG" alt="ZION Logo" className="navbar-logo-img" />
          <div className="brand-text-lockup">
            <span className="brand-name">ZION</span>
            <span className="brand-society">Educational &amp; Rehabilitation Society</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Navbar Right Action CTA */}
        <div className="navbar-action">
          <Button href="#contact" variant="primary" size="sm">
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

      {/* Mobile Navigation Drawer */}
      <div ref={drawerRef} className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        <div className="mobile-drawer-header">
          <div className="drawer-brand">
            <img src="/zionlogo.PNG" alt="ZION" className="drawer-logo-img" />
            <span className="drawer-brand-text">ZION</span>
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
                    className="mobile-nav-link"
                    onClick={handleLinkClick}
                  >
                    {link.label}
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
                📍 Ekta Colony, Ajabpur, Dehradun
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
