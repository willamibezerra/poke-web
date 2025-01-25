import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabsLayout from '../app/(tabs)/_layout';  

const Stack = createStackNavigator();

const AppLayout = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false,  }}>
        {}
        <Stack.Screen name="Main" component={TabsLayout} />
      </Stack.Navigator>
  );
};

export default AppLayout;
