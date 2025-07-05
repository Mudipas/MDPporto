import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import '../styles/App.css';
import GearButton from './GearButton';

const scrollToSection = (e, id) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const navItems = [
  { id: 'profile', label: 'Profile' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ setActiveSection }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleNavClick = (e, id) => {
    scrollToSection(e, id);
    if (setActiveSection) setActiveSection(id);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo custom-logo">
        <span className="logo-bracket left">⌞</span>
        <span className="logo-text">𝑀DP</span>
        <span className="logo-bracket right">⌝</span>
      </div>
      <ul className="navbar-menu">
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={e => handleNavClick(e, item.id)}
              className={'navbar-link'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <GearButton
        onClick={toggleTheme}
        ariaLabel="Toggle dark/light mode"
        icon={theme === 'dark' ? '☀️' : '🌙'}
      />
    </nav>
  );
};

export default Navbar;
