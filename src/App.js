import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './assets/css/style.css'

function App() {
  return (
    <div className="App bg">
      <div>
        <Header />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
