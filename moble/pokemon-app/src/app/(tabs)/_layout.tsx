import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importação das telas
import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';
import { useFavoritesContext } from '@/src/components/contexts/favoriteContext';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const { favorites } = useFavoritesContext();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesPage}
        options={{
          tabBarBadge :favorites.length > 0 ? favorites.length: '',
          
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
            
          ),
        }}
      />
    </Tab.Navigator>
  );
}
