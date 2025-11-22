import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAppData } from '../context/AppDataContext';
import './Navbar.css';

function Navbar({ onNavigate }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { ecoPoints } = useAppData();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="logo-emoji">🌍</span>
          <span className="logo-text">EcoScanner</span>
        </div>

        <div className="navbar-points">
          <span className="points-icon">🌱</span>
          <span className="points-value">{ecoPoints} pts</span>
        </div>

        <div className="navbar-menu">
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className={`menu-items ${menuOpen ? 'active' : ''}`}>
            <button
              className="menu-item"
              onClick={() => handleMenuClick('scanner')}
            >
              📸 Escanear
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuClick('gallery')}
            >
              🖼️ Galería
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuClick('history')}
            >
              📋 Historial
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuClick('stats')}
            >
              📊 Estadísticas
            </button>
            <button
              className="menu-item"
              onClick={() => handleMenuClick('challenges')}
            >
              🎯 Desafíos
            </button>
            <button
              className="menu-item theme-toggle"
              onClick={toggleTheme}
            >
              {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
