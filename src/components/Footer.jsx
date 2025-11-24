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
            <Link to="/the-series#themes" className="footer-link">Themes</Link>
            <Link to="/the-series#arena" className="footer-link">The arena</Link>
          </div>

          {/* Colonne 2 */}
          <div className="footer-column">
            <Link to="/scripts" className="footer-title">Scripts</Link>
          </div>

          {/* Colonne 3 */}
          <div className="footer-column">
            <Link to="/production" className="footer-title">An outstanding production</Link>
            <Link to="/production#directors-cut" className="footer-link">Director's cut</Link>
            <Link to="/production#writers-note" className="footer-link">Writer's note</Link>
            <Link to="/production#ip" className="footer-link">The IP</Link>
          </div>

          {/* Colonne 4 */}
          <div className="footer-column">
            <Link to="/talents" className="footer-title">Talents</Link>
            <Link to="/talents#creators" className="footer-link">Creators</Link>
            <Link to="/talents#producers" className="footer-link">Producers</Link>
            <Link to="/talents#credits" className="footer-link">Credits</Link>
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