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
  const [pass, setPass] = useState(false);

  const playAgainHandler = () => {
    setGameOver(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
    playAgainHandler();
  };

  const gameOverHandler = (checkBomb) => {
    if (checkBomb === "bomb") {
      setPass(false);
    } else {
      setPass(true);
    }

    setGameOver(true);
  };

  const goHomeHandler = () => {
    setStartGame(false);
    setGameOver(false);
  };

  /* 하트 버튼 누름 → 동영상 광고 시청 → 하트 얻음 */
  const getHeart = () => {
    console.log("Get Heart");
    /* GameContext 및 AsyncStorage heart 갯수 +3 업데이트 */
    return null;
  };

  const preLoad = async () => {
    try {
      // const storageStage = parseInt(await AsyncStorage.getItem("STAGE"));
      // const storageHorizontalNum = parseInt(
      //   await AsyncStorage.getItem("HORIZONTAL_NUM")
      // );
      // const storageHeart = parseInt(await AsyncStorage.getItem("HEART"));
      // const storageGameEnd = await AsyncStorage.getItem("GAME_END");

      // if (storageStage && storageHorizontalNum && storageHeart) {
      //   if (storageGameEnd === "true") {
      //     setGameInfo({
      //       stage: storageStage,
      //       horizontalNum: storageHorizontalNum,
      // heart: heart,
      //       gameEnd: true,
      //     });
      //   } else {
      //     setGameInfo({
      //       stage: storageStage,
      //       horizontalNum: storageHorizontalNum,
      // heart: heart,
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
    <View style={styles.screen}>
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
              pass={pass}
              getHeart={getHeart}
            />
          ) : (
            <GameScreen onGoHome={goHomeHandler} onGameOver={gameOverHandler} />
          )
        ) : (
          <StartGameScreen onStartGame={startGameHandler} getHeart={getHeart} />
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
    backgroundColor: colors.primaryColor,
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
