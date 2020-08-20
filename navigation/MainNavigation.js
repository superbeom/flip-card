import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Game from "../screens/Game";

const MainNavigation = createStackNavigator();

export default () => (
  <MainNavigation.Navigator headerMode="none" mode="card">
    <MainNavigation.Screen name="Game" component={Game} />
    <MainNavigation.Screen name="Home" component={Home} />
  </MainNavigation.Navigator>
);
