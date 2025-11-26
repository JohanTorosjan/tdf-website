// src/pages/Contact.js
import React, { useState, useEffect } from 'react';

function Contacts() {
            useEffect(() => {
                      document.body.scrollTo({
                top: 0,
              });})
  return (
    <div>
      <h1>Contact</h1>
      <p>Contactez-nous à contact@example.com</p>
    </div>
  );
}

export default Contacts;