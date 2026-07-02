import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Routes from '../constants/Routes';
import { BottomTabParamList } from '../types/Navigation';
import Colors from '../constants/Colors';

import HomeScreen from '../screens/Home';
import FavoritesScreen from '../screens/Favorites';
import CartScreen from '../screens/Cart';
//import NotificationsScreen from '../screens/Notifications';
import BottomTabIcon from '../components/BottomTabIcon';
import NoFeedbackTabButton from '../components/NoFeedBackTabButton';

import {
  HomeOutlined,
  HomeFilled,
  FavoriteFilled,
  FavoriteOutlined,
  CartFilled,
  CartOutlined,
  NotificationFilled,
  NotificationOutlined,
} from '../assets/icons';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarButton: props => <NoFeedbackTabButton {...props} />,
      }}
    >
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              FilledIcon={HomeFilled}
              OutlineIcon={HomeOutlined}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.Favorites}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              FilledIcon={FavoriteFilled}
              OutlineIcon={FavoriteOutlined}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.Cart}
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              FilledIcon={CartFilled}
              OutlineIcon={CartOutlined}
              focused={focused}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name={Routes.Notifications}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <BottomTabIcon
              FilledIcon={NotificationFilled}
              OutlineIcon={NotificationOutlined}
              focused={focused}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
