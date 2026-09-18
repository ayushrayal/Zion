import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({
  eyebrow,
  title,
  tagline,
  taglineFont = 'nunito', // 'nunito' or 'kalam'
  description,
  align = 'left', // 'left', 'center'
  accentColor = 'azure', // 'azure', 'green', 'lime'
  className = ''
}) {
  return (
    <div className={`section-heading align-${align} accent-${accentColor} ${className}`}>
      {eyebrow && (
        <div className="heading-eyebrow-wrapper">
          <span className="eyebrow-dot" />
          <span className="heading-eyebrow meta-text">
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h2 className="heading-title">
          {title}
        </h2>
      )}
      {tagline && (
        <p className={`heading-tagline ${taglineFont === 'kalam' ? 'font-accent' : ''}`}>
          {tagline}
        </p>
      )}
      {description && <p className="heading-description lead">{description}</p>}
    </div>
  );
}
