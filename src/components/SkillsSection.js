import React, { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/App.css';

const SkillsSection = ({ isActive }) => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    import('../data/content.json').then(setContent).catch(() => setContent(null));
  }, []);
  const tech = (content && content.skills && content.skills.technical) || [];
  const langs = (content && content.skills && content.skills.languages) || [];
  return (
    <section id="skills" style={{ scrollMarginTop: '90px' }}>
      <Card className={isActive ? 'profile-active-border' : ''}>
        <h2>Keahlian Teknis</h2>
        <ul>
          {tech.length > 0 ? tech.map((s, idx) => <li key={idx}>{s}</li>) : <li>Data keahlian belum tersedia.</li>}
        </ul>
        <h4>Bahasa:</h4>
        <ul>
          {langs.length > 0 ? langs.map((l, idx) => <li key={idx}>{l}</li>) : <li>—</li>}
        </ul>
      </Card>
    </section>
  );
};

export default SkillsSection;
