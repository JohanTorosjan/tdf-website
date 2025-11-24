// src/App.js
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
import Header from './components/Header'; 
import Footer from './components/Footer'; 

import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <PasswordProtection>
        <div className="App">
          <Header /> 



          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/the-series" element={<Series />} />
              <Route path="/scripts" element={<Scripts />} />
              <Route path="/an-outstanding-production" element={<Production />} />
              <Route path="/talents" element={<Talents />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <Footer/>
          </footer>
        </div>
      </PasswordProtection>
    </BrowserRouter>
  );
}

export default App;