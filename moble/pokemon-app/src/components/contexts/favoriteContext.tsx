import React, { createContext, useContext } from 'react';
import useFavorites from '@/src/hooks/UseFavorites';

// Cria o contexto
const FavoritesContext = createContext<ReturnType<typeof useFavorites> | null>(null);

// Provedor do contexto
export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const favoritesHook = useFavorites(); // Usa o hook
  return (
    <FavoritesContext.Provider value={favoritesHook}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook para acessar o contexto
export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext deve ser usado dentro de FavoritesProvider');
  }
  return context;
};