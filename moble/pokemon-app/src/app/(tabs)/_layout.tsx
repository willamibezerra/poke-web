import { Tabs } from 'expo-router';
import useFavorites from '../../hooks/UseFavorites';


import { Ionicons } from '@expo/vector-icons';
import { useFavoritesContext } from '@/src/components/contexts/favoriteContext';

export default function TabLayout() {
  const { favorites } = useFavoritesContext();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <Ionicons name="heart" size={24} color={color} />,
          tabBarBadge: favorites.length > 0 ? favorites.length : undefined,
          
        }}
      />
    </Tabs>
  );
}
