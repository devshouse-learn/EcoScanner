import React, { useState } from 'react';
import './App.css';
import Scanner from './components/Scanner';
import ProductInfo from './components/ProductInfo';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Celebration from './components/Celebration';
import Gallery from './components/Gallery';
import History from './components/History';
import Statistics from './components/Statistics';
import Challenges from './components/Challenges';
import Settings from './components/Settings';
import ShareModal from './components/ShareModal';
import { useTheme } from './context/ThemeContext';
import { useAppData } from './context/AppDataContext';
import { products } from './data/products';

function App() {
  const { isDarkMode } = useTheme();
  const { addToHistory } = useAppData();
  
  const [scannedProduct, setScannedProduct] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState('');
  const [showCelebration, setShowCelebration] = useState(false);
  const [currentSection, setCurrentSection] = useState('scanner');
  const [shareProduct, setShareProduct] = useState(null);

  const handleBarcodeScan = (barcode) => {
    const product = products.find(p => p.barcode === barcode);
    if (product) {
      setShowCelebration(true);
      setTimeout(() => {
        setScannedProduct(product);
        addToHistory(product);
        setError('');
        setSearchInput('');
        setCurrentSection('scanner');
      }, 3000);
    } else {
      setError(`❌ Producto con código ${barcode} no encontrado en nuestra base de datos`);
      setScannedProduct(null);
    }
  };

  const handleSearch = (productName) => {
    const product = products.find(p => 
      p.name.toLowerCase().includes(productName.toLowerCase())
    );
    if (product) {
      setShowCelebration(true);
      setTimeout(() => {
        setScannedProduct(product);
        addToHistory(product);
        setError('');
        setCurrentSection('scanner');
      }, 3000);
    } else {
      setError(`❌ "${productName}" no encontrado en nuestra base de datos`);
      setScannedProduct(null);
    }
  };

  const handleCelebrationComplete = () => {
    setShowCelebration(false);
  };

  const handleReset = () => {
    setScannedProduct(null);
    setError('');
    setSearchInput('');
  };

  const handleShare = (product) => {
    setShareProduct(product);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'gallery':
        return <Gallery onBack={() => setCurrentSection('scanner')} />;
      case 'history':
        return <History onBack={() => setCurrentSection('scanner')} onShare={handleShare} />;
      case 'stats':
        return <Statistics onBack={() => setCurrentSection('scanner')} />;
      case 'challenges':
        return <Challenges onBack={() => setCurrentSection('scanner')} />;
      case 'settings':
        return <Settings onBack={() => setCurrentSection('scanner')} />;
      case 'scanner':
      default:
        return (
          <>
            {!scannedProduct ? (
              <div className="scanner-section">
                <Scanner onBarcodeScan={handleBarcodeScan} />
                <SearchBar 
                  onSearch={handleSearch} 
                  input={searchInput}
                  setInput={setSearchInput}
                />
                {error && <div className="error-message">{error}</div>}
              </div>
            ) : (
              <ProductInfo 
                product={scannedProduct} 
                onReset={handleReset}
                onShare={() => handleShare(scannedProduct)}
              />
            )}
          </>
        );
    }
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      {showCelebration && <Celebration onComplete={handleCelebrationComplete} />}
      {shareProduct && (
        <ShareModal 
          product={shareProduct} 
          onClose={() => setShareProduct(null)}
        />
      )}
      <Navbar onNavigate={setCurrentSection} />
      <Header />
      <main className="main-container">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
