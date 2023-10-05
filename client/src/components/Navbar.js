import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-bright-turquoise-300 bg-opacity-70 p-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <a href="/">Your Logo</a>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="landing-page"
              spy={true}
              smooth={true}
              duration={500}
              className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              duration={500}
              className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="learning"
              spy={true}
              smooth={true}
              duration={500}
              className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300"
            >
              Learning
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="text-bright-turquoise-50 hover:text-bright-turquoise-950 hover:cursor-pointer transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
