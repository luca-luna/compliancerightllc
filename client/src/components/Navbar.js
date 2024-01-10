import React, { useState } from 'react';

const Navbar = () => {
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
    <nav className="bg-bright-turquoise-300 bg-opacity-70 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="nav-toggle cursor-pointer md:hidden" onClick={toggleNav}>
            <i className={`fas fa-bars text-white ${isNavOpen ? 'hidden' : ''}`} />
            <i className={`fas fa-times text-white ${isNavOpen ? '' : 'hidden'}`} />
          </div>
        </div>
        <div className={`nav-buttons ${isNavOpen ? 'flex' : 'hidden md:flex'}`}>
          <ul className="flex space-x-6">
            <li className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300">
              <a href="#home" onClick={(e) => scrollToSection(e, 'landing-page')}>
                Home
              </a>
            </li>
            <li className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                About
              </a>
            </li>
            <li className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300">
              <a href="#features" onClick={(e) => scrollToSection(e, 'features')}>
                Services
              </a>
            </li>
            <li className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
