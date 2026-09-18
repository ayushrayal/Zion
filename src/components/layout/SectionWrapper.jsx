import React from 'react';
import './SectionWrapper.css';

export default function SectionWrapper({
  id,
  children,
  className = '',
  background = 'white', // 'white', 'subtle', 'azure-tint', 'lime-tint'
  padding = 'default', // 'default', 'compact', 'none'
  style = {}
}) {
  return (
    <section
      id={id}
      className={`section-wrapper bg-${background} padding-${padding} ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
