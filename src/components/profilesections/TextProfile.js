import React from 'react';
import TextTransition from './TextTransition';
import '../../styles/TextProfile.css';

const TextProfile = () => {
  const greetings = [
    "Hello!",
    "Saya Muh. Ditra Pamungka",
    "Saya Adalah Programmer",
    "Saya Adalah Developer"
  ];

  return (
    <div className="text-profile">
      <div className="profile-header">
        <h1 className="profile-greeting">
          <TextTransition 
            texts={greetings} 
            interval={3000}
            className="greeting-transition"
          />
        </h1>
      </div>
      
      <div className="profile-description">
        <p>Passionate about creating innovative web solutions and turning ideas into digital reality.</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Projects Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Client Satisfaction</span>
        </div>
      </div>
    </div>
  );
};

export default TextProfile;
