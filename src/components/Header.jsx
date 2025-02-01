import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"


function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center bg-neutral-900">
        <div className="text-3xl font-bold flex">
          <img src={logo} alt="Logo" className="w-35 h-20 ml-5 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4 mr-5 text-customNavText">
            <li><Link to="/" className="hover:text-customNavHoverText">Home</Link></li>
            <li><Link to="/about" className="hover:text-customNavHoverText">About Me</Link></li>
            <li><Link to="/portfolio" className="hover:text-customNavHoverText">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-customNavHoverText">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
