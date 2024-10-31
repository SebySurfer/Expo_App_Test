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

function StackNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Profile' component={Profile}/>
            <Stack.Screen name='About' component={About}/>

        </Stack.Navigator>
    )
}

function DrawerNavigator(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen  name='Profile' component={Profile}/>
            <Drawer.Screen name='About' component={About}/>

        </Drawer.Navigator>
    )
}


export default function TabNavigator() {
  return (
        <Tab.Navigator>
            <Tab.Screen name='Stack' component={StackNavigator}/>
            <Tab.Screen name='Drawer' component={DrawerNavigator}/>
            <Tab.Screen name='About' component={About}/>
            <Tab.Screen name='Profile' component={Profile}/>
            <Tab.Screen name='Home' component={Home}/>


        </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})