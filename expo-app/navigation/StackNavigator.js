
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home.js";
import About from "../screens/About.js";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
