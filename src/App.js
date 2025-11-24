// src/App.js - OPTION 1 : Toutes les routes protégées
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PasswordProtection from './components/PasswordProtection';
import Home from './pages/Home';
import Production from './pages/Production';
import Scripts from './pages/Scripts';
import Series from './pages/Series';
import Contacts from './pages/Contacts';
import Talents from './pages/Talents';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PasswordProtection>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/the-series">The Series</Link></li>
              <li><Link to="/scripts">Scripts</Link></li>
              <li><Link to="/an-outstanding-production">An outstanding production</Link></li>
              <li><Link to="/talents">Talents</Link></li>
              <li><Link to="/contacts">Contacts</Link></li>
              
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/the-series" element={<Series />} />
            <Route path="/scripts" element={<Scripts />} />
            <Route path="/an-outstanding-production" element={<Production />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </PasswordProtection>
    </BrowserRouter>
  );
}

export default App;