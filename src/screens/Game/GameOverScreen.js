import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, BackHandler, Alert } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import {
  useGameInfo,
  useNextStage,
  usePlusHorizontalNum,
  usePlusHeart,
} from "../../context/GameContext";

import colors from "../../constants/colors";
import { PLAY_AGAIN, NEXT_STAGE, CHECK_GO_HOME } from "../../constants/strings";

import Button from "../../components/Button";
import StageButton from "../../components/StageButton";
import Heart from "../../components/Heart";
import Arrow from "../../components/Arrow";
import GetHeartText from "../../components/GetHeartText";
import GetHeart from "../../components/GetHeart";

const GameOverScreen = ({
  onPlayAgain,
  onGoHome,
  onStartGame,
  pass,
  getHeart,
}) => {
  const { stage, heart } = useGameInfo();
  const nextStage = useNextStage();
  const plusHorizontalNum = usePlusHorizontalNum();
  const plusHeart = usePlusHeart();
  const [checkReward, setCheckReward] = useState(false);

  const clickedGoHomeAfterSuccess = () => {
    successStage();
    onGoHome();
  };

  const clickedGoHomeAfterFail = () => {
    failStage();
    onGoHome();
  };

  const nextStageHandler = () => {
    successStage();
    onStartGame();
  };

  const replayStageHandler = () => {
    onPlayAgain();
  };

  const successStage = () => {
    if (stage === 5 || stage === 36 || stage === 157 || stage === 334) {
      plusHorizontalNum();
    }

    nextStage();
  };

  const failStage = () => {};

  const backAction = () => {
    Alert.alert(CHECK_GO_HOME, "", [
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

  const getReward = () => {
    setCheckReward(false); // checkReward 초기화

    plusHeart(1);
  };

  useEffect(() => {
    /* stage 10단계씩 깰 때마다 heart +1 추가 */
    if (pass && stage % 10 === 0) {
      setCheckReward(true);

      setTimeout(getReward, 2500);
    }

    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
    <>
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
                    <GetHeartText
                      enoughHeart={false}
                      screen={"gameOverScreen"}
                    />
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
                ? require("../../../assets/images/success.png")
                : require("../../../assets/images/fail.png")
            }
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
        <View style={styles.buttonContainer}>
          {stage % 10 === 0 ? (
            pass ? null : (
              <StageButton
                onPress={replayStageHandler}
                enoughHeart={heart > 0 ?? false}
              >
                {PLAY_AGAIN}
              </StageButton>
            )
          ) : (
            <StageButton
              onPress={replayStageHandler}
              enoughHeart={heart > 0 ?? false}
            >
              {PLAY_AGAIN}
            </StageButton>
          )}
          {pass ? (
            <StageButton
              onPress={nextStageHandler}
              enoughHeart={heart > 0 ?? false}
            >
              {NEXT_STAGE}
            </StageButton>
          ) : null}
        </View>
        <View style={styles.goHomeContainer}>
          <Button
            onPress={pass ? clickedGoHomeAfterSuccess : clickedGoHomeAfterFail}
            content={"home"}
          />
        </View>
      </View>
      {checkReward ? <GetHeart /> : null}
    </>
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
