// src/pages/Home.js
import React from 'react';
import productionbg from "../assets/outstanding.jpg";
import './Production.css'

function Production() {
  return (
    <div className="production-container">
      <div className="production-title">
        <h1>An Outstanding Production</h1>
      </div>
      
      <div className="production-hero" style={{ backgroundImage: `url(${productionbg})` }}>
      </div>
      
      <div className="production-content">
        </div>
    </div>

  );
}

export default Production;
