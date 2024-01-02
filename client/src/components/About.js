import React from 'react';

const Feature = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* About Text (Left) */}
        <div className="lg:w-1/2 pr-4">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            Our team offers a range of services that help your organization develop and implement processes and policies to ensure your 
            business can achieve strategic and operational goals in complex regulatory environments. We focus on board services and regulatory 
            compliance which spans financial to operational excellence as well as assisting companies with a variety of leadership, governance 
            and safety trainings.
          </p>
          <a href="/team" className="bg-bright-turquoise-300 bg-bright-turquoise-300 hover:bg-bright-turquoise-600 py-2 px-4 rounded-full inline-block">
            Meet the Founder
          </a>
        </div>

        {/* Image (Right) */}
        <div className="lg:w-1/2">
          <img
            src="/images/about.jpg" // Replace with your feature image URL
            alt="Feature"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
