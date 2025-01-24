// src/screens/HomeScreen.tsx
import useFavorites from '../../hooks/UseFavorites';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  const { addFavorite, removeFavorite } = useFavorites();

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
      <Text style={styles.header}>Lista de Pokémon</Text>
      <WebView
        source={{ uri: 'https://poke-web-xi.vercel.app/' }}
        
        style={{ marginTop: 20 }}
        onMessage={handleMessage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
