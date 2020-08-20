import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "../navigation/MainNavigation";

export default () => {
  return (
    <View style={{ flex: "1" }}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </View>
  );
};
