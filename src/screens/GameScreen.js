import React, { useContext } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";
import { GO_HOME, CHECK_GO_HOME } from "../constants/strings";

import GameFeed from "../components/GameFeed";
import Button from "../components/Button";
import Heart from "../components/Heart";

export default ({ onGoHome, onGameOver }) => {
  const [{ heart }, _] = useContext(GameContext);

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
        <View style={styles.heartContainer}>
          <View style={styles.heartBox}>
            <Heart onPress={() => null} numOfHeart={heart} disabled={true} />
          </View>
        </View>
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
  heartContainer: {
    width: "100%",
    position: "absolute",
    top: -80,
  },
  heartBox: {
    alignItems: "flex-end",
    marginRight: vw(3),
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
