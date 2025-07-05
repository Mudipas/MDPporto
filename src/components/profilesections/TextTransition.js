import React, { useState, useEffect } from 'react';

const TextTransition = ({ texts, typingSpeed = 100, pauseDuration = 1000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      // Typing phase - add one character at a time
      if (charIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        
        return () => clearTimeout(timer);
      } else {
        // Finished typing, wait for pause duration
        const timer = setTimeout(() => {
          setIsTyping(false);
          setDisplayedText('');
          setCharIndex(0);
        }, pauseDuration);
        
        return () => clearTimeout(timer);
      }
    } else {
      // Move to next text after clearing
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setIsTyping(true);
      }, 200); // Small delay before starting next text
      
      return () => clearTimeout(timer);
    }
  }, [texts, currentIndex, charIndex, isTyping, typingSpeed, pauseDuration]);

  if (!texts || texts.length === 0) return null;

  return (
    <span 
      className={`text-transition ${className}`}
      style={{
        opacity: displayedText ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out',
        minHeight: '1em',
        display: 'inline-block'
      }}
    >
      {displayedText}
      {isTyping && displayedText && (
        <span 
          className="typing-cursor"
          style={{
            animation: 'blink 1s infinite',
            marginLeft: '2px'
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default TextTransition;
