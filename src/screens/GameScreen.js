import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, Alert, BackHandler } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";
import { checkLimitTime } from "../utils/checkSomething";
import { GO_HOME, CHECK_GO_HOME } from "../constants/strings";

import GameFeed from "../components/GameFeed";
import Button from "../components/Button";
import Heart from "../components/Heart";
import Timer from "../components/Timer";

export default ({ onGoHome, onGameOver }) => {
  const [{ stage, heart }, setGameInfo] = useContext(GameContext);
  const [limitTime, setLimitTime] = useState(10);

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

  const preLoad = () => {
    setLimitTime(checkLimitTime(stage));
  };

  useEffect(() => {
    preLoad();

    BackHandler.addEventListener("hardwareBackPress", checkGoHome);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", checkGoHome);
  }, []);

  return (
    <View style={styles.container}>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.heartContainer}>
          <View style={styles.timerContainer}>
            <Timer
              onGameOver={onGameOver}
              numOfHeart={heart}
              initialLimitTime={limitTime}
              setGameInfo={setGameInfo}
            />
          </View>
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
    flexDirection: "row",
    position: "absolute",
    top: -80,
  },
  heartBox: {
    alignItems: "flex-end",
    marginRight: vw(3),
  },
  timerContainer: {
    flex: 1,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
