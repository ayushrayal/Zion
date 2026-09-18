import React from 'react';
import './Button.css';

export default function Button({
  children,
  variant = 'primary', // 'primary', 'accent', 'secondary', 'outline-black', 'text'
  size = 'md', // 'sm', 'md', 'lg'
  href,
  onClick,
  type = 'button',
  className = '',
  icon = null,
  disabled = false,
  ...rest
}) {
  const buttonClass = `zion-btn btn-${variant} btn-${size} btn-interaction ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
        {...rest}
      >
        <span>{children}</span>
        {icon && <span className="btn-icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      <span>{children}</span>
      {icon && <span className="btn-icon">{icon}</span>}
    </button>
  );
}
