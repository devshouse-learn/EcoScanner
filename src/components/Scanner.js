import React, { useState, useRef } from 'react';
import './Scanner.css';

function Scanner({ onBarcodeScan }) {
  const [isScanning, setIsScanning] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);

  // Función para validar código de barras con checksum
  const validateBarcode = (barcode) => {
    // Solo números, entre 8 y 14 dígitos (EAN-8, EAN-13, UPC-A, etc.)
    if (!/^\d{8}$|^\d{12}$|^\d{13}$|^\d{14}$/.test(barcode)) {
      return false;
    }

    // Validar checksum EAN-13 (el más común)
    if (barcode.length === 13) {
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        sum += parseInt(barcode[i]) * (i % 2 === 0 ? 1 : 3);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(barcode[12]) === checksum;
    }

    // Validar checksum EAN-8
    if (barcode.length === 8) {
      let sum = 0;
      for (let i = 0; i < 7; i++) {
        sum += parseInt(barcode[i]) * (i % 2 === 0 ? 3 : 1);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(barcode[7]) === checksum;
    }

    // Validar checksum UPC-A (12 dígitos)
    if (barcode.length === 12) {
      let sum = 0;
      for (let i = 0; i < 11; i++) {
        sum += parseInt(barcode[i]) * (i % 2 === 0 ? 3 : 1);
      }
      const checksum = (10 - (sum % 10)) % 10;
      return parseInt(barcode[11]) === checksum;
    }

    return true; // Aceptar otros formatos
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsScanning(true);
        setErrorMsg('');
      }
    } catch (err) {
      console.error('Error al acceder a la cámara:', err);
      setErrorMsg('No se pudo acceder a la cámara');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      setIsScanning(false);
      setManualCode('');
    }
  };

  const captureFrame = async () => {
    if (videoRef.current && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const video = videoRef.current;
      canvasRef.current.width = video.videoWidth;
      canvasRef.current.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);

      // Simular captura de códigos reales
      const realBarcodes = ['5901234123457', '5412345000012', '4006381333931', '8480010058'];
      const barcode = realBarcodes[Math.floor(Math.random() * realBarcodes.length)];
      
      if (validateBarcode(barcode)) {
        onBarcodeScan(barcode);
        stopCamera();
      } else {
        setErrorMsg('⚠️ Código de barras inválido. No se pudo validar.');
      }
    }
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    const code = manualCode.trim();
    
    if (!code) {
      setErrorMsg('Por favor ingresa un código de barras');
      return;
    }

    if (!validateBarcode(code)) {
      setErrorMsg('❌ Código de barras inválido. Debe tener 8, 12, 13 o 14 dígitos y ser válido.');
      return;
    }

    setErrorMsg('');
    onBarcodeScan(code);
    setManualCode('');
  };

  return (
    <div className="scanner-container">
      <div className="scanner-card">
        <h2>📸 Escanea un Producto</h2>
        
        {!isScanning ? (
          <div className="scanner-idle">
            <div className="scanner-icon">📱</div>
            <button className="btn btn-primary" onClick={startCamera}>
              Activar Cámara
            </button>
          </div>
        ) : (
          <div className="scanner-active">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              className="video-feed"
            />
            <canvas ref={canvasRef} style={{ display: 'none' }} />
            <div className="scanner-overlay">
              <div className="scan-frame"></div>
            </div>
            <button className="btn btn-secondary" onClick={captureFrame}>
              Capturar Código
            </button>
            <button className="btn btn-danger" onClick={stopCamera}>
              Cancelar
            </button>
          </div>
        )}

        {errorMsg && <div className="error-message">{errorMsg}</div>}

        <div className="divider">O</div>

        <form onSubmit={handleManualSubmit} className="manual-input">
          <input
            type="text"
            placeholder="Ingresa el código de barras manualmente"
            value={manualCode}
            onChange={(e) => setManualCode(e.target.value)}
            className="barcode-input"
          />
          <button type="submit" className="btn btn-success">
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Scanner;
