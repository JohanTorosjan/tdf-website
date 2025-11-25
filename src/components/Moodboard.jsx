// Moodboard.jsx
import React from 'react';
import './Moodboard.css';

export default function Moodboard() {
  const images = [
    { id: 1, format: 'landscape', url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop', alt: 'Portrait carré 1' },
    { id: 2, format: 'square', url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop', alt: 'Paysage 1' },
    { id: 3, format: 'square', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop', alt: 'Portrait vertical 1' },
    { id: 4, format: 'square', url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop', alt: 'Portrait carré 2' },
    { id: 5, format: 'square', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop', alt: 'Portrait vertical 2' },
    { id: 6, format: 'square', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop', alt: 'Paysage 2' },
    { id: 7, format: 'square', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop', alt: 'Portrait carré 3' },
    { id: 8, format: 'square', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop', alt: 'Portrait carré 3' },
    { id: 9, format: 'square', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop', alt: 'Portrait carré 3' },
  
];

  return (
    <div className="moodboard-container">
      <div className="moodboard-wrapper">        
        <div className="moodboard-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`moodboard-item moodboard-${image.format}`}
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