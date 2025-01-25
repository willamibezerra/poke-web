import React, { createContext, useContext, useState } from "react";

type FavoritesContextType = {
  favorites: string[];
  addFavorite: (pokemonName: string) => void;
  removeFavorite: (pokemonName: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (pokemonName: string) => {
    setFavorites((prev) => [...prev, pokemonName]);
  };

  const removeFavorite = (pokemonName: string) => {
    setFavorites((prev) => prev.filter((name) => name !== pokemonName));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoritesContext must be used within a FavoritesProvider");
  }
  return context;
};
