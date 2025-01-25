// HomeScreen.tsx
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useFavoritesContext } from '@/src/components/contexts/favoriteContext';
import Header from '../../../components/Header'; 
import PokemonWebView from '../../../components/PokemonWebView'; 

const HomeScreen = () => {
  const { addFavorite, removeFavorite } = useFavoritesContext();

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (data.type === 'like') {
        addFavorite(data.pokemonName);
      } else if (data.type === 'dislike') {
        removeFavorite(data.pokemonName);
      }
    } catch (error) {
      console.error('Erro ao processar mensagem da WebView:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
      <PokemonWebView onMessage={handleMessage} />
    </View>
  );
};

export default HomeScreen;
