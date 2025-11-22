import React, { createContext, useState, useContext, useEffect } from 'react';

const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const [scannedHistory, setScannedHistory] = useState([]);
  const [ecoPoints, setEcoPoints] = useState(0);
  const [weeklyChallenge, setWeeklyChallenge] = useState({
    name: 'Recicla 5 productos',
    completed: 0,
    target: 5,
    reward: 50
  });

  // Cargar datos del localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('ecoscanner-history');
    const savedPoints = localStorage.getItem('ecoscanner-points');
    const savedChallenge = localStorage.getItem('ecoscanner-challenge');

    if (savedHistory) setScannedHistory(JSON.parse(savedHistory));
    if (savedPoints) setEcoPoints(JSON.parse(savedPoints));
    if (savedChallenge) setWeeklyChallenge(JSON.parse(savedChallenge));
  }, []);

  // Guardar historial
  useEffect(() => {
    localStorage.setItem('ecoscanner-history', JSON.stringify(scannedHistory));
  }, [scannedHistory]);

  // Guardar puntos
  useEffect(() => {
    localStorage.setItem('ecoscanner-points', JSON.stringify(ecoPoints));
  }, [ecoPoints]);

  // Guardar desafío
  useEffect(() => {
    localStorage.setItem('ecoscanner-challenge', JSON.stringify(weeklyChallenge));
  }, [weeklyChallenge]);

  const addToHistory = (product) => {
    const now = new Date();
    const newEntry = {
      id: Date.now(),
      ...product,
      scannedAt: now.toISOString(),
      formattedDate: now.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setScannedHistory(prev => [newEntry, ...prev]);

    // Agregar puntos
    addPoints(10);

    // Actualizar desafío
    if (product.recyclable) {
      setWeeklyChallenge(prev => ({
        ...prev,
        completed: Math.min(prev.completed + 1, prev.target)
      }));
    }
  };

  const addPoints = (points) => {
    setEcoPoints(prev => prev + points);
  };

  const clearHistory = () => {
    setScannedHistory([]);
  };

  const deleteHistoryItem = (id) => {
    setScannedHistory(prev => prev.filter(item => item.id !== id));
  };

  const resetChallenge = () => {
    setWeeklyChallenge({
      name: 'Recicla 5 productos',
      completed: 0,
      target: 5,
      reward: 50
    });
  };

  return (
    <AppDataContext.Provider
      value={{
        scannedHistory,
        ecoPoints,
        weeklyChallenge,
        addToHistory,
        addPoints,
        clearHistory,
        deleteHistoryItem,
        resetChallenge
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData debe usarse dentro de AppDataProvider');
  }
  return context;
}
