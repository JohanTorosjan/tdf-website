import React, { useState, useEffect } from 'react';
import './MoodboardPage.css'
import moodboardbg from "../assets/moodboardbg.jpg";
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import prod from '../assets/prod.png'
import sales from '../assets/sale.png'
import line from '../assets/line.png'
import Moodboard from '../components/Moodboard.jsx';
function MoodboardPage() {
            useEffect(() => {
                      document.body.scrollTo({
                top: 0,
              });})
  return (
 <div className="moodboard-container">
<ScrollToTopButton/>

      <div className="moodboard-title">
        <h1>Moodboard</h1>
      </div>
      
      <div className="moodboard-hero" style={{ backgroundImage: `url(${moodboardbg})` }}>
      </div>
      
      <div className="moodboard-content">
      <Moodboard/>
</div>
</div>
  )}

export default MoodboardPage