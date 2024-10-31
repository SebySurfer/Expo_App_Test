import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from './navigations/DrawerNavigator.js';

/*
The STACK Screen is on the options of the TAB Screen. Meaning, We get a drawer with a list of screens that we want. 
Navigation in itself behaves like a screen. It IS A SCREEN

Navigation is the holder of all the other screens. The screens in themselves act in their own field. 

In other words, a navigation is a holder of other screens. Those screens can be navigations that behave in their own rules

*/

export default function App() {
  return (
  <NavigationContainer>
    <DrawerNavigator/>
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
