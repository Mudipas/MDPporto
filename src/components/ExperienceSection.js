import React from 'react';
import Card from './Card';
import '../styles/App.css';

const ExperienceSection = ({ isActive }) => (
  <section id="experience" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <h2>Pengalaman & Sertifikasi</h2>
      <ul>
        <li>Freelance Web Programming (2022 – Present): Web design and coding with HTML, CSS, and JavaScript.</li>
        <li>Online Course Microsoft IV – Virtual Education Microsoft IV (2022).</li>
        <li>C|HFI V9 & C|EH V11 – EC-Council certifications, 2021-2022.</li>
        <li>Penataran TI Grup 2 Kopassus Triwulan IV (2021): Teaching fundamental forensics.</li>
      </ul>
    </Card>
  </section>
);

export default ExperienceSection;
