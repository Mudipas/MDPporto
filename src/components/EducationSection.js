import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const EducationSection = ({ isActive }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import('../data/content.json').then(setContent).catch(() => setContent(null));
  }, []);

  const items = (content && content.education) || [];

  return (
    <section id="education" style={{ scrollMarginTop: '90px' }}>
      <Card className={isActive ? 'profile-active-border' : ''}>
        <h2>Pendidikan</h2>
        <ul>
          {items.length > 0 ? items.map((e, idx) => (
            <li key={idx}><b>{e.institution}</b> – {e.degree} (lulus {e.graduation})</li>
          )) : (
            <li>Data pendidikan belum tersedia.</li>
          )}
        </ul>
      </Card>
    </section>
  );
};

export default EducationSection;
