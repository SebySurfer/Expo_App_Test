import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import About from './screens/About';
import Profile from './screens/Profile';


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function TabNavigator() {
  return(
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='About' component={About}/>
    </Tab.Navigator>
  )
}

function DrawerNavigator(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Tabs' component={TabNavigator}/>
      <Drawer.Screen name='Profile' component={Profile}/>

    </Drawer.Navigator>
  )
}


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
