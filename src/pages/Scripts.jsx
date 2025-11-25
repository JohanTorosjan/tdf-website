// src/pages/Home.js
import React from 'react';
import scriptsbg from "../assets/scripts-bg.jpg";
import './Scripts.css'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import Sommaire from '../components/Summary.jsx'

function Scripts() {
  return (
    <div className="scripts-container">
        <ScrollToTopButton/>

      <div className="scripts-title">
        <h1>Scripts</h1>
      </div>
      
      <div className="scripts-hero" style={{ backgroundImage: `url(${scriptsbg})` }}>
      </div>
        <Sommaire items={[
        { className: 'episode-1', titre: 'EP.1' },
        { className: 'episode-2', titre: 'EP.2' },
        { className: 'episode-3', titre: 'EP.3' },
        { className: 'episode-4', titre: 'EP.4' },
        { className: 'episode-5', titre: 'EP.5' },
        { className: 'episode-6', titre: 'EP.6' },



        ]} />
      <div className="scripts-content">
        </div>
    </div>

  );
}

export default Scripts;
