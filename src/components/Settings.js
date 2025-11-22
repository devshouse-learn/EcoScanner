import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAppData } from '../context/AppDataContext';
import './Settings.css';

function Settings({ onBack }) {
  const { isDarkMode, toggleTheme } = useTheme();
  const { scannedHistory, ecoPoints, clearHistory } = useAppData();
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [language, setLanguage] = useState('es');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleClearAll = () => {
    if (window.confirm('¿Estás seguro? Esta acción no se puede deshacer.')) {
      clearHistory();
      setShowDeleteConfirm(false);
    }
  };

  const exportData = () => {
    const data = {
      history: scannedHistory,
      points: ecoPoints,
      theme: isDarkMode ? 'dark' : 'light',
      timestamp: new Date().toISOString()
    };
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2)));
    element.setAttribute('download', `ecoscanner-backup-${Date.now()}.json`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="settings-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <div className="settings-header">
        <h2>⚙️ Configuración</h2>
        <p className="settings-subtitle">Personaliza tu experiencia</p>
      </div>

      {/* Sección de Apariencia */}
      <div className="settings-section">
        <h3>🎨 Apariencia</h3>
        
        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Tema</p>
            <p className="setting-desc">Cambia entre modo claro y oscuro</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">{isDarkMode ? '🌙 Oscuro' : '☀️ Claro'}</span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Idioma</p>
            <p className="setting-desc">Selecciona tu idioma preferido</p>
          </div>
          <select 
            className="setting-select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="es">🇪🇸 Español</option>
            <option value="en">🇬🇧 English</option>
            <option value="fr">🇫🇷 Français</option>
            <option value="pt">🇵🇹 Português</option>
          </select>
        </div>
      </div>

      {/* Sección de Notificaciones */}
      <div className="settings-section">
        <h3>🔔 Notificaciones</h3>
        
        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Notificaciones</p>
            <p className="setting-desc">Recibe alertas sobre logros y desafíos</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">{notifications ? '✓ Activo' : '✗ Inactivo'}</span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Sonidos</p>
            <p className="setting-desc">Sonidos en eventos importantes</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={soundEnabled}
              onChange={() => setSoundEnabled(!soundEnabled)}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">{soundEnabled ? '🔊 Activo' : '🔇 Mudo'}</span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <p className="setting-label">Guardado Automático</p>
            <p className="setting-desc">Guarda automáticamente tus datos</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={autoSave}
              onChange={() => setAutoSave(!autoSave)}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-text">{autoSave ? '✓ Activo' : '✗ Inactivo'}</span>
          </label>
        </div>
      </div>

      {/* Sección de Datos */}
      <div className="settings-section">
        <h3>💾 Datos y Almacenamiento</h3>
        
        <div className="data-stats">
          <div className="stat">
            <span className="stat-icon">📦</span>
            <div className="stat-content">
              <p className="stat-label">Productos Escaneados</p>
              <p className="stat-value">{scannedHistory.length}</p>
            </div>
          </div>
          
          <div className="stat">
            <span className="stat-icon">🌱</span>
            <div className="stat-content">
              <p className="stat-label">Puntos Ecológicos</p>
              <p className="stat-value">{ecoPoints}</p>
            </div>
          </div>
        </div>

        <div className="data-actions">
          <button className="btn-export" onClick={exportData}>
            📥 Exportar Datos
          </button>
          <button className="btn-delete" onClick={() => setShowDeleteConfirm(true)}>
            🗑️ Limpiar Todo
          </button>
        </div>

        {showDeleteConfirm && (
          <div className="confirmation-dialog">
            <p>⚠️ Se eliminarán todos tus datos. ¿Estás seguro?</p>
            <div className="confirmation-buttons">
              <button className="btn-confirm-yes" onClick={handleClearAll}>
                Sí, eliminar todo
              </button>
              <button className="btn-confirm-no" onClick={() => setShowDeleteConfirm(false)}>
                Cancelar
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Sección de Información */}
      <div className="settings-section">
        <h3>ℹ️ Información</h3>
        
        <div className="info-item">
          <p className="info-label">Versión</p>
          <p className="info-value">v1.0.0</p>
        </div>

        <div className="info-item">
          <p className="info-label">Desarrollador</p>
          <p className="info-value">EcoScanner Team 🌍</p>
        </div>

        <div className="info-item">
          <p className="info-label">Última Actualización</p>
          <p className="info-value">22 de Noviembre, 2025</p>
        </div>

        <div className="info-item">
          <p className="info-label">Privacidad</p>
          <p className="info-value">Tus datos se guardan localmente en tu dispositivo</p>
        </div>
      </div>

      {/* Sección de Ayuda */}
      <div className="settings-section">
        <h3>❓ Ayuda y Soporte</h3>
        
        <div className="help-buttons">
          <button className="btn-help">
            📖 Guía de Uso
          </button>
          <button className="btn-help">
            🐛 Reportar Error
          </button>
          <button className="btn-help">
            💬 Contacto
          </button>
          <button className="btn-help">
            ⭐ Calificar App
          </button>
        </div>
      </div>

      {/* Sección de Acerca De */}
      <div className="settings-section about-section">
        <h3>🌍 Acerca de EcoScanner</h3>
        <p className="about-text">
          EcoScanner es una aplicación dedicada a promover el reciclaje responsable y la conciencia ambiental. 
          Con nuestro sistema de gamificación, hacer un impacto positivo en el planeta es divertido y motivador.
        </p>
        <div className="mission">
          <p className="mission-title">Nuestra Misión 🌱</p>
          <p>Hacer que el reciclaje sea accesible, educativo y gratificante para todos.</p>
        </div>
      </div>
    </div>
  );
}

export default Settings;
