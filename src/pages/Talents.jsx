// src/pages/Home.js
import React from 'react';
import talentsbg from "../assets/talents.jpg";
import './Talents.css'

function Talents() {
  return (
    <div className="talents-container">
      <div className="talents-title">
        <h1>Talents</h1>
      </div>
      
      <div className="talents-hero" style={{ backgroundImage: `url(${talentsbg})` }}>
      </div>
      
      <div className="talents-content">
        </div>
    </div>

  );
}

export default Talents;
