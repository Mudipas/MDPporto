import './styles/App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import View from './views/view';

function App() {
  const [activeSection, setActiveSection] = useState(null); // was 'profile', now null
  const appRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      // If click is NOT on navbar or card body, clear activeSection
      const navbar = document.querySelector('.navbar');
      const card = e.target.closest('.custom-card');
      if (
        navbar && navbar.contains(e.target)
      ) {
        // Do nothing, handled by navbar
        return;
      }
      if (card) {
        // Clicked inside card, do nothing
        return;
      }
      setActiveSection(null);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <ThemeProvider>
      <div className="App" ref={appRef}>
        <Navbar setActiveSection={setActiveSection} />
        <main>
          <View activeSection={activeSection} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
