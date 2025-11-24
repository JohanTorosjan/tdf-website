// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import du logo
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="app-header">
      <nav className="app-nav">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Tour de France" className="logo" />
        </Link>

        {/* Bouton burger */}
        <button 
          className={`burger-button ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu de navigation */}
        <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/the-series" onClick={closeMenu}>The Series</Link></li>
          <li><Link to="/scripts" onClick={closeMenu}>Scripts</Link></li>
          <li><Link to="/an-outstanding-production" onClick={closeMenu}>An outstanding production</Link></li>
          <li><Link to="/talents" onClick={closeMenu}>Talents</Link></li>
          <li><Link to="/contacts" onClick={closeMenu}>Contacts</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;