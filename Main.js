import { SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator';
export default function Main() {
  return (
    <NavigationContainer>
      <SafeAreaView>
      </SafeAreaView>
      <TabNavigator/>
    </NavigationContainer>
  );
}
