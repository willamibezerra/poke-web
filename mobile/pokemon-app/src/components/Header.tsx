import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = () => (
  <Text style={styles.header}>Lista de Pokémon</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Header;
