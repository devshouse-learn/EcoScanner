import React from 'react';
import { useAppData } from '../context/AppDataContext';
import './Gallery.css';

function Gallery({ onBack }) {
  const { scannedHistory } = useAppData();
  const uniqueProducts = Array.from(
    new Map(scannedHistory.map(item => [item.barcode, item])).values()
  );

  if (uniqueProducts.length === 0) {
    return (
      <div className="gallery-container">
        <button className="btn-back" onClick={onBack}>
          ← Volver
        </button>
        <div className="gallery-empty">
          <div className="empty-icon">🖼️</div>
          <h2>Galería Vacía</h2>
          <p>Aún no has escaneado ningún producto</p>
          <p className="empty-hint">Comienza a escanear para ver tus productos aquí</p>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <button className="btn-back" onClick={onBack}>
        ← Volver
      </button>

      <div className="gallery-header">
        <h2>🖼️ Galería de Productos</h2>
        <p className="gallery-subtitle">{uniqueProducts.length} producto{uniqueProducts.length !== 1 ? 's' : ''} escaneado{uniqueProducts.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="gallery-grid">
        {uniqueProducts.map(product => (
          <div key={product.barcode} className="gallery-card">
            <div className="card-status">
              {product.recyclable ? (
                <span className="status-badge recyclable">♻️ Reciclable</span>
              ) : (
                <span className="status-badge non-recyclable">⚠️ No Reciclable</span>
              )}
            </div>
            <div className="card-content">
              <h3>{product.name}</h3>
              <p className="card-barcode">{product.barcode}</p>
              <div className="card-materials">
                {product.materials.slice(0, 2).map((mat, i) => (
                  <span key={i} className="material-tag-small">{mat}</span>
                ))}
                {product.materials.length > 2 && (
                  <span className="material-tag-small">+{product.materials.length - 2}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
