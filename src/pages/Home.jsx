// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import logomain from "../assets/logo-main.png";
import logomaintel from "../assets/tel.jpg";
import fed from "../assets/fed.svg";

import './Home.css';

function Home() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
            document.body.scrollTo({
      top: 0,
    });
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if(isMobile){
    return(
      <div className="page-container">
        <div className="page-background"></div>
        <div className="page-content">
          <img
            className="logo-center"
            src={isMobile ? logomaintel : logomain}
            alt="Mon illustration"
          />
          <img
            className="logo-bottom-right"
            src={fed}
            alt="Mon illustration"
          />
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="page-container">
        <div className="page-background"></div>
        <div className="page-content">
          {/* <img
            className="logo-center"
            src={isMobile ? logomaintel : logomain}
            alt="Mon illustration"
          /> */}
          <img
            className="logo-bottom-right"
            src={fed}
            alt="Mon illustration"
          />
        </div>
      </div>
    );
  }
}

export default Home;
