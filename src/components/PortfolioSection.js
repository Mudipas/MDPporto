import React from 'react';
import Card from './Card';
import '../styles/App.css';

const dummyProjects = [
  { title: 'Personal Website', desc: 'Portfolio website built with React, CSS, and modern design.' },
  { title: 'E-Commerce UI', desc: 'Frontend e-commerce mockup with responsive layout.' },
  { title: 'Landing Page', desc: 'Landing page for product launch with smooth scroll and animations.' },
];

const PortfolioSection = ({ isActive }) => (
  <section id="portfolio" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <h2>Portfolio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {dummyProjects.map((proj, idx) => (
          <div key={idx} style={{ minWidth: 220, flex: 1 }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>{proj.title}</h4>
            <p style={{ margin: 0 }}>{proj.desc}</p>
          </div>
        ))}
      </div>
    </Card>
  </section>
);

export default PortfolioSection;
