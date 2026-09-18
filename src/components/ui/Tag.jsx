import React from 'react';
import './Tag.css';

export default function Tag({
  children,
  variant = 'azure', // 'azure', 'yellow-green', 'lemon-lime', 'blue-green', 'lime-green', 'outline'
  size = 'md', // 'sm', 'md'
  icon = null,
  className = ''
}) {
  return (
    <span className={`zion-tag tag-${variant} tag-${size} ${className}`}>
      {icon && <span className="tag-icon">{icon}</span>}
      <span className="tag-text">{children}</span>
    </span>
  );
}
