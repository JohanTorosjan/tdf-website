// src/pages/Home.js
import productionbg from "../assets/outstanding.jpg";
import './Production.css'
import React, { useState, useEffect } from 'react';
import Sommaire from '../components/Summary.jsx'
import line from "../assets/line.png";

import dirNote from "../assets/dirnote.png";
import writerNote from "../assets/writersnote.png";
import theIp from "../assets/theip.png";

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
          <div className="Director-summary">
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
          <div className="Director-summary">
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

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar augue vitae feugiat fringilla. Proin dolor mauris, bibendum in pulvinar viverra, tincidunt a nisi. Mauris eget magna sed magna interdum gravida eget in purus. Nulla fringilla sem quam, in dapibus velit iaculis ut. Aenean at dolor leo. Fusce scelerisque sit amet risus eget blandit. Fusce mollis blandit lorem, nec pretium lectus lobortis et. Cras eleifend volutpat ornare. Vestibulum placerat enim faucibus erat sagittis ornare. Aliquam ut cursus diam. Morbi auctor sollicitudin hendrerit. Phasellus quis nulla imperdiet, vulputate magna in, fringilla erat.
                      </p>

            <p>

            Phasellus facilisis ipsum et mauris posuere suscipit. Donec condimentum tortor nec ante placerat pharetra. Vivamus blandit id leo aliquet porttitor. Nulla varius nunc eu mauris dictum ultricies. Cras vestibulum, felis sed pretium condimentum, diam lacus sollicitudin augue, vitae interdum ipsum diam in turpis. Donec libero mi, venenatis a lacus eu, laoreet volutpat urna. Nullam nec pharetra arcu.
            </p>

            <p>

            Morbi at erat ac ante euismod consequat. Donec faucibus mattis auctor. Fusce in urna volutpat, pellentesque diam vel, lacinia erat. Aenean ultrices tempus gravida. Cras vitae elit neque. Morbi ac purus a velit rutrum faucibus eget ac quam. Sed a faucibus quam. Donec eget urna sed quam imperdiet facilisis. Morbi ac hendrerit nunc, ut varius purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec dictum massa at massa consequat molestie. Etiam a massa vitae nulla varius blandit non quis risus. Curabitur dapibus interdum nulla, sit amet egestas lectus aliquam eu. Donec ullamcorper ultricies metus, ac consequat felis lobortis eget. Fusce pulvinar turpis dolor, non tincidunt erat volutpat vitae.
                       </p>

            <p>

            Nam imperdiet fermentum diam, sed dictum felis. Vestibulum eget felis diam. Fusce fermentum varius tortor rhoncus congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus ex. Morbi sollicitudin leo eget lectus volutpat malesuada. Ut sagittis erat at sapien tempor, vitae gravida urna iaculis. Donec fermentum felis ac diam laoreet dictum. Nulla volutpat neque ut commodo luctus. Etiam ac porttitor nisi, facilisis pretium nulla.
                      </p>

          </div>
        </section>  
        </div>
    </div>

  );
}

export default Production;
