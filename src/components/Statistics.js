import React from 'react';
import { useAppData } from '../context/AppDataContext';
import './Statistics.css';

function Statistics({ onBack }) {
  const { scannedHistory, ecoPoints } = useAppData();

  const stats = {
    totalScanned: scannedHistory.length,
    recycled: scannedHistory.filter(p => p.recyclable).length,
    notRecyclable: scannedHistory.filter(p => !p.recyclable).length,
    co2Saved: (scannedHistory.filter(p => p.recyclable).length * 0.5).toFixed(2),
    energySaved: (scannedHistory.filter(p => p.recyclable).length * 2.3).toFixed(2)
  };

  const recyclingRate = stats.totalScanned > 0 
    ? ((stats.recycled / stats.totalScanned) * 100).toFixed(1)
    : 0;

  return (
    <div className="statistics-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <div className="stats-header">
        <h2>📊 Estadísticas de Reciclaje</h2>
        <p className="stats-subtitle">Tu impacto ambiental</p>
      </div>

      <div className="stats-grid">
        {/* Card de Puntos */}
        <div className="stat-card stat-card-primary">
          <div className="stat-icon">🌱</div>
          <div className="stat-content">
            <p className="stat-label">Puntos Ecológicos</p>
            <p className="stat-value">{ecoPoints}</p>
            <p className="stat-desc">Acumulados</p>
          </div>
        </div>

        {/* Card de Productos Escaneados */}
        <div className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-content">
            <p className="stat-label">Escaneados</p>
            <p className="stat-value">{stats.totalScanned}</p>
            <p className="stat-desc">Total de productos</p>
          </div>
        </div>

        {/* Card de Reciclables */}
        <div className="stat-card stat-card-green">
          <div className="stat-icon">♻️</div>
          <div className="stat-content">
            <p className="stat-label">Reciclables</p>
            <p className="stat-value">{stats.recycled}</p>
            <p className="stat-desc">{recyclingRate}% de tasa</p>
          </div>
        </div>

        {/* Card de No Reciclables */}
        <div className="stat-card stat-card-red">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <p className="stat-label">No Reciclables</p>
            <p className="stat-value">{stats.notRecyclable}</p>
            <p className="stat-desc">Información útil</p>
          </div>
        </div>
      </div>

      {/* Progreso de Reciclaje */}
      <div className="progress-section">
        <h3>Tasa de Reciclaje</h3>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${recyclingRate}%` }}
            ></div>
          </div>
          <p className="progress-text">{recyclingRate}% de productos reciclables</p>
        </div>
      </div>

      {/* Impacto Ambiental */}
      <div className="impact-section">
        <h3>Impacto Ambiental</h3>
        <div className="impact-grid">
          <div className="impact-item">
            <div className="impact-icon">☁️</div>
            <p className="impact-label">CO₂ Ahorrado</p>
            <p className="impact-value">{stats.co2Saved} kg</p>
            <p className="impact-desc">Equivalente a un árbol plantado</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">⚡</div>
            <p className="impact-label">Energía Ahorrada</p>
            <p className="impact-value">{stats.energySaved} kWh</p>
            <p className="impact-desc">Para una casa por día</p>
          </div>
        </div>
      </div>

      {/* Datos Comparativos */}
      <div className="comparison-section">
        <h3>Comparación de Impacto</h3>
        <div className="comparison-cards">
          <div className="comparison-card">
            <p className="comparison-label">Botellas de Plástico Ahorradas</p>
            <p className="comparison-value">{Math.round(stats.co2Saved * 2)}</p>
          </div>
          <div className="comparison-card">
            <p className="comparison-label">Latas de Aluminio Recicladas</p>
            <p className="comparison-value">{stats.recycled}</p>
          </div>
          <div className="comparison-card">
            <p className="comparison-label">Agua Ahorrada</p>
            <p className="comparison-value">{Math.round(stats.energySaved * 1000)}L</p>
          </div>
        </div>
      </div>

      {/* Motivación */}
      {stats.recycled > 0 && (
        <div className="motivation-section">
          <div className="motivation-icon">🌍</div>
          <p className="motivation-text">
            ¡Excelente trabajo! Has hecho una diferencia real reciclando {stats.recycled} producto{stats.recycled !== 1 ? 's' : ''}
          </p>
          <p className="motivation-hint">Continúa escaneando para aumentar tu impacto</p>
        </div>
      )}
    </div>
  );
}

export default Statistics;
