
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home.js";
import About from "../screens/About.js";
import Contact from "../screens/Contact.js";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

export { MainStackNavigator, ContactStackNavigator };
