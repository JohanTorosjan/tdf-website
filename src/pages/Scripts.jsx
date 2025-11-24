// src/pages/Home.js
import React from 'react';
import scriptsbg from "../assets/scripts-bg.jpg";
import './Scripts.css'
function Scripts() {
  return (
    <div className="scripts-container">
      <div className="scripts-title">
        <h1>Scripts</h1>
      </div>
      
      <div className="scripts-hero" style={{ backgroundImage: `url(${scriptsbg})` }}>
      </div>
      
      <div className="scripts-content">
        </div>
    </div>

  );
}

export default Scripts;
