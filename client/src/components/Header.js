import React, { useState } from 'react';
//import './LandingPage.css';
//import WelcomeBlurb from './WelcomeBlurb';

const LandingPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setIsNavOpen(false); // Close the mobile navigation menu
  };

  return (
    <div id="landing-page" className="landing-page">
      <header className="floating-header">
        <nav>
          <div className="nav-toggle" onClick={toggleNav}>
            <div className={`bar ${isNavOpen ? 'open' : ''}`} />
            <div className={`bar ${isNavOpen ? 'open' : ''}`} />
            <div className={`bar ${isNavOpen ? 'open' : ''}`} />
          </div>
          <div className={`nav-buttons ${isNavOpen ? 'nav-dropdown open' : 'nav-dropdown'}`}>
            <ul>
              <li>
                <a href="#home" onClick={(e) => scrollToSection(e, 'landing-page')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#resume" onClick={(e) => scrollToSection(e, 'education')}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <WelcomeBlurb /> */}
    </div>
  );
};

export default LandingPage;
