// src/pages/Home.js
import productionbg from "../assets/outstanding.jpg";
import './Production.css'
import React, { useState, useEffect } from 'react';

function Production() {
          useEffect(() => {
                    document.body.scrollTo({
              top: 0,
            });})
    
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
