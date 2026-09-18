import React from 'react';
import './BrandShape.css';

export default function BrandShape({
  type = 'blob', // 'blob-green', 'blob-lime', 'blob-azure', 'dots', 'arc', 'wave', 'star', 'sparkle', 'circle-ring', 'scribble'
  size = 'md', // 'sm', 'md', 'lg', 'xl'
  color = null,
  className = '',
  style = {}
}) {
  if (type === 'dots') {
    return (
      <div className={`brand-shape shape-dots ${className}`} style={style} aria-hidden="true">
        <svg width="120" height="90" viewBox="0 0 120 90" fill="none">
          <pattern id="dot-pattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="3" fill={color || "var(--color-yellow-green)"} fillOpacity="0.5" />
          </pattern>
          <rect width="120" height="90" fill="url(#dot-pattern)" />
        </svg>
      </div>
    );
  }

  if (type === 'star') {
    return (
      <div className={`brand-shape shape-star ${className}`} style={style} aria-hidden="true">
        <svg width="40" height="40" viewBox="0 0 24 24" fill={color || "var(--color-lemon-lime)"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
    );
  }

  if (type === 'sparkle') {
    return (
      <div className={`brand-shape shape-sparkle ${className}`} style={style} aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color || "var(--color-yellow-green)"} strokeWidth="3" strokeLinecap="round">
          <path d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6" />
        </svg>
      </div>
    );
  }

  if (type === 'arc') {
    return (
      <div className={`brand-shape shape-arc ${className}`} style={style} aria-hidden="true">
        <svg width="90" height="90" viewBox="0 0 100 100" fill="none">
          <path
            d="M10 80 C 20 20, 80 20, 90 80"
            stroke={color || "var(--color-royal-azure)"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="8 8"
          />
        </svg>
      </div>
    );
  }

  if (type === 'wave') {
    return (
      <div className={`brand-shape shape-wave ${className}`} style={style} aria-hidden="true">
        <svg width="140" height="28" viewBox="0 0 140 28" fill="none">
          <path
            d="M4 14 Q 24 2, 44 14 T 84 14 T 124 14"
            stroke={color || "var(--color-yellow-green)"}
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (type === 'circle-ring') {
    return (
      <div className={`brand-shape shape-circle-ring ${className}`} style={style} aria-hidden="true">
        <div className="ring-circle" style={color ? { borderColor: color } : {}} />
      </div>
    );
  }

  return (
    <div
      className={`brand-shape shape-${type} size-${size} ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}
