import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Features from './components/Features';

import Footer from './components/Footer';
import './index.css';

import { animateScroll as scroll } from 'react-scroll';

// Enable smooth scrolling behavior
scroll.scrollToTop({
  duration: 300,
  smooth: true,
});


function App() {
  return (
    <div>
      <LandingPage />
      <About />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
