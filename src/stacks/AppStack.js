import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Image, StatusBar } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AdMobBanner } from "expo-ads-admob";

import { GameContext } from "../context/GameContext";
import { CONGRATULATIONS } from "../constants/strings";

import Header from "../components/Header";
import colors from "../constants/colors";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";

export default AppStack = () => {
  const [{ stage }, setGameInfo] = useContext(GameContext);
  const [loading, setLoading] = useState(true);
  // const [startGame, setStartGame] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  const playAgainHandler = () => {
    setScore(0);
    setRound(1);
    setGameOver(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
    playAgainHandler();
  };

  const gameOverHandler = (checkBomb) => {
    if (checkBomb === "bomb") {
      setScore(0);
    } else {
      setScore(100);
    }
    // const resultScore = getScore(stage, round);

    // setScore(resultScore);
    setGameOver(true);
  };

  const goHomeHandler = () => {
    setScore(0);
    setRound(1);
    setStartGame(false);
    setGameOver(false);
  };

  const preLoad = async () => {
    try {
      // const storageStage = parseInt(await AsyncStorage.getItem("STAGE"));
      // const storageHorizontalNum = parseInt(
      //   await AsyncStorage.getItem("HORIZONTAL_NUM")
      // );
      // const storageScore = parseInt(await AsyncStorage.getItem("TOTAL_SCORE"));
      // const storageGameEnd = await AsyncStorage.getItem("GAME_END");

      // if (storageStage && storageHorizontalNum && storageScore) {
      //   if (storageGameEnd === "true") {
      //     setGameInfo({
      //       stage: storageStage,
      //       horizontalNum: storageHorizontalNum,
      //       totalScore: storageScore,
      //       gameEnd: true,
      //     });
      //   } else {
      //     setGameInfo({
      //       stage: storageStage,
      //       horizontalNum: storageHorizontalNum,
      //       totalScore: storageScore,
      //     });
      //   }
      // }

      setLoading(false);
    } catch (error) {
      console.log("error @preLoad_AppStack: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loading ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden={true} />
      <Image
        style={{ width: 115, height: 115 }}
        source={require("../../assets/icon.png")}
      />
    </View>
  ) : (
    <View
      style={[
        styles.screen,
        {
          backgroundColor: startGame
            ? colors.primaryColor
            : colors.backgroundColor,
        },
      ]}
    >
      <Header
        title={
          startGame
            ? stage === 110
              ? gameOver
                ? CONGRATULATIONS
                : `STAGE ${stage}`
              : `STAGE ${stage}`
            : null
        }
        gaming={startGame}
      />
      <View style={styles.body}>
        {startGame ? (
          gameOver ? (
            <GameOverScreen
              onGoHome={goHomeHandler}
              onPlayAgain={playAgainHandler}
              onStartGame={startGameHandler}
              score={score}
            />
          ) : (
            <GameScreen onGoHome={goHomeHandler} onGameOver={gameOverHandler} />
          )
        ) : (
          <StartGameScreen onStartGame={startGameHandler} />
        )}
      </View>
      <View style={styles.ads}>
        {Platform.OS === "ios" ? (
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // This is my ID
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        ) : (
          <AdMobBanner
            bannerSize="banner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // This is my ID
            servePersonalizedAds={true}
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
  },
  ads: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
