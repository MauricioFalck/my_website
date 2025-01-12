import React from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      return (
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="text-3xl font-bold">
              <Link to="/">My Logo</Link>
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
