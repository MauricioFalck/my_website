import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-neutral-800">
        {/* Wrapper with fixed marginTop for Header */}
        <div className="flex flex-col flex-grow mx-auto my-7 w-full max-w-6xl bg-stone-900 text-customBodyText shadow-lg rounded-lg" style={{ marginTop: '5%', marginBottom: '5%' }}>
          <Header className="mt-5" />
          <main className="flex-grow container mx-auto px-4 py-6 overflow-y-auto" style={{ minHeight: '60vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer className="mt-5" />
        </div>
      </div>
    </Router>
  );
}

export default App;
