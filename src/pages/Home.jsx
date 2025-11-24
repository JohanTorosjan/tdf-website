// src/pages/Home.js
import React from 'react';
import logomain from "../assets/logo-main.png";
import fed from "../assets/fed.svg";

import './Home.css';

// src/pages/Home.jsx
function Home() {



  return (
    <div className="page-container">
      <div className="page-background"></div>
      <div className="page-content">
                <img className="logo-center" src={logomain} alt="Mon illustration" />
                <img className="logo-bottom-right" src={fed} alt="Mon illustration" />

      </div>
    </div>
  );
}

export default Home;
