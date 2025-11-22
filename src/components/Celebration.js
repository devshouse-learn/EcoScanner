import React, { useEffect } from 'react';
import './Celebration.css';

function Celebration({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="celebration-overlay">
      <div className="celebration-content">
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti-piece"></div>
          ))}
        </div>

        <div className="celebration-animation">
          <div className="character">
            <div className="head">🎉</div>
            <div className="body">
              <div className="arm arm-left"></div>
              <div className="torso">♻️</div>
              <div className="arm arm-right"></div>
            </div>
            <div className="legs">
              <div className="leg leg-left"></div>
              <div className="leg leg-right"></div>
            </div>
          </div>
        </div>

        <h1 className="celebration-title">¡Excelente!</h1>
        <p className="celebration-message">
          Producto escaneado correctamente ✅
        </p>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="star">⭐</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Celebration;
