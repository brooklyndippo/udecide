import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Base from './Base';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="What to Eat"
        component={Base}
        options={{
          tabBarLabel: 'Food',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-fork-drink" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="What to Do"
        component={Base}
        options={{
          tabBarLabel: 'Activities',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="emoji-people" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Where to go"
        component={Base}
        options={{
          tabBarLabel: 'Places',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="location-city" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Anything"
        component={Base}
        options={{
          tabBarLabel: 'Other',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="sticker-plus-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;