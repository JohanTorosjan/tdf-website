import React, { useState, useEffect, useRef } from 'react';
import ('./ScrollToTopButton.css')

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  // Fonction pour gérer l'affichage du bouton

  // Fonction pour scroller vers le haut
  const scrollToTop = () => {
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Fallback pour certains navigateurs
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsVisible(false);

  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    // Écouter le scroll sur body
    document.body.addEventListener('scroll', handleScroll, { passive: true });
    
    // Vérifier immédiatement la position
    handleScroll();
    
    return () => {
      document.body.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

       <button
  ref={buttonRef}
  className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
  onClick={scrollToTop}
  aria-label="Retour en haut"
>
  ↑
</button>


    </>
  );
};

export default ScrollToTopButton;