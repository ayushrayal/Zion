import React from 'react';
import './SectionWrapper.css';

export default function SectionWrapper({
  id,
  children,
  className = '',
  background = 'white', // 'white', 'azure', 'lime', 'green', 'black', 'subtle'
  padding = 'default', // 'default', 'compact', 'none'
  divider = null, // 'wave-top', 'wave-bottom', 'curve'
  style = {}
}) {
  return (
    <section
      id={id}
      className={`section-wrapper bg-${background} padding-${padding} ${divider ? `has-${divider}` : ''} ${className}`}
      style={style}
    >
      {divider === 'wave-top' && (
        <div className="section-wave-divider wave-top" aria-hidden="true">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 32C360 64 720 0 1080 32C1260 48 1380 56 1440 48V64H0V32Z" fill="currentColor" />
          </svg>
        </div>
      )}
      {children}
      {divider === 'wave-bottom' && (
        <div className="section-wave-divider wave-bottom" aria-hidden="true">
          <svg viewBox="0 0 1440 64" fill="none" preserveAspectRatio="none">
            <path d="M0 16C360 56 720 0 1080 32C1260 48 1380 24 1440 16V64H0V16Z" fill="currentColor" />
          </svg>
        </div>
      )}
    </section>
  );
}
