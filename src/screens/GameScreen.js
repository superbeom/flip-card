import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import { vh } from "react-native-expo-viewport-units";

import { GO_HOME, CHECK_GO_HOME } from "../constants/strings";

import GameFeed from "../components/GameFeed";
import Button from "../components/Button";

export default ({ onGoHome, onGameOver }) => {
  const checkGoHome = () => {
    Alert.alert(
      CHECK_GO_HOME,
      "",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Go home", onPress: onGoHome },
      ],
      { cancelable: true }
    );

    return true;
  };

  return (
    <View style={styles.container}>
      {/* BODY */}
      <View style={styles.body}>
        <GameFeed onGameOver={onGameOver} />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Button onPress={checkGoHome}>{GO_HOME}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 5,
    width: "100%",
    marginTop: vh(10),
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
