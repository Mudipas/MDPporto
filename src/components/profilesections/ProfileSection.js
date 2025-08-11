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
          <div className="profile-btn-container">
            <a
              href="/cv/Curriculum%20Vitae_Muh.%20Ditra%20Pamungkas_Informatika.pdf"
              download="CV_Muh_Ditra_Pamungkas.pdf"
              className="futuristic-btn"
              aria-label="Unduh CV dalam format PDF"
            >
              <span className="moving-stripes">
                <span className="stripe"></span>
                <span className="stripe"></span>
                <span className="stripe"></span>
              </span>
              <span className="futuristic-btn-text">Unduh CV</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  </section>
);

export default ProfileSection;
