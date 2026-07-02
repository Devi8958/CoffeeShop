import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Routes from '../constants/Routes';
import { RootStackParamList } from '../types/Navigation';

import SplashScreen from '../screens/Splash';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/Details';
import OrderScreen from '../screens/Order';
import DeliveryScreen from '../screens/Delivery';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.Splash} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.Splash} component={SplashScreen} />
        <Stack.Screen name={Routes.BottomTabs} component={BottomTabNavigator} />
        <Stack.Screen name={Routes.Details} component={DetailsScreen} />
        <Stack.Screen name={Routes.Order} component={OrderScreen} />
        <Stack.Screen name={Routes.Delivery} component={DeliveryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
