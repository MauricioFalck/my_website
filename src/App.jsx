import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Header from './components/Header';
    import Footer from './components/Footer';
    import About from './pages/About';
    import Portfolio from './pages/Portfolio';
    import Resume from './pages/Resume';
    import Contact from './pages/Contact';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <Header />
            <main className="container mx-auto px-4 py-6">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
