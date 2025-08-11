import React from 'react';
import ProfileImage from '../../images/ProfileImage.jpeg';
import '../../styles/ProfileImage.css';

const ImageProfile = () => {
  return (
    <div className="profile-image-container">
      <img 
        src={ProfileImage} 
        alt="Profile" 
        className="profile-image"
      />
    </div>
  );
};

export default ImageProfile;
