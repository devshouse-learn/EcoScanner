import React, { useState } from 'react';
import './ShareModal.css';

function ShareModal({ product, onClose }) {
  const [copySuccess, setCopySuccess] = useState(false);

  const shareText = `Acabo de escanear "${product.name}" con EcoScanner. ${
    product.recyclable 
      ? `¡Es reciclable! Ayuda al planeta usando esta app. 🌍♻️` 
      : `¡No es reciclable pero importante saberlo! 🌍`
  } Descárgala y únete al movimiento verde.`;

  const handleShare = async (platform) => {
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(shareText)}`,
      telegram: `https://t.me/share/url?url=https://ecoscanner.app&text=${encodeURIComponent(shareText)}`
    };

    if (urls[platform]) {
      window.open(urls[platform], '_blank', 'width=600,height=400');
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="share-modal-overlay" onClick={onClose}>
      <div className="share-modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="share-header">
          <h2>📤 Compartir Producto</h2>
          <p className="share-subtitle">{product.name}</p>
        </div>

        <div className="share-platforms">
          <button 
            className="share-btn whatsapp"
            onClick={() => handleShare('whatsapp')}
            title="Compartir en WhatsApp"
          >
            <span className="share-icon">💬</span>
            <span className="share-label">WhatsApp</span>
          </button>

          <button 
            className="share-btn twitter"
            onClick={() => handleShare('twitter')}
            title="Compartir en Twitter"
          >
            <span className="share-icon">𝕏</span>
            <span className="share-label">Twitter</span>
          </button>

          <button 
            className="share-btn facebook"
            onClick={() => handleShare('facebook')}
            title="Compartir en Facebook"
          >
            <span className="share-icon">f</span>
            <span className="share-label">Facebook</span>
          </button>

          <button 
            className="share-btn telegram"
            onClick={() => handleShare('telegram')}
            title="Compartir en Telegram"
          >
            <span className="share-icon">✈️</span>
            <span className="share-label">Telegram</span>
          </button>
        </div>

        <div className="share-text-section">
          <h3>Mensaje a Compartir</h3>
          <div className="share-text-box">
            <p>{shareText}</p>
          </div>
          <button 
            className={`btn-copy ${copySuccess ? 'success' : ''}`}
            onClick={handleCopy}
          >
            {copySuccess ? '✅ Copiado!' : '📋 Copiar Texto'}
          </button>
        </div>

        <div className="share-footer">
          <p>Ayuda a otros a reciclar correctamente compartiendo EcoScanner 🌱</p>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
