
import { useFavoritesContext } from '@/src/components/contexts/favoriteContext';
import useFavorites from '../../hooks/UseFavorites';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

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

      <Text style={styles.header}>Lista de Pokémon</Text>
      </SafeAreaView>
      <WebView
        source={{ uri: 'https://poke-web-xi.vercel.app/' }}
        injectedJavaScript={`
          window.ReactNativeWebView = window.ReactNativeWebView || {};
        `}
        
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
