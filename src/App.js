// src/App.js - OPTION 1 : Toutes les routes protégées
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PasswordProtection from './components/PasswordProtection';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PasswordProtection>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PasswordProtection>
    </BrowserRouter>
  );
}

export default App;