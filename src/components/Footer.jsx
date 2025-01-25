import React from 'react';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-neutral-900 shadow">
      <div className="container mx-auto px-4 py-6">
        <p className="text-sm text-center text-customFooterText">© {year} Mauricio Falck</p>
      </div>
    </footer>
  );
}

export default Footer;
