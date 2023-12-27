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
              Compliance Right, LLC is a consulting-based firm that helps organizations maximize performance by 
              developing high-performing teams in a culture of safety, ethics, and regulatory compliance."
            </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
