import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

export default function useFavorites() {
  const [favorites, setFavorites,] = useState<string[]>([]);


  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('@favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };

    loadFavorites();
  }, []);

  const saveFavorites = async (newFavorites: string[]) => {
    setFavorites(newFavorites);
    await AsyncStorage.setItem('@favorites', JSON.stringify(newFavorites));
  };

  const addFavorite = async (pokemon: string) => {
    if (!favorites.includes(pokemon)) {
      await saveFavorites([...favorites, pokemon]);
    }
  };

  const removeFavorite = async (pokemon: string) => {
    await saveFavorites(favorites.filter((fav) => fav !== pokemon));
  };

  return { favorites, addFavorite, removeFavorite };
}
