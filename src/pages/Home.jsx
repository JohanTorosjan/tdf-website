// src/pages/Home.js
import React from 'react';

import './Home.css';
import { useEffect } from 'react';

// src/pages/Home.jsx
function Home() {
  useEffect(() => {
    // Scroll à 30% de la hauteur de l'écran par exemple
window.scrollTo({
  top: window.innerHeight * 0.3,
  behavior: 'auto'
});

  }, []); // Le tableau vide [] signifie "au premier chargement uniquement"


  return (
    <div className="page-container">
      <div className="page-background"></div>
      <div className="page-content">
        {/* Votre contenu ici */}
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
