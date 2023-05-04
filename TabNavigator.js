import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Options from './OptionInput';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Options}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shuffle"
        component={Options}
        options={{
          tabBarLabel: 'Shuffle',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shuffle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dice"
        component={Options}
        options={{
          tabBarLabel: 'Dice',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dice-multiple" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;