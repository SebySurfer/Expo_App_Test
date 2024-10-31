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

function DrawerNavigator(){
    return(
       <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Profile' component={Profile}/>
       </Drawer.Navigator>
    )
}

function TabNavigator(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}

// Main 
/**
 * 
 * So by default, the first screen is the screen presented in the Stack navigator, the rest of the screens are stacked underneath
 */
export default function StackNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Drawer' component={DrawerNavigator}/> 
        <Stack.Screen name='Tab' component={TabNavigator}/>
        <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
    
  )
}

