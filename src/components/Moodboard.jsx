// Moodboard.jsx
import React, { useState, useEffect } from 'react';
import './Moodboard.css';
import moodboard1 from '../assets/moodboard/moodboard1.png'
import moodboard2 from '../assets/moodboard/moodboard2.png'
import moodboard3 from '../assets/moodboard/moodboard3.png'
import moodboard5 from '../assets/moodboard/moodboard5.png'
import moodboard6 from '../assets/moodboard/moodboard6.png'
import moodboard7 from '../assets/moodboard/moodboard7.png'
import moodboard8 from '../assets/moodboard/moodboard8.png'
import moodboard9 from '../assets/moodboard/moodboard9.png'
import moodboard10 from '../assets/moodboard/moodboard10.png'
import moodboard11 from '../assets/moodboard/moodboard11.png'
import moodboard12 from '../assets/moodboard/moodboard12.png'

export default function Moodboard() {
      const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      let images;
      if(!isMobile){
        
         images  = [
    { id: 1, format: 'square', url: moodboard1, alt: 'Moodboard 1' },
    { id: 2, format: 'square', url: moodboard2, alt: 'Moodboard 2' },
    { id: 3, format: 'square', url: moodboard3, alt: 'Moodboard 3' },
    { id: 5, format: 'square', url: moodboard5, alt: 'Moodboard 5' },
    { id: 6, format: 'landscape', url: moodboard6, alt: 'Moodboard 6',cut:true },
    { id: 7, format: 'landscape', url: moodboard7, alt: 'Moodboard 7' },
    { id: 9, format: 'square', url: moodboard9, alt: 'Moodboard 9' },
    { id: 10, format: 'square', url: moodboard10, alt: 'Moodboard 10' },
    { id: 11, format: 'square', url: moodboard11, alt: 'Moodboard 11' },
    { id: 12, format: 'square', url: moodboard12, alt: 'Moodboard 12' },
  ]
      }

      else{
         images = [
    { id: 1, format: 'portrait', url: moodboard1, alt: 'Moodboard 1' },
    { id: 2, format: 'portrait', url: moodboard2, alt: 'Moodboard 2' },
    { id: 3, format: 'square', url: moodboard3, alt: 'Moodboard 3' },
    { id: 5, format: 'portrait', url: moodboard5, alt: 'Moodboard 5' },
    { id: 6, format: 'landscape', url: moodboard6, alt: 'Moodboard 6',cut:true },
  ]
      }

  return (
    <div className="moodboard-container">
      <div className="moodboard-wrapper">        
        <div className="moodboard-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`moodboard-item moodboard-${image.format} ${image?.cut?'cut':''}` }
            >
              <img
                src={image.url}
                alt={image.alt}
                className="moodboard-image"
              />
              <div className="moodboard-overlay">
                <span className="moodboard-label">
                  {image.format === 'square' && '■ Carré'}
                  {image.format === 'landscape' && '▭ Paysage'}
                  {image.format === 'portrait' && '▯ Portrait'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}