import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import { useFavoritesContext } from "../../components/contexts/favoriteContext";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavoritesContext();

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Você ainda não tem Pokémon favoritos.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item}</Text>
          <Button title="Desfavoritar" onPress={() => removeFavorite(item)} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
