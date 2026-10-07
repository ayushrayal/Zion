import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
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

  const location = useLocation();
  const navigate = useNavigate();

  const isTherapyPage = location.pathname === '/therapy';
  const isSchoolPage = location.pathname === '/school';
  const isTeamPage = location.pathname === '/team';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
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
    { label: 'Home', path: '/', color: 'azure', isRoute: true },
    { label: 'About', path: '/#about', color: 'lime', isHash: true },
    { label: 'Founder', path: '/#founder', color: 'green', isHash: true },
    { label: 'Services', path: '/#services', color: 'azure', isHash: true },
    { label: 'Environment', path: '/#environment', color: 'lime', isHash: true },
    { label: 'Gallery', path: '/#gallery', color: 'green', isHash: true },
    { label: 'Testimonials', path: '/#testimonials', color: 'azure', isHash: true },
    { label: 'School', path: '/school', color: 'lime', isRoute: true, badge: 'Academy' },
    { label: 'Therapy', path: '/therapy', color: 'green', isRoute: true, badge: 'Clinical' },
    { label: 'Team', path: '/team', color: 'azure', isRoute: true },
    { label: 'Contact', path: '/#contact', color: 'azure', isHash: true }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.isRoute) {
      if (item.path === '/' && isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.path);
      }
      return;
    }

    // For hash items:
    const hash = item.path.replace('/', '');
    const targetId = hash.replace('#', '');

    if (isHomePage) {
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = hash;
      }
    } else {
      // Navigate to homepage with hash
      navigate(item.path);
    }
  };

  const getCtaLink = () => {
    if (isTherapyPage) return '#assessment-form';
    if (isSchoolPage) return '#admission-form';
    if (isTeamPage) return '#team-directory';
    return '/#contact';
  };

  const handleCtaClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (isTherapyPage) {
      const el = document.getElementById('assessment-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (isSchoolPage) {
      const el = document.getElementById('admission-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (isTeamPage) {
      const el = document.getElementById('team-directory');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      if (isHomePage) {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/#contact');
      }
    }
  };

  const getCtaText = () => {
    if (isTherapyPage) return 'Book Assessment';
    if (isSchoolPage) return 'Enquire Admission';
    if (isTeamPage) return 'Consult Specialists';
    return 'Book Consultation';
  };

  const isLinkActive = (item) => {
    if (item.label === 'Team' && isTeamPage) return true;
    if (item.label === 'Therapy' && isTherapyPage) return true;
    if (item.label === 'School' && isSchoolPage) return true;
    if (item.label === 'Home' && isHomePage && !location.hash) return true;
    return false;
  };

  return (
    <header className={`zion-navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* Playful Top Color Ribbon strictly in Brand Palette */}
      <div className="navbar-top-ribbon" aria-hidden="true">
        <span className="ribbon-seg seg-azure" />
        <span className="ribbon-seg seg-green" />
        <span className="ribbon-seg seg-lime" />
        <span className="ribbon-seg seg-azure" />
      </div>

      <Container className="navbar-container">
        {/* Brand Logo with Colorful Badge */}
        <a
          href="/"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, { label: 'Home', path: '/', isRoute: true })}
          aria-label="ZION CARE"
        >
          <div className="navbar-logo-badge">
            <img src="/zionlogo.PNG" alt="ZION Logo" className="navbar-logo-img" />
            <span className="logo-active-dot" title="Active Care Ecosystem" />
          </div>
          <div className="brand-text-lockup">
            <div className="brand-title-row">
              <span className="brand-name">ZION</span>
              <span className="brand-leaf-tag">CARE</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links with Colorful Pill Hover & Active States */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav-list">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <li key={link.label} className="nav-item">
                  <a
                    href={link.path}
                    className={`nav-link hover-pill-${link.color} ${active ? `is-active active-${link.color}` : ''}`}
                    onClick={(e) => handleNavClick(e, link)}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span className={`link-dot dot-${link.color}`} />
                    <span className="link-text">{link.label}</span>
                    {link.badge && <span className={`nav-badge-pill badge-${link.color}`}>{link.badge}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Navbar Right Action CTA */}
        <div className="navbar-action">
          <Button
            href={getCtaLink()}
            onClick={handleCtaClick}
            variant="primary"
            size="sm"
            className="navbar-cta-btn"
          >
            {getCtaText()}
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

      {/* Mobile Drawer Backdrop & Drawer Portalled Directly to Body */}
      {typeof document !== 'undefined' && createPortal(
        <>
          <div
            ref={backdropRef}
            className={`mobile-backdrop ${isMobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden={!isMobileMenuOpen}
          />

          <div
            ref={drawerRef}
            className={`mobile-drawer ${isMobileMenuOpen ? 'is-open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
            aria-hidden={!isMobileMenuOpen}
          >
            <BrandShape type="blob-lime" size="sm" style={{ top: -30, right: -30, opacity: 0.25 }} />
            <BrandShape type="blob-azure" size="sm" style={{ bottom: 20, left: -30, opacity: 0.2 }} />

            <div className="mobile-drawer-header">
              <div className="drawer-brand">
                <img src="/zionlogo.PNG" alt="ZION Logo" className="drawer-logo-img" />
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
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);
                    return (
                      <li key={link.label} className="mobile-nav-item">
                        <a
                          href={link.path}
                          className={`mobile-nav-link link-color-${link.color} ${active ? `is-active-mobile active-${link.color}` : ''}`}
                          onClick={(e) => handleNavClick(e, link)}
                          aria-current={active ? 'page' : undefined}
                        >
                          <span className={`mobile-nav-bullet bullet-${link.color}`} />
                          <span>{link.label}</span>
                          {link.badge && <span className={`mobile-badge-chip badge-${link.color}`}>{link.badge}</span>}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mobile-drawer-footer">
                <Button
                  href={getCtaLink()}
                  variant="primary"
                  size="md"
                  style={{ width: '100%' }}
                  onClick={handleCtaClick}
                >
                  {getCtaText()}
                </Button>
                <div className="mobile-contact-meta">
                  <a href="tel:+919286068945" className="mobile-phone-link">
                    📞 +91 92860 68945
                  </a>
                  <span className="mobile-location-meta">
                    📍 Main Branch: Khasra 678, Lane No. 4, Malviya Nagar, Dehrakhas, Dehradun
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
