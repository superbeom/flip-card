import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Alert,
  BackHandler,
  Modal,
  Platform,
  ImageBackground,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";

import {
  useGameInfo,
  useSetGameInfo,
  useMinusHeart,
} from "../../context/GameContext";
import { CONGRATULATIONS, HOLD_ON, CHECK_EXIT } from "../../constants/strings";

import StartGameScreen from "../Game/StartGameScreen";
import GameScreen from "../Game/GameScreen";
import GameOverScreen from "../Game/GameOverScreen";
import GetHeartScreen from "../Game/GetHeartScreen";

import Header from "../../components/Header";

export default () => {
  const { stage, heart } = useGameInfo();
  const setGameInfo = useSetGameInfo();
  const minusHeart = useMinusHeart();
  const [startGame, setStartGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [pass, setPass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [checkReward, setCheckReward] = useState(false);

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
        console.log("minus heart");

        minusHeart();
      }
    } else {
      setPass(true);
    }

    setGameOver(true);
  };

  const goHomeHandler = () => {
    setStartGame(false);
    setGameOver(false);

    setToggleSwitch((curState) => !curState);
  };

  /* 하트 버튼 누름 → 동영상 광고 시청 → 하트 얻음 */
  const getHeart = () => {
    setModalVisible((curState) => !curState);

    return null;
  };

  const closeModal = () => {
    setModalVisible((curState) => !curState);

    if (!startGame) {
      setToggleSwitch((curState) => !curState);
    }
  };

  const backAction = () => {
    Alert.alert(HOLD_ON, CHECK_EXIT, [
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
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/background.png")}
    >
      <StatusBar hidden={true} />
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
          <StartGameScreen
            onStartGame={startGameHandler}
            getHeart={getHeart}
            toggleSwitch={toggleSwitch}
          />
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
        onRequestClose={() => null}
      >
        <GetHeartScreen
          setGameInfo={setGameInfo}
          closeModal={closeModal}
          numOfHeart={heart}
          checkReward={checkReward}
          setCheckReward={setCheckReward}
        />
      </Modal>
    </ImageBackground>
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
