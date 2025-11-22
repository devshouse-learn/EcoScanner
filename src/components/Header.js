import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🌍</span>
          <h1>EcoScanner</h1>
        </div>
        <p className="tagline">Escanea, aprende, recicla</p>
      </div>
    </header>
  );
}

export default Header;
