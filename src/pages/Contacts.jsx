// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import './Contacts.css'
import contactsbg from "../assets/contacts.jpg";
import ScrollToTopButton from '../components/ScrollToTopButton.jsx'
import prod from '../assets/prod.png'
import sales from '../assets/sale.png'
import line from '../assets/line.png'

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
      


      <section className="contacts-section">
            <div className='contacts-section-title'>
    <img
          className="imgthemes"
          src={prod}
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

        <div className='prod-text'>
         <p>Pascal Breton – Founder and group CEO</p> 
         <p>Judith ROCHELOIS - Producer</p>
         <p>judith.rochelois@fedent.com </p>
         <p>+33 6 22 06 71 59 </p>
        </div>
    </section>


      <section className="contacts-section">
            <div className='contacts-section-title'>
    <img
          className="imgthemes"
          src={sales}
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

        <div className='prod-text'>
         <p>Guillaume Pommier – Co-chief of distribution</p> 
         <p>guillaume.pommier@fedent.com</p>
         <p> +33 6 46 35 41 57</p>
        </div>
    </section>

      </div>

  </div>
  );
}

export default Contacts;