import React, { useEffect, useState } from 'react';
import TextTransition from './TextTransition';
import '../../styles/TextProfile.css';

const TextProfile = () => {
  const [content, setContent] = useState(null);
  const greetingsFallback = [
    "Halo!",
    "Saya Muh. Ditra Pamungkas",
    "Saya seorang Programmer",
    "Saya seorang Developer"
  ];

  useEffect(() => {
    // Lazy load JSON content
    import('../../data/content.json')
      .then((mod) => setContent(mod))
      .catch(() => setContent(null));
  }, []);

  return (
    <div className="text-profile">
      <div className="profile-header">
        <h1 className="profile-greeting">
          <TextTransition 
            texts={(content && content.profile && content.profile.greetings) || greetingsFallback} 
            typingSpeed={80}
            pauseDuration={1000}
            className="greeting-transition"
          />
        </h1>
      </div>
      
      <div className="profile-description">
        <p>{(content && content.profile && content.profile.summary) || 'Profil singkat belum tersedia.'}</p>
      </div>
      
      <div className="profile-stats">
        <div className="stat-item">
          <span className="stat-number">{(content && content.profile && content.profile.stats && content.profile.stats.yearsExperience) || '3+'}</span>
          <span className="stat-label">Tahun Pengalaman</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{(content && content.profile && content.profile.stats && content.profile.stats.projectsCompleted) || '50+'}</span>
          <span className="stat-label">Proyek Selesai</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{(content && content.profile && content.profile.stats && content.profile.stats.clientSatisfaction) || '100%'}</span>
          <span className="stat-label">Kepuasan Klien</span>
        </div>
      </div>
    </div>
  );
};

export default TextProfile;
