import React from "react";
import { Text } from "react-native";
import { useIsLoggedIn } from "../context/AuthContext";

export default () => {
  const isLoggedIn = useIsLoggedIn();
  console.log(isLoggedIn);

  return <Text>App Stack</Text>;
};
