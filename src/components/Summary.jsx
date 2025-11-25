import React from "react";
import "./Summary.css";

const Sommaire = ({ items }) => {
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
              {item.titre}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sommaire;
