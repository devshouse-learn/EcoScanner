import React from 'react';
import './ProductInfo.css';

function ProductInfo({ product, onReset, onShare }) {
  return (
    <div className="product-info-container">
      <div className="product-actions">
        <button className="btn-back" onClick={onReset}>
          ← Volver
        </button>
        {onShare && (
          <button className="btn-share-header" onClick={onShare}>
            📤 Compartir
          </button>
        )}
      </div>

      <div className="product-card">
        <div className="product-header">
          <h2>{product.name}</h2>
          <p className="barcode-display">Código: {product.barcode}</p>
        </div>

        {/* Sección de reciclabilidad */}
        <div className={`recyclability-section ${product.recyclable ? 'recyclable' : 'non-recyclable'}`}>
          <h3>♻️ ¿Es reciclable?</h3>
          <div className="recyclability-status">
            <span className={`badge ${product.recyclable ? 'badge-yes' : 'badge-no'}`}>
              {product.recyclable ? 'SÍ, ES RECICLABLE' : 'NO ES RECICLABLE'}
            </span>
          </div>
          {product.recyclable && (
            <p className="recyclable-note">
              ✅ Este producto puede ser reciclado correctamente
            </p>
          )}
        </div>

        {/* Materiales */}
        <div className="info-section">
          <h3>📦 Materiales</h3>
          <div className="materials-list">
            {product.materials.map((material, index) => (
              <span key={index} className="material-tag">{material}</span>
            ))}
          </div>
        </div>

        {/* Cómo reciclar */}
        {product.recyclable && (
          <div className="info-section">
            <h3>🔄 Cómo Reciclarlo</h3>
            <div className="steps">
              {product.recyclingSteps.map((step, index) => (
                <div key={index} className="step">
                  <span className="step-number">{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dónde llevarlo */}
        {product.recyclable && (
          <div className="info-section">
            <h3>📍 Dónde Llevarlo</h3>
            <div className="locations">
              {product.recyclingLocations.map((location, index) => (
                <div key={index} className="location">
                  <span className="location-icon">{location.icon}</span>
                  <div className="location-info">
                    <p className="location-name">{location.name}</p>
                    <p className="location-desc">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impacto ambiental */}
        <div className="info-section">
          <h3>🌱 Impacto Ambiental</h3>
          <p className="environmental-impact">{product.environmentalImpact}</p>
        </div>

        {/* Consejos */}
        <div className="info-section">
          <h3>💡 Consejos</h3>
          <ul className="tips-list">
            {product.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
