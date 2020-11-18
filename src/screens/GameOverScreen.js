import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Image, BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";
import colors from "../constants/colors";
import { PLAY_AGAIN, NEXT_STAGE, GO_HOME } from "../constants/strings";

import Button from "../components/Button";
import StageButton from "../components/StageButton";
import Heart from "../components/Heart";
import Arrow from "../components/Arrow";
import GetHeartText from "../components/GetHeartText";

const GameOverScreen = ({
  onPlayAgain,
  onGoHome,
  onStartGame,
  pass,
  getHeart,
}) => {
  const [{ stage, heart }, setGameInfo] = useContext(GameContext);

  /*
    GameFeed의 FlatList numColumns 수 올릴 필요가 있을 때마다,
    plusHorizontalNum() 실행하기
  */
  const plusHorizontalNum = () => {
    setGameInfo((curState) => ({
      ...curState,
      horizontalNum: curState.horizontalNum + 1,
    }));

    /* AsyncStorage horizontalNum +1 업데이트 */
  };

  const clickedGoHomeAfterSuccess = () => {
    successStage();
    onGoHome();
  };

  const clickedGoHomeAfterFail = () => {
    failStage();
    onGoHome();
  };

  const nextStage = async () => {
    successStage();
    onStartGame();
  };

  const replayStage = () => {
    onPlayAgain();
  };

  const successStage = async () => {
    if (stage === 5) {
      plusHorizontalNum();
    } else if (stage === 36) {
      plusHorizontalNum();
    }

    setGameInfo((curState) => ({
      ...curState,
      stage: curState.stage + 1,
    }));

    /* AsyncStorage stage +1 업데이트 */
  };

  const failStage = () => {};

  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to go home?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "YES",
        onPress: pass ? clickedGoHomeAfterSuccess : clickedGoHomeAfterFail,
      },
    ]);

    return true;
  };

  useEffect(() => {
    /* stage 10단계씩 깰 때마다 heart +1 추가 */
    if (pass && stage % 10 === 0) {
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart + 1,
      }));

      /* AsyncStorage heart 갯수 +1 업데이트 */
    }

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <View style={styles.screen}>
      <View style={styles.heartContainer}>
        <View style={styles.heartBox}>
          {heart <= 1 ? (
            <View
              style={{
                marginRight: vw(3),
                justifyContent: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                  <GetHeartText enoughHeart={false} screen={"gameOverScreen"} />
                </View>
                <View style={{ justifyContent: "center" }}>
                  <Arrow enoughHeart={false} direction={"right"} />
                </View>
              </View>
            </View>
          ) : null}
          <Heart onPress={getHeart} numOfHeart={heart} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={
            pass
              ? require("../../assets/images/success.png")
              : require("../../assets/images/fail.png")
          }
          style={styles.image}
          resizeMode={"cover"}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StageButton onPress={replayStage} enoughHeart={heart > 0 ?? false}>
          {PLAY_AGAIN}
        </StageButton>
        {pass ? (
          <StageButton onPress={nextStage} enoughHeart={heart > 0 ?? false}>
            {NEXT_STAGE}
          </StageButton>
        ) : null}
      </View>
      <View style={styles.goHomeContainer}>
        <Button
          onPress={pass ? clickedGoHomeAfterSuccess : clickedGoHomeAfterFail}
        >
          {GO_HOME}
        </Button>
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
  heartContainer: {
    width: "100%",
    marginVertical: vh(2),
  },
  heartBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: vw(3),
  },
  imageContainer: {
    width: vh(30),
    height: vh(30),
    borderRadius: vh(30) / 2,
    borderWidth: 3,
    borderColor: colors.whiteColor,
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
