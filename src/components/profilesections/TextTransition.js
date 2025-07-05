import React, { useState, useEffect } from 'react';

const TextTransition = ({ texts, interval = 2000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const timer = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 150); // Half of transition duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  if (!texts || texts.length === 0) return null;

  return (
    <span 
      className={`text-transition ${className} ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out'
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default TextTransition;
