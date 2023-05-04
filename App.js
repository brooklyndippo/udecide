import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text>What are your options?</Text>
      </SafeAreaView>
      <TabNavigator/>
    </NavigationContainer>
  );
}
