import React from 'react';
import TextTransition from './TextTransition';
import '../../styles/TextProfile.css';

const TextProfile = () => {
  const greetings = [
    "Hello!",
    "I'm Muh. Ditra Pamungkas",
    "I Am a Programmer",
    "I Am a Developer"
  ];

  return (
    <div className="text-profile">
      <div className="profile-header">
        <h1 className="profile-greeting">
          <TextTransition 
            texts={greetings} 
            typingSpeed={80}
            pauseDuration={1000}
            className="greeting-transition"
          />
        </h1>
      </div>
      
      <div className="profile-description">
        <p>As a developer, I specialize in building modern, secure, and scalable web applications. I am proficient in backend frameworks such as Yii, CodeIgniter, and Laravel, and possess strong expertise in Node.js and C# for efficient API development. On the frontend, I am adept at using React.js to create dynamic user experiences. I consistently implement cybersecurity best practices in every project, ensuring that the solutions I develop are not only functional but also resilient against threats. I am enthusiastic about collaborating on innovative projects that demand full-stack expertise with a focus on quality and security.</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Years of Experience</span>
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
