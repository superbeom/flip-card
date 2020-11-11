import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";

import Card from "../components/Card";
import Button from "../components/Button";
import StageButton from "../components/StageButton";
import {
  STAGE_SCORE,
  PLAY_AGAIN,
  NEXT_STAGE,
  GO_HOME,
} from "../constants/strings";

const GameOverScreen = ({ onPlayAgain, onGoHome, onStartGame, score }) => {
  const [{ stage, totalScore }, setGameInfo] = useContext(GameContext);

  /*
    column 수 올릴 필요가 있을 때마다, checkHorizontalNum() 실행하기
  */

  const nextStage = async () => {
    /* horizontalNum 증가시킬 조건 설정하기 */
    /* 여기 바로 설정 or 'checkHorizontalNum.js'에서 설정 */

    if (stage === 5) {
      setGameInfo((curState) => ({
        ...curState,
        horizontalNum: curState.horizontalNum + 1,
      }));
    } else if (stage === 36) {
      setGameInfo((curState) => ({
        ...curState,
        horizontalNum: curState.horizontalNum + 1,
      }));
    }

    setGameInfo((curState) => ({
      ...curState,
      stage: curState.stage + 1,
    }));

    onStartGame();
  };

  const successStage = async () => {
    onGoHome();
  };

  const failStage = () => {
    /* GameFeed - initialization 실행으로 초기화 해야 됨. */
    onGoHome();
  };

  const replayStage = () => {
    onPlayAgain();
  };

  // const backAction = () => {
  //   Alert.alert("Hold on!", "Are you sure you want to go home?", [
  //     {
  //       text: "Cancel",
  //       onPress: () => null,
  //       style: "cancel",
  //     },
  //     { text: "YES", onPress: score > 0 ? successStage : null },
  //   ]);

  //   return true;
  // };

  // useEffect(() => {
  //   BackHandler.addEventListener("hardwareBackPress", backAction);

  //   return () =>
  //     BackHandler.removeEventListener("hardwareBackPress", backAction);
  // }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.score}>
        <Card style={styles.card}>
          <Text style={styles.text}>{STAGE_SCORE}</Text>
          <Text style={styles.text}>{score}</Text>
        </Card>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image
          source={
            score > 0
              ? stage === 110
                ? require("../../assets/congratulation.png")
                : require("../../assets/success.png")
              : require("../../assets/fail.png")
          }
          style={styles.image}
          resizeMode={"cover"}
        /> */}
      </View>
      <View style={styles.buttonContainer}>
        <StageButton onPress={replayStage}>{PLAY_AGAIN}</StageButton>
        {score > 0 ? (
          <StageButton onPress={nextStage}>{NEXT_STAGE}</StageButton>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    width: "80%",
    marginVertical: vh(5),
  },
  card: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: vw(4.5),
  },
  imageContainer: {
    width: vh(30),
    height: vh(30),
    borderRadius: vh(30) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: vh(5),
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: vh(2),
    justifyContent: "space-around",
    alignItems: "center",
  },
  goHomeContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default GameOverScreen;
