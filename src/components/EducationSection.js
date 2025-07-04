import React from 'react';
import Card from './Card';

const EducationSection = ({ isActive }) => (
  <section id="education" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <h2>Pendidikan</h2>
      <ul>
        <li><b>Universitas Islam Indonesia</b> – Magister Informatika, lulus 2023</li>
        <li><b>STMIK Sinar Nusantara Surakarta</b> – Sarjana Teknik Informatika, lulus 2019</li>
        <li><b>SMA Batik 2 Surakarta</b> – Jurusan IPA, lulus 2015</li>
      </ul>
    </Card>
  </section>
);

export default EducationSection;
