import React from 'react';
import Card from './Card';

const SkillsSection = ({ isActive }) => (
  <section id="skills" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <h2>Keahlian Teknis</h2>
      <ul>
        <li>Web Design, Design Thinking</li>
        <li>Frontend Coding, Backend Tech</li>
        <li>Problem-Solving</li>
        <li>Project Management Tools</li>
      </ul>
      <h4>Bahasa:</h4>
      <ul>
        <li>Indonesia</li>
        <li>English</li>
      </ul>
    </Card>
  </section>
);

export default SkillsSection;
