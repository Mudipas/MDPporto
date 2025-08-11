import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const ExperienceSection = ({ isActive }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import('../data/content.json').then(setContent).catch(() => setContent(null));
  }, []);
  const items = (content && content.experience) || [];
  return (
    <section id="experience" style={{ scrollMarginTop: '90px' }}>
      <Card className={isActive ? 'profile-active-border' : ''}>
        <h2>Pengalaman & Sertifikasi</h2>
        <ul>
          {items.length > 0 ? items.map((x, idx) => (
            <li key={idx}>{x}</li>
          )) : (
            <li>Data pengalaman belum tersedia.</li>
          )}
        </ul>
      </Card>
    </section>
  );
};

export default ExperienceSection;
