import React from "react";
import { View, Text, FlatList, Button, StyleSheet, SafeAreaView } from "react-native";
import { useFavoritesContext } from "@/src/components/contexts/favoriteContext";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavoritesContext();

  if (favorites.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pokémons Favoritos</Text>
        <Text style={styles.emptyText}>Você ainda não tem Pokémon favoritos.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
     
      <Text style={styles.title}>Pokémons Favoritos</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.toUpperCase()}</Text>
            <Button
              title="Desfavoritar"
              onPress={() => removeFavorite(item)}
              color="#FF6F61"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginHorizontal: 8,
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
});
