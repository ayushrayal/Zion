import React from 'react';
import './BrandShape.css';

export default function BrandShape({
  type = 'blob', // 'blob-green', 'blob-lime', 'blob-azure', 'dots', 'arc', 'wave', 'circle-ring'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  className = '',
  style = {}
}) {
  if (type === 'dots') {
    return (
      <div
        className={`brand-shape shape-dots ${className}`}
        style={style}
        aria-hidden="true"
      >
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2.5" fill="var(--color-yellow-green)" fillOpacity="0.4" />
          </pattern>
          <rect width="100" height="80" fill="url(#dot-pattern)" />
        </svg>
      </div>
    );
  }

  if (type === 'arc') {
    return (
      <div
        className={`brand-shape shape-arc ${className}`}
        style={style}
        aria-hidden="true"
      >
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path
            d="M10 80 C 20 20, 80 20, 90 80"
            stroke="var(--color-royal-azure)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="6 8"
            opacity="0.35"
          />
        </svg>
      </div>
    );
  }

  if (type === 'wave') {
    return (
      <div
        className={`brand-shape shape-wave ${className}`}
        style={style}
        aria-hidden="true"
      >
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none">
          <path
            d="M4 12 Q 24 2, 44 12 T 84 12 T 116 12"
            stroke="var(--color-yellow-green)"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    );
  }

  if (type === 'circle-ring') {
    return (
      <div
        className={`brand-shape shape-circle-ring ${className}`}
        style={style}
        aria-hidden="true"
      >
        <div className="ring-circle" />
      </div>
    );
  }

  // Default organic blobs
  return (
    <div
      className={`brand-shape shape-${type} size-${size} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
