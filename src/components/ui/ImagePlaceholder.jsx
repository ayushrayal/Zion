import React from 'react';
import './ImagePlaceholder.css';

export default function ImagePlaceholder({
  src = null,
  alt = '',
  objectPosition = 'center',
  aspectRatio = '16/9', // '16/9', '4/3', '1/1', '3/4', '21/9'
  label = 'Visual Space',
  sublabel = 'ZION Facility / Activity',
  badge = null,
  theme = 'azure', // 'azure', 'green', 'lime', 'warm'
  className = '',
  style = {},
  showCaption = false
}) {
  if (src) {
    return (
      <div
        className={`zion-image-card theme-${theme} ${className}`}
        style={{ aspectRatio, ...style }}
        role="img"
        aria-label={alt || `${label}${sublabel ? ' - ' + sublabel : ''}`}
      >
        <img
          src={src}
          alt={alt || label}
          className="zion-card-image"
          style={{ objectPosition }}
          loading="lazy"
        />
        {badge && <span className="zion-card-badge">{badge}</span>}
        {showCaption && (label || sublabel) && (
          <div className="zion-card-overlay">
            {label && <span className="zion-card-label">{label}</span>}
            {sublabel && <span className="zion-card-sublabel">{sublabel}</span>}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`zion-image-placeholder theme-${theme} ${className}`}
      style={{ aspectRatio, ...style }}
      role="img"
      aria-label={`${label} - ${sublabel}`}
    >
      <div className="placeholder-grid-pattern" />
      
      {/* Playful corner organic accent shapes */}
      <div className="placeholder-corner corner-top-left" />
      <div className="placeholder-corner corner-bottom-right" />
      <div className="placeholder-corner-dot dot-top-right" />
      <div className="placeholder-corner-dot dot-bottom-left" />

      <div className="placeholder-content">
        <div className="placeholder-brand-mark">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
        </div>
        {badge && <span className="placeholder-badge">{badge}</span>}
        <span className="placeholder-label">{label}</span>
        {sublabel && <span className="placeholder-sublabel">{sublabel}</span>}
      </div>
    </div>
  );
}
