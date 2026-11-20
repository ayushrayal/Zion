import React from 'react';
import { Link } from 'react-router-dom';
import './Tag.css';

export default function Tag({
  children,
  variant = 'azure', // 'azure', 'yellow-green', 'lemon-lime', 'blue-green', 'lime-green', 'outline'
  size = 'md', // 'sm', 'md'
  icon = null,
  className = '',
  to = null,
  href = null,
  onClick = null
}) {
  const content = (
    <>
      {icon && <span className="tag-icon">{icon}</span>}
      <span className="tag-text">{children}</span>
    </>
  );

  const classes = `zion-tag tag-${variant} tag-${size} ${to || href || onClick ? 'tag-interactive' : ''} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <span className={classes} onClick={onClick}>
      {content}
    </span>
  );
}

