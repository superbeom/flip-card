import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Alert,
  BackHandler,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { AdMobBanner } from "expo-ads-admob";

import { GameContext } from "../context/GameContext";
import colors from "../constants/colors";
import { CONGRATULATIONS } from "../constants/strings";

import Header from "../components/Header";
import StartGameScreen from "../screens/StartGameScreen";
import GameScreen from "../screens/GameScreen";
import GameOverScreen from "../screens/GameOverScreen";
import GetHeartScreen from "../screens/GetHeartScreen";

export default AppStack = () => {
  const [{ stage, heart }, setGameInfo] = useContext(GameContext);
  const [loading, setLoading] = useState(true);
  // const [startGame, setStartGame] = useState(false);
  // const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pass, setPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const playAgainHandler = () => {
    setGameOver(false);
  };

  const startGameHandler = () => {
    setStartGame(true);
    playAgainHandler();
  };

  const gameOverHandler = (checkPass) => {
    if (checkPass === "fail") {
      setPass(false);

      if (heart > 0) {
        setGameInfo((curState) => ({
          ...curState,
          heart: curState.heart - 1,
        }));

        /* AsyncStorage heart 갯수 -1 업데이트 */
      }
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
    setModalVisible((curState) => !curState);

    return null;
  };

  const closeModal = () => {
    setModalVisible((curState) => !curState);
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

  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);

    return true;
  };

  useEffect(() => {
    preLoad();

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
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
        <AdMobBanner
          bannerSize="banner"
          adUnitID={
            Platform.OS === "ios"
              ? "ca-app-pub-3940256099942544/6300978111"
              : "ca-app-pub-3940256099942544/6300978111"
          } // This is my ID
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <GetHeartScreen
          setGameInfo={setGameInfo}
          closeModal={closeModal}
          numOfHeart={heart}
        />
      </Modal>
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
