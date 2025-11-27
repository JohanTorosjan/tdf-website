// src/pages/Home.js
import talentsbg from "../assets/talents.jpg";
import './Talents.css'
import React, { useState, useEffect } from 'react';

import ScrollToTopButton from '../components/ScrollToTopButton.jsx'


function Talents() {
              useEffect(() => {
                        document.body.scrollTo({
                  top: 0,
                });})
  return (
    <div className="talents-container">
            <ScrollToTopButton />

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
