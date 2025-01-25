import React, { createContext, useContext } from 'react';
import useFavorites from '@/src/hooks/UseFavorites';

const FavoritesContext = createContext<ReturnType<typeof useFavorites> | null>(null);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const favoritesHook = useFavorites();
  return (
    <FavoritesContext.Provider value={favoritesHook}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavoritesContext deve ser usado dentro de FavoritesProvider');
  }
  return context;
};