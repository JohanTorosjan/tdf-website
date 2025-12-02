// src/pages/Home.js
import productionbg from "../assets/outstanding.jpg";
import './Production.css'
import React, { useState, useEffect } from 'react';
import Sommaire from '../components/Summary.jsx'
import line from "../assets/line.png";

import dirNote from "../assets/dirnote.png";
import writerNote from "../assets/writersnote.png";
import theIp from "../assets/theip.png";
import { useLocation } from 'react-router-dom';

function Production() {
          useEffect(() => {
                    document.body.scrollTo({
              top: 0,
            });})
    
                          const location = useLocation();
  useEffect(() => {
    // Vérifie s'il y a un hash dans l'URL
    if (location.hash) {
      console.log(location.hash)
const selector = location.hash.replace('#', '.');
    const element = document.querySelector(selector);
      console.log(element)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div className="production-container">
      <div className="production-title">
        <h1>An Outstanding Production</h1>
      </div>
      
      <div className="production-hero" style={{ backgroundImage: `url(${productionbg})` }}>
      </div>
      

      <div className="production-content">

                                              <Sommaire items={[
        { className: 'Director-summary', titre:'DirNote' },
        { className: 'Writer-summary', titre: "WritersNote" },
        { className: 'IP-summary', titre: "TheIP" },

        ]}size='production'/>
        <section className="production-section">
          <div className="Director-summary">
          </div>
          <div className="title-wrapper-yellow">
          <div className='title-wrapper'>
            <img
                className="episode1"
                src={dirNote}
                alt="loading"
              />  
            </div>
          </div>


         <div className="dir-title-name">
              Louis Leterrier
            </div>
          <div className="directors-vimeo">
   
            <iframe
              src="https://player.vimeo.com/video/1142370663?h=b2a4a8353f
"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            />
          </div>
        </section>



        <section className="production-section">
          <div className="Writer-summary">
          </div>
          <div className="title-wrapper-yellow">
          <div className='title-wrapper'>
            <img
                className="episode1"
                src={writerNote}
                alt="loading"
              />  
            </div>
          </div>


         <div className="dir-title-name">
             Alexandre Delaporte
            </div>
          <div className="directors-vimeo">
   
            <iframe
              src="https://player.vimeo.com/video/1142131388?h=7a795323a5
"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            />
          </div>
          <div className="writers-gap">

          </div>

                   <div className="dir-title-name">
              Grégory Nicolas
            </div>
          <div className="directors-vimeo">
   
            <iframe
              src="https://player.vimeo.com/video/1141402028?h=c62b529e17"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Vimeo Video"
            />
          </div>
        </section>



      <section className="production-section">
          <div className="IP-summary">
          </div>
          <div className="title-wrapper-yellow">
          <div className='title-wrapper'>
            <img
                className="episode1"
                src={theIp}
                alt="loading"
              />  
            </div>
          </div>
          <div className="theip-text">
                        <p>

            Coming soon !
                      </p>

            <p>

            </p>

            <p>

                       </p>

            <p>

                      </p>

          </div>
        </section>  
        </div>
    </div>

  );
}

export default Production;
