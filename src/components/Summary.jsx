import React from "react";
import "./Summary.css";



import arena from "../assets/summary/arena.png";
import Characters from "../assets/summary/Characters.png";
import Creators from "../assets/summary/Creators.png";
import EP1 from "../assets/summary/EP1.png";
import EP2 from "../assets/summary/EP2.png";
import EP3 from "../assets/summary/EP3.png";
import EP4 from "../assets/summary/EP4.png";
import EP5 from "../assets/summary/EP5.png";
import EP6 from "../assets/summary/EP6.png";
import Moodboard from "../assets/summary/Moodboard.png";
import Producers from "../assets/summary/Producers.png";
import seriesTheme from "../assets/summary/seriesTheme.png";
import TheIP from "../assets/summary/TheIP.png";
import WritersNote from "../assets/summary/WritersNote.png";
import Synopsis from "../assets/summary/syn.png";

const images = {
  arena,
  Characters,
  Creators,
  EP1,
  EP2,
  EP3,
  EP4,
  EP5,
  EP6,
  Moodboard,
  Producers,
  seriesTheme,
  TheIP,
  WritersNote,
  Synopsis,
};


const Sommaire = ({ items,size }) => {
  const scrollToSection = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sommaire">
      <ul className="sommaire-list">
        {items.map((item, index) => (
          <li className="sommaire-item" key={index}>
            <button
              className="sommaire-button"
              onClick={() => scrollToSection(item.className)}
            >
          <img
                className={`summaryButton ${size}`}
              src={images[item.titre]}
              alt={item.titre}
              />              </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sommaire;
