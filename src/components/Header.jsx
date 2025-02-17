import React from 'react';
import logo from '../assets/logo.png';

function Header({ onPageChange, currentPage }) {
  const getLinkStyle = (page) => {
    return `cursor-pointer px-4 py-2 hover:text-customNavHoverText ${currentPage === page ? 'border-b-2 border-customNavHoverText' : ''}`;
  };

  return (
    <header>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center bg-neutral-900">
        <div className="text-3xl font-bold flex">
          <img src={logo} alt="Logo" className="w-35 h-20 ml-5 mr-2" />
        </div>
        <nav className="flex justify-center space-x-4">
          <span className={getLinkStyle('home')} onClick={() => onPageChange('home')}>Home</span>
          <span className={getLinkStyle('about')} onClick={() => onPageChange('about')}>About</span>
          <span className={getLinkStyle('portfolio')} onClick={() => onPageChange('portfolio')}>Portfolio</span>
          <span className={getLinkStyle('contact')} onClick={() => onPageChange('contact')}>Contact</span>
        </nav>
      </div>
    </header>
  );
}

export default Header;