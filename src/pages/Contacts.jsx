// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import './Contacts.css'
import contactsbg from "../assets/contacts.jpg";
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import prod from '../assets/peod.png'
import sales from '../assets/sale.png'
import line from '../assets/line.png'
import meet from '../assets/meet.png'
function Contacts() {
            useEffect(() => {
                      document.body.scrollTo({
                top: 0,
              });})
  return (
 <div className="contacts-container">
<ScrollToTopButton/>

      <div className="contacts-title">
        <h1>Contacts</h1>
      </div>
      
      <div className="contacts-hero" style={{ backgroundImage: `url(${contactsbg})` }}>
      </div>
      
      <div className="contacts-content">
      <div className='nothingg'>
        
      </div>


      <section className="contacts-section">
                  <div className="title-wrapper-yellow">

    <div className='title-wrapper flexeur'>
    <img
          className="episode1"
          src={prod}
          alt="loading"
        />  
    </div>
</div>
               

        <div className='prod-text'>
         <p>Pascal Breton – Founder and group CEO</p> 
         <br/>
         <p>Judith Rochelois - Producer</p>
         <p>judith.rochelois@fedent.com </p>
         <p>+33 6 22 06 71 59 </p>
        </div>
    </section>


      <section className="contacts-section">
                  <div className="title-wrapper-yellow">

            <div className='title-wrapper flexeur'>
    <img
          className="episode1"
          src={sales}
          alt="loading"
        />  
    </div>
</div>
               

        <div className='prod-text'>
         <p>Guillaume Pommier – Co-chief of distribution</p> 
         <p>guillaume.pommier@fedent.com</p>
         <p> +33 6 46 35 41 57</p>
        </div>
    </section>

      </div>

      <div className='meet'>
        <img
          className="meet-btn"
          src={meet}
          alt="loading"
          onClick={() => window.open('https://federationstudios.com/sales-acquisitions/', '_blank')}
          style={{ cursor: 'pointer' }}
        />

      
      </div>

  </div>
  );
}

export default Contacts;