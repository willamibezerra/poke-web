import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const PokemonScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://seu-projeto-nextjs-url/pokemons' }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PokemonScreen;
