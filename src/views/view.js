import React from 'react';
import ProfileSection from '../components/profilesections/ProfileSection';
import EducationSection from '../components/EducationSection';
import ExperienceSection from '../components/ExperienceSection';
import PortfolioSection from '../components/PortfolioSection';
import BlogSection from '../components/BlogSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const View = ({ activeSection }) => {
  return (
    <>
      <ProfileSection isActive={activeSection === 'profile' && activeSection !== null} />
      <EducationSection isActive={activeSection === 'education' && activeSection !== null} />
      <ExperienceSection isActive={activeSection === 'experience' && activeSection !== null} />
      <SkillsSection isActive={activeSection === 'skills' && activeSection !== null} />
      <PortfolioSection isActive={activeSection === 'portfolio' && activeSection !== null} />
      <BlogSection isActive={activeSection === 'blog' && activeSection !== null} />
      <ContactSection isActive={activeSection === 'contact' && activeSection !== null} />
    </>
  );
};

export default View;
