// Moodboard.jsx
import React, { useState, useEffect } from 'react';
import './Moodboard.css';
import moodboard3 from '../assets/moodboard/output/3.png';
import moodboard4 from '../assets/moodboard/output/4.png';
import moodboard5 from '../assets/moodboard/output/5.png';
import moodboard6 from '../assets/moodboard/output/6.png';
import moodboard7 from '../assets/moodboard/output/7.png';
import moodboard8 from '../assets/moodboard/output/8.png';
import moodboard9 from '../assets/moodboard/output/9.png';
import moodboard10 from '../assets/moodboard/output/10.png';
import moodboard11 from '../assets/moodboard/output/11.png';
import moodboard12 from '../assets/moodboard/output/12.png';
import moodboard13 from '../assets/moodboard/output/13.png';
import moodboard14 from '../assets/moodboard/output/14.png';
import moodboard15 from '../assets/moodboard/output/15.png';
import moodboard16 from '../assets/moodboard/output/16.png';
import moodboard17 from '../assets/moodboard/output/17.png';
import moodboard18 from '../assets/moodboard/output/18.png';
import moodboard19 from '../assets/moodboard/output/19.png';
import moodboard20 from '../assets/moodboard/output/20.png';
import moodboard21 from '../assets/moodboard/output/21.png';
import moodboard22 from '../assets/moodboard/output/22.png';
import moodboard23 from '../assets/moodboard/output/23.png';
import moodboard24 from '../assets/moodboard/output/24.png';
import moodboard25 from '../assets/moodboard/output/25.png';
import moodboard26 from '../assets/moodboard/output/26.png';
import moodboard27 from '../assets/moodboard/output/27.png';
import moodboard28 from '../assets/moodboard/output/28.png';
import moodboard29 from '../assets/moodboard/output/29.png';
import moodboard30 from '../assets/moodboard/output/30.png';
import moodboard31 from '../assets/moodboard/output/31.png';
import moodboard32 from '../assets/moodboard/output/32.png';
import moodboard33 from '../assets/moodboard/output/33.png';
import moodboard34 from '../assets/moodboard/output/34.png';
import moodboard35 from '../assets/moodboard/output/35.png';
import moodboard36 from '../assets/moodboard/output/36.png';
import moodboard37 from '../assets/moodboard/output/37.png';
import moodboard38 from '../assets/moodboard/output/38.png';
import moodboard39 from '../assets/moodboard/output/39.png';
import moodboard40 from '../assets/moodboard/output/40.png';
import moodboard41 from '../assets/moodboard/output/41.png';
import moodboard42 from '../assets/moodboard/output/42.png';
import moodboard43 from '../assets/moodboard/output/43.png';
import moodboard44 from '../assets/moodboard/output/44.png';
import moodboard45 from '../assets/moodboard/output/45.png';
import moodboard46 from '../assets/moodboard/output/46.png';


export default function Moodboard() {


  
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(false);

  const [currentMobileImages, setCurrentMobileImages] = useState([]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
const images = [

  { id: 3, format: 'square', url: moodboard3, alt: 'Moodboard 3' },
  { id: 4, format: 'square', url: moodboard4, alt: 'Moodboard 4' },
  { id: 5, format: 'square', url: moodboard5, alt: 'Moodboard 5' },
  { id: 6, format: 'square', url: moodboard6, alt: 'Moodboard 6' },
  { id: 7, format: 'square', url: moodboard7, alt: 'Moodboard 7' },
  { id: 8, format: 'landscape', url: moodboard8, alt: 'Moodboard 8' },
  { id: 9, format: 'square', url: moodboard9, alt: 'Moodboard 9' },
  { id: 10, format: 'portrait', url: moodboard10, alt: 'Moodboard 10' },
  { id: 11, format: 'portrait', url: moodboard11, alt: 'Moodboard 11' },
  { id: 12, format: 'portrait', url: moodboard12, alt: 'Moodboard 12' },
  { id: 13, format: 'portrait', url: moodboard13, alt: 'Moodboard 13' },
  { id: 14, format: 'landscape', url: moodboard14, alt: 'Moodboard 14'},
  { id: 15, format: 'landscape', url: moodboard15, alt: 'Moodboard 15' },
  { id: 16, format: 'square', url: moodboard16, alt: 'Moodboard 16' },
  { id: 17, format: 'square', url: moodboard17, alt: 'Moodboard 17' },
  { id: 18, format: 'square', url: moodboard18, alt: 'Moodboard 18' },
  { id: 19, format: 'square', url: moodboard19, alt: 'Moodboard 19' },
  { id: 20, format: 'landscape', url: moodboard20, alt: 'Moodboard 20' },
  { id: 21, format: 'portrait', url: moodboard21, alt: 'Moodboard 21' },
  { id: 22, format: 'portrait', url: moodboard22, alt: 'Moodboard 22' },
  { id: 23, format: 'portrait', url: moodboard23, alt: 'Moodboard 23' },
  { id: 24, format: 'portrait', url: moodboard24, alt: 'Moodboard 24' },
  { id: 25, format: 'square', url: moodboard25, alt: 'Moodboard 25' },
  { id: 26, format: 'square', url: moodboard26, alt: 'Moodboard 26' },
  { id: 27, format: 'landscape', url: moodboard27, alt: 'Moodboard 27',},
  { id: 28, format: 'square', url: moodboard28, alt: 'Moodboard 28' },
  { id: 29, format: 'square', url: moodboard29, alt: 'Moodboard 29' },
  { id: 30, format: 'portrait', url: moodboard30, alt: 'Moodboard 30' },
  { id: 31, format: 'portrait', url: moodboard31, alt: 'Moodboard 31' },
  { id: 32, format: 'portrait', url: moodboard32, alt: 'Moodboard 32' },
  { id: 33, format: 'portrait', url: moodboard33, alt: 'Moodboard 33' },
  { id: 34, format: 'square', url: moodboard34, alt: 'Moodboard 34' },
  { id: 35, format: 'square', url: moodboard35, alt: 'Moodboard 35' },
  { id: 36, format: 'landscape', url: moodboard36, alt: 'Moodboard 36' },
  { id: 37, format: 'square', url: moodboard37, alt: 'Moodboard 37' },
  { id: 38, format: 'square', url: moodboard38, alt: 'Moodboard 38' },
  { id: 39, format: 'square', url: moodboard39, alt: 'Moodboard 39' },
  { id: 40, format: 'square', url: moodboard40, alt: 'Moodboard 40' },
  { id: 41, format: 'portrait', url: moodboard41, alt: 'Moodboard 41' },
  { id: 42, format: 'portrait', url: moodboard42, alt: 'Moodboard 42' },
  { id: 43, format: 'portrait', url: moodboard43, alt: 'Moodboard 43' },
  { id: 44, format: 'portrait', url: moodboard44, alt: 'Moodboard 44' },

];

  // Fonction pour obtenir 4 images aléatoires
  // const getRandomImages = () => {
  //   const shuffled = [...images].sort(() => Math.random() - 0.5);
  //   return shuffled.slice(0, 4);
  // };

  // // Initialiser et rotation des images pour mobile
  // useEffect(() => {
  //   if (isMobile) {
  //     setCurrentMobileImages(getRandomImages());

  //     const interval = setInterval(() => {
  //       setCurrentMobileImages(getRandomImages());
  //     }, 6000);

  //     return () => clearInterval(interval);
  //   }
  // }, [isMobile]);

  // Version Mobile
  // if (isMobile) {
  //   return (
  //     <div className="moodboard-container">
  //       <div className="moodboard-wrapper">
  //         <div className="moodboard-grid-mobile">
  //           {currentMobileImages.map((image, index) => (
  //             <div
  //               key={`${image.id}-${index}`}
  //               className="moodboard-item-mobile"
  //             >
  //               <img
  //                 src={image.url}
  //                 alt={image.alt}
  //                 className="moodboard-image-mobile"
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // Version Desktop
  return (
    <div className="moodboard-container">
      <div className="moodboard-wrapper">
        <div className="moodboard-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`moodboard-item moodboard-${image.format} ${image?.cut ? 'cut' : ''}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="moodboard-image"
              />
              <div className="moodboard-overlay">
                {/* <span className="moodboard-label">
                  {image.format === 'square' && '■ Carré'}
                  {image.format === 'landscape' && '▭ Paysage'}
                  {image.format === 'portrait' && '▯ Portrait'}
                </span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}