// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.header}>Lista de Pokémon</Text>
      <WebView
        source={{ uri: 'https://poke-web-xi.vercel.app/' }}
        style={{ marginTop: 20 }}
        onMessage={(event) => {
          const data = event.nativeEvent.data;
          console.log('Dados da WebView:', data);
        }}
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
