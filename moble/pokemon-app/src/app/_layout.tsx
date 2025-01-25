import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsLayout from '../app/(tabs)/_layout';  
import { FavoritesProvider } from '../components/contexts/favoriteContext';

const Stack = createStackNavigator();

const AppLayout = () => {
  return (
    <FavoritesProvider>
         <Stack.Navigator screenOptions={{ headerShown: false,  }}>
        
        <Stack.Screen name="Main" component={TabsLayout} />
      </Stack.Navigator>
    </FavoritesProvider>

  );
};

export default AppLayout;
