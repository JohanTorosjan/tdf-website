// src/pages/Home.js
import talentsbg from "../assets/talents.jpg";
import './Talents.css'
import React, { useState, useEffect } from 'react';
import Sommaire from '../components/Summary.jsx'
import creators from '../assets/creators.png'
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import line from "../assets/line.png";
import louis from '../assets/Louis.webp'
import director from '../assets/director.png'

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
                                <Sommaire items={[
        { className: 'theme-summary', titre: 'Creators' },
        { className: 'arena-summary', titre: 'Producers' },
        { className: 'moodboard-summary', titre: 'Credits' },
        ]} />


        <section className="talents-section creators">
                    <div className='talents-section-title'>
          <img
                className="imgthemes"
                src={creators}
                alt="loading"
              />  
                  </div>
                                                          <div className='line-div'>

    <img
          className="separator-item"
          src={line}
          alt="loading"
        />  

        </div>
        <div className="director-section-content">

          <div className="director-title">
             <img
                className="director-title-img"
                src={director}
                alt="loading"
              />  
          </div>

          <div className="director-content">
            <div className="director-img">
             <img
                className="creators-img"
                src={louis}
                alt="loading"
              />  
            </div>

            <div className="director-text">
              <div className="director-name">
                Louis Leterrier
              </div>
            <p>
Louis Leterrier is a French director and producer. He began his career working on French and American productions before gaining recognition with <strong> The Transporter,  Danny the Dog </strong>,  and <strong> Transporter 2 </strong>.
</p>
 <br/>
<p> 
  He then established himself in Hollywood with major successes such as <strong>The Incredible Hulk, Clash of the Titans, and Now You See Me, </strong> becoming <strong>over his career the French filmmaker with the highest global box-office revenue.  </strong>In 2023, he joined <strong>the Fast & Furious franchise with Fast X  </strong>and is directing the sequel.
  </p>
 <br/>
  <p>
An <strong>Emmy Award winner for The Dark Crystal : Age of Resistance </strong>, Louis Leterrier also continues his work in television, returning as showrunner for the new season of <strong>Lupin </strong>.

  </p>

   <br/>
  <p>
In parallel, he develops and produces new projects within his studio <strong> Carrousel</strong>, including the science-fiction film <strong>11817</strong> for Netflix.

  </p>
   <br/>
  <p>
A leading figure in international action cinema, he is recognized for his sense of spectacle, narrative efficiency, and ability to manage large-scale productions.
  </p>
            </div>

          </div>

        </div>


        </section>


        </div>
    </div>

  );
}

export default Talents;
