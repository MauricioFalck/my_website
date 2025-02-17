import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-neutral-800">
      <div className="flex flex-col flex-grow mx-auto my-7 w-full max-w-6xl bg-stone-900 text-customBodyText shadow-lg rounded-lg" style={{ marginTop: '4%', marginBottom: '4%' }}>
        <Header className="mt-5" onPageChange={setCurrentPage} currentPage={currentPage} />
        <main className="flex-grow container mx-auto px-4 py-6 overflow-y-auto" style={{ minHeight: '60vh' }}>
          {renderPage()}
        </main>
        <Footer className="mt-5" />
      </div>
    </div>
  );
}

export default App;