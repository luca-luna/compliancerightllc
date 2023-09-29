import React from 'react';
import Navbar from './Navbar'; // Import your Navbar component

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Landing Page */}
      <section id="landing-page">
        <div
            className="h-screen flex items-center"
            style={{
            backgroundImage: `url('/images/landing.jpg')`, // Reference the image using its path
            backgroundPosition: 'left center', // Adjust background position
            backgroundSize: 'cover', // Maintain image cover effect
            }}
        >
            <div className="p-8 mt-64 text-white max-w-md">
            <h1 className="text-4xl font-semibold mb-4">
                Welcome to ComplianceRight LLC
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt arcu eget augue placerat, in viverra turpis vehicula.
                Integer vel elit eu lorem scelerisque laoreet in vel mi.
            </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
