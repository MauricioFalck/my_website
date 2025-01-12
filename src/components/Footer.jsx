import React from 'react';

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center">© {year} Mauricio Falck</p>
      </div>
    </footer>
  );
}

export default Footer;
