import React from 'react';
import { Link } from 'react-router-dom';
import f from "../assets/f.png"
import al from "../assets/al.png"
import c from "../assets/c.png"
import k from "../assets/k.png"


function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold flex">
          <img src={f} alt="Logo" className="w-35 h-12 mr-2" />
          <img src={al} alt="Logo" className="w-35 h-12 mr-2" />
          <img src={c} alt="Logo" className="w-35 h-12 mr-2" />
          <img src={k} alt="Logo" className="w-35 h-12 mr-2" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/about" className="hover:text-blue-500">About Me</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link></li>
            <li><Link to="/resume" className="hover:text-blue-500">Resume</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
