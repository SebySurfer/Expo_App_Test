import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



function StackNavigator() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='About' component={About}/>
    </Tab.Navigator>
  )
}


//Drawer  being the main navigator, holding all other "screens" and 
function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Stack' component={StackNavigator}/>
      <Drawer.Screen name='Tab' component={TabNavigator}/>
      <Drawer.Screen name='Profile' component={Profile}/>

    </Drawer.Navigator>
  )
}

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
