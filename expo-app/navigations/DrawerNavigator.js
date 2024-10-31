import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About.js';
import Home from '../screens/Home.js';
import Profile from '../screens/Profile.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
    return(
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    )
  }
  
  function TabNavigator() {
    return(
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Profile' component={Profile}/>
      </Tab.Navigator>
    )
  }

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name='Stack' component={StackNavigator}/>
    <Drawer.Screen name='Tab' component={TabNavigator}/>
    <Drawer.Screen name='About' component={About}/>

  </Drawer.Navigator>
  )
}

