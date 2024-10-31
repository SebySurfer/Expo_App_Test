import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from './navigations/DrawerNavigator.js';
import StackNavigator from './navigations/StackNavigator.js';
import TabNavigator from './navigations/TabNavigator.js';

/*

--> Navigation
Three types: 
  * Tab = Bottom buttons for each screen 
  * Drawer = Pop up menu display that holds screens
  * Stack = a page stacks on top of the other until the user "unstaks" them when returning to the first screen

Concept:
Each navigation behaves as such like a magical spell, or container.
Each magical spell does its own actions and behaviours, but they keep a strict form without changing regardless of environment 
If a spell were to be casted inside another, the inner spell will do its actions independently, but will be moved around from the outer spell
This same goes with navigators, which are technically screens, just special kind of screens.

Rules:
However, the only rule is that the spells cannot work in parallel with each other; they can only work one within the other.
This is why a spell can contain other spells. If you were to create parallelism of spells, it will be split into two - Same with screens.
If you were to have two screens at the same time, bieng that they are literally the same as navigators (special screens), there will be TWO SCREENS SPLIT ON DISPLAY. 

Practice Application Exercise Examples:

  1. Main Screen is Drawer: 
    The drawer screen will have both the Stack and Tab screens as its components. The drawer (or pop up menu) will be the one that will navigate between Stack Screen, Tab Screen, or normal Screens
    Both Stack and Tab will behave as they do once you go to the Drawer pop up menu and press their selected option. Once you select them, they play their own magic

  2. Main Screen is Stack: 
    The Stack screen will have both the Drawer and Tab screens as its components. The Stack will look invincible to the naked eye, because the first default screen will the the screen that is put first. 
    The rest of the screens are availible to use, but are beneath. You'll need to access those screens by buttons. 
  
    3. Main Screen is Tab: 
    The Tab screen will have both the Drawer and Stack screens as its components. Each screen will be located within the tab, and yes, one tab will be called "Stack" and the other "Drawer" 
    - a;ong with names with names of other tabs with normal screens, or more special navigator screens (the same but hold different screens) if you want. 

  Feel free to test out each special navigation screen within the 'nagivations' folder
  
*/

export default function App() {
  return (
  <NavigationContainer>
    <StackNavigator/>
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
