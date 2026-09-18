import React from 'react';
import './Container.css';

export default function Container({ children, className = '', style = {} }) {
  return (
    <div className={`zion-container ${className}`} style={style}>
      {children}
    </div>
  );
}
