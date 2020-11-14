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
  const [showAnswer, setShowAnswer] = useState(true);

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

  /* 2초 간 정답 보여 주기 & heart 갯수 -1 */
  const showAnswerForHint = () => {
    setShowAnswer(true);

    setTimeout(() => setShowAnswer(false), 2000);

    if (heart > 0) {
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart - 1,
      }));

      /* AsyncStorage heart 갯수 -1 업데이트 */
    }
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
    <View style={styles.screen}>
      {/* BODY */}
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <View style={styles.timerContainer}>
            <Timer
              onGameOver={onGameOver}
              numOfHeart={heart}
              initialLimitTime={limitTime}
              setGameInfo={setGameInfo}
              showAnswerForHint={showAnswerForHint}
              showAnswer={showAnswer}
            />
          </View>
          <View style={styles.heartContainer}>
            <Heart onPress={() => null} numOfHeart={heart} disabled={true} />
          </View>
        </View>
        <GameFeed
          onGameOver={onGameOver}
          showAnswer={showAnswer}
          setShowAnswer={setShowAnswer}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Button onPress={checkGoHome}>{GO_HOME}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  body: {
    flex: 5,
    width: "100%",
    marginTop: vh(10),
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    top: -80,
  },
  heartContainer: {
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
