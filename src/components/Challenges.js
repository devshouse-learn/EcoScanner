import React from 'react';
import { useAppData } from '../context/AppDataContext';
import './Challenges.css';

function Challenges({ onBack }) {
  const { weeklyChallenge, ecoPoints, resetChallenge } = useAppData();

  const progress = (weeklyChallenge.completed / weeklyChallenge.target) * 100;
  const isCompleted = weeklyChallenge.completed >= weeklyChallenge.target;

  const challenges = [
    {
      id: 1,
      title: '🏆 Reciclador Principiante',
      description: 'Escanea 5 productos reciclables',
      icon: '🥉',
      points: 50,
      completed: weeklyChallenge.completed >= 5
    },
    {
      id: 2,
      title: '🏅 Reciclador Avanzado',
      description: 'Escanea 20 productos reciclables',
      icon: '🥈',
      points: 150,
      completed: weeklyChallenge.completed >= 20
    },
    {
      id: 3,
      title: '🥇 Campeón del Reciclaje',
      description: 'Escanea 50 productos reciclables',
      icon: '🏆',
      points: 500,
      completed: weeklyChallenge.completed >= 50
    },
    {
      id: 4,
      title: '♻️ Experto en Plástico',
      description: 'Escanea 10 botellas de plástico',
      icon: '🍾',
      points: 100,
      completed: false
    },
    {
      id: 5,
      title: '🥫 Coleccionista de Latas',
      description: 'Escanea 10 latas de aluminio',
      icon: '🥫',
      points: 100,
      completed: false
    },
    {
      id: 6,
      title: '📦 Maestro del Cartón',
      description: 'Escanea 10 cajas de cartón',
      icon: '📦',
      points: 100,
      completed: false
    }
  ];

  return (
    <div className="challenges-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <div className="challenges-header">
        <h2>🎯 Desafíos Semanales</h2>
        <p className="challenges-subtitle">Completa desafíos para ganar puntos</p>
      </div>

      {/* Desafío Principal */}
      <div className={`weekly-challenge ${isCompleted ? 'completed' : ''}`}>
        <div className="challenge-title">
          <span className="challenge-icon">🌟</span>
          <h3>{weeklyChallenge.name}</h3>
        </div>
        
        <div className="challenge-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="progress-text">
            {weeklyChallenge.completed} / {weeklyChallenge.target} completado
          </p>
        </div>

        <div className="challenge-reward">
          <span className="reward-icon">🌱</span>
          <span className="reward-text">+{weeklyChallenge.reward} puntos</span>
        </div>

        {isCompleted && (
          <div className="challenge-completed-badge">
            ✅ ¡Desafío Completado!
          </div>
        )}

        {isCompleted && (
          <button 
            className="btn-reset-challenge"
            onClick={resetChallenge}
          >
            🔄 Nueva Semana
          </button>
        )}
      </div>

      {/* Desafíos Adicionales */}
      <div className="challenges-grid">
        <h3 className="section-title">Desafíos Globales</h3>
        {challenges.map(challenge => (
          <div 
            key={challenge.id} 
            className={`challenge-card ${challenge.completed ? 'completed' : ''}`}
          >
            <div className="challenge-header-card">
              <span className="achievement-icon">{challenge.icon}</span>
              <h4>{challenge.title}</h4>
            </div>
            
            <p className="challenge-description">{challenge.description}</p>
            
            <div className="challenge-footer">
              <span className="challenge-points">+{challenge.points} pts</span>
              {challenge.completed && (
                <span className="completed-badge">✅ Hecho</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="tips-section">
        <h3>💡 Consejos para Completar Desafíos</h3>
        <div className="tips-list">
          <div className="tip-item">
            <span className="tip-icon">1️⃣</span>
            <p>Escanea productos en tu casa y alrededor</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">2️⃣</span>
            <p>Comparte con amigos para motivarse</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">3️⃣</span>
            <p>Los desafíos completados dan bonus</p>
          </div>
          <div className="tip-item">
            <span className="tip-icon">4️⃣</span>
            <p>Canjea puntos en futuras actualizaciones</p>
          </div>
        </div>
      </div>

      {/* Puntos Actuales */}
      <div className="current-points-card">
        <div className="points-display">
          <span className="points-label">Puntos Ecológicos Actuales</span>
          <span className="points-count">{ecoPoints}</span>
          <span className="points-hint">Sigue reciclando para ganar más</span>
        </div>
      </div>
    </div>
  );
}

export default Challenges;
