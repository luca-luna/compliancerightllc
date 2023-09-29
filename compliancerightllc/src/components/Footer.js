import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bright-turquoise-950 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Company Logo and Name */}
          <div className="flex items-center mb-4 md:mb-0">
            {/* Add your company logo here */}
            <img
              src="/images/company-logo.png" // Replace with your logo image URL
              alt="Company Logo"
              className="w-12 h-12 mr-2"
            />
            <span className="text-xl ml-10 font-semibold">ComplianceRight LLC</span>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-end">
            {/* LinkedIn Icon and Link */}
            <a
              href="https://www.linkedin.com/company/complianceright"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white mb-2"
            >
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>

            {/* Phone Icon and Number */}
            <a href="tel:+1234567890" className="text-gray-300 hover:text-white mb-2">
              <i className="fa fa-phone"></i> +1 (234) 567-8901
            </a>

            {/* Email Icon and Address */}
            <a href="mailto:info@complianceright.com" className="text-gray-300 hover:text-white mb-2">
              <i className="fa fa-envelope"></i> info@complianceright.com
            </a>

            {/* Address Icon and Text */}
            <div className="flex items-center text-gray-300">
              <i className="fa fa-map-marker"></i>
              <span>
                123 Main Street, City, Country
              </span>
            </div>
          </div>
        </div>

        {/* Privacy Policy Link (Updated) */}
        <div className="text-xs text-gray-300 mt-4">
          <a href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
