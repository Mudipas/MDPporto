import React from 'react';

const Card = ({ children, className = '' }) => {
  // Remove accidental whitespace in className
  const cardClass = ['custom-card', className].filter(Boolean).join(' ');
  return <div className={cardClass}>{children}</div>;
};

export default Card;
