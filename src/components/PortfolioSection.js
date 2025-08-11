import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/App.css';


const PortfolioSection = ({ isActive }) => (
  <section id="portfolio" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
  <h2>Portofolio</h2>
      <PortfolioList />
    </Card>
  </section>
);

const PortfolioList = () => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import('../data/content.json').then(setContent).catch(() => setContent(null));
  }, []);
  const projects = (content && content.portfolio) || [];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      {(projects.length > 0 ? projects : []).map((proj, idx) => (
          <div key={idx} style={{ minWidth: 220, flex: 1 }}>
            <h4 style={{ margin: '0 0 0.3rem 0' }}>{proj.title}</h4>
            <p style={{ margin: 0 }}>{proj.desc}</p>
          </div>
        ))}
      {projects.length === 0 && <p>Data portofolio belum tersedia.</p>}
    </div>
  );
};

export default PortfolioSection;
