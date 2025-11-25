// src/pages/Home.js
import scriptsbg from "../assets/scripts-bg.jpg";
import scriptsbgtel from "../assets/scripts-bg-tel.jpg";

import './Scripts.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import Sommaire from '../components/Summary.jsx'
import React, { useState, useEffect } from 'react';

function Scripts() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const episodes = [
    { className: 'episode-1', titre: 'EP.1' },
    { className: 'episode-2', titre: 'EP.2' },
    { className: 'episode-3', titre: 'EP.3' },
    { className: 'episode-4', titre: 'EP.4' },
    { className: 'episode-5', titre: 'EP.5' },
    { className: 'episode-6', titre: 'EP.6' },
  ];

  return (
    <div className="scripts-container">
      <ScrollToTopButton />

      <div className="scripts-title">
        <h1>Scripts</h1>
      </div>

      <div
        className="scripts-hero"
        style={{ backgroundImage: `url(${isMobile ? scriptsbgtel : scriptsbg})` }}
      />

      {/* Desktop : un seul sommaire */}
      {!isMobile && (
        <Sommaire items={episodes} />
      )}

      {/* Mobile : deux sommaires avec 3 épisodes chacun */}
      {isMobile && (
        <>
          <Sommaire items={episodes.slice(0, 3)} />
          <Sommaire items={episodes.slice(3, 6)} />
        </>
      )}

      <div className="scripts-content"></div>
    </div>
  );
}

export default Scripts;
