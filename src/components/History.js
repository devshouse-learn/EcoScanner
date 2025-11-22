import React from 'react';
import { useAppData } from '../context/AppDataContext';
import './History.css';

function History({ onBack, onShare }) {
  const { scannedHistory, clearHistory, deleteHistoryItem } = useAppData();

  const handleClearHistory = () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar todo el historial?')) {
      clearHistory();
    }
  };

  if (scannedHistory.length === 0) {
    return (
      <div className="history-container">
        <button className="btn-back" onClick={onBack}>
          ← Volver
        </button>
        <div className="history-empty">
          <div className="empty-icon">📋</div>
          <h2>Historial Vacío</h2>
          <p>Aún no has escaneado ningún producto</p>
        </div>
      </div>
    );
  }

  return (
    <div className="history-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <div className="history-header">
        <div>
          <h2>📋 Historial de Escaneos</h2>
          <p className="history-subtitle">{scannedHistory.length} escaneo{scannedHistory.length !== 1 ? 's' : ''}</p>
        </div>
        <button className="btn-clear" onClick={handleClearHistory}>
          🗑️ Limpiar
        </button>
      </div>

      <div className="history-list">
        {scannedHistory.map(item => (
          <div key={item.id} className="history-item">
            <div className="item-left">
              <div className="item-icon">
                {item.recyclable ? '♻️' : '⚠️'}
              </div>
              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="item-barcode">📦 {item.barcode}</p>
                <p className="item-time">⏰ {item.formattedDate}</p>
                {item.recyclable && (
                  <div className="item-materials">
                    {item.materials.map((mat, i) => (
                      <span key={i} className="material-badge">{mat}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="item-actions">
              <button
                className="btn-share"
                onClick={() => onShare(item)}
                title="Compartir"
              >
                📤
              </button>
              <button
                className="btn-delete"
                onClick={() => deleteHistoryItem(item.id)}
                title="Eliminar"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
