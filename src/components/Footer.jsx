// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          {/* Colonne 1 */}
          <div className="footer-column">
            <Link to="/the-series" className="footer-title">The series</Link>
            <Link to="/the-series#synopsis-summary" className="footer-link">Synopsis</Link>
            <Link to="/the-series#theme-summary" className="footer-link">Themes</Link>
            <Link to="/the-series#arena-summary" className="footer-link">The arena</Link>
            <Link to="/the-series#character-summary" className="footer-link">Characters</Link>

          </div>

          {/* Colonne 2 */}
          <div className="footer-column">
            <Link to="/moodboard" className="footer-title">Moodboard</Link>
          </div>

          <div className="footer-column">
          <Link to="/scripts" className="footer-title">Scripts</Link>
          </div>
          {/* Colonne 3 */}
          <div className="footer-column">
            <Link to="/an-outstanding-production" className="footer-title">An outstanding production</Link>
            <Link to="/an-outstanding-production#Director-summary" className="footer-link">Director's note</Link>
            <Link to="/an-outstanding-production#Writer-summary" className="footer-link">Writer's note</Link>
            <Link to="/an-outstanding-production#IP-summary" className="footer-link">The IP</Link>
          </div>

          {/* Colonne 4 */}
          <div className="footer-column">
            <Link to="/talents" className="footer-title">Talents</Link>
            <Link to="/talents#Creators-summary" className="footer-link">Creators</Link>
            <Link to="/talents#Producers-summary" className="footer-link">Producers</Link>
            <Link to="/talents#credits-summary" className="footer-link">Credits</Link>
          </div>
                    <div className="footer-column">
            <Link to="/contacts" className="footer-title">Contacts</Link>

          </div>
        </div>

        <div className="footer-credits">
          <p>Designed by sane studio · developed by jo-dev</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;