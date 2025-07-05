import React from 'react';
import Card from '../Card';
import ImageProfile from './ImageProfile';
import TextProfile from './TextProfile';
import '../../styles/App.css';

const ProfileSection = ({ isActive }) => (
  <section id="profile" style={{ scrollMarginTop: '90px' }}>
    <Card className={isActive ? 'profile-active-border' : ''}>
      <div className="profile-content">
        <div className="profile-left">
          <ImageProfile />
        </div>
        <div className="profile-right">
          <TextProfile />
        </div>
      </div>
      <h2>Profil</h2>
      <p>Saya merupakan fresh graduate dari Universitas Islam Indonesia, lulus pada tahun 2023. Saya memiliki pengetahuan dan kemampuan dalam bidang IT, software komputer, serta berbagai tools terkait. Saya juga mampu bekerja dalam tim dan komunikasi yang efektif untuk mengelola proyek.</p>
      <div className="profile-btn-container">
        <button className="futuristic-btn">
          <span className="moving-stripes">
            <span className="stripe"></span>
            <span className="stripe"></span>
            <span className="stripe"></span>
          </span>
          <span className="futuristic-btn-text">Download CV</span>
        </button>
      </div>
    </Card>
  </section>
);

export default ProfileSection;
