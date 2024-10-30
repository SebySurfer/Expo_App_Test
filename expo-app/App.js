import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from './navigation/StackNavigator';

import MyHeader from './components/MyHeader';

export default function App() {
  return (
  <NavigationContainer>
    <MainStackNavigator/>
  </NavigationContainer>

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
cd expo-app
npm run x
*/
