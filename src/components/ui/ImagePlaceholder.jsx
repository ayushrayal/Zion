import React from 'react';
import './ImagePlaceholder.css';

export default function ImagePlaceholder({
  aspectRatio = '16/9', // '16/9', '4/3', '1/1', '3/4', '21/9'
  label = 'Visual Space',
  sublabel = 'ZION Facility / Activity',
  badge = null,
  className = '',
  style = {}
}) {
  return (
    <div
      className={`zion-image-placeholder ${className}`}
      style={{ aspectRatio, ...style }}
      role="img"
      aria-label={`${label} - ${sublabel}`}
    >
      <div className="placeholder-grid-pattern" />
      <div className="placeholder-content">
        <div className="placeholder-brand-mark">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
