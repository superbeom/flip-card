import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";
import { CURRENT_STAGE, GAME_START, RESET_GAME } from "../constants/strings";
import { FLAG } from "../utils/FontAwesomeSource";

import Card from "../components/Card";
import Button from "../components/Button";
import StartButton from "../components/StartButton";
import Heart from "../components/Heart";

export default ({ onStartGame, getHeart }) => {
  const [{ stage, heart, gameEnd }, _] = useContext(GameContext);

  return (
    <View style={styles.screen}>
      <View style={styles.gameInfo}>
        <Card style={styles.card}>
          {gameEnd ? (
            <View style={styles.cardBox}>{FLAG}</View>
          ) : (
            <View style={styles.cardBox}>
              <Text style={styles.cardText}>{CURRENT_STAGE}</Text>
              <Text style={[styles.cardText, { marginTop: vh(1) }]}>
                {stage}
              </Text>
            </View>
          )}
        </Card>
        <View style={styles.heartBox}>
          <Heart onPress={getHeart} numOfHeart={heart} />
        </View>
      </View>
      <View style={styles.gameStartContainer}>
        <StartButton onPress={onStartGame} update={gameEnd}>
          {GAME_START}
        </StartButton>
      </View>
      <View style={styles.resetGameContainer}>
        <Button onPress={() => null}>{RESET_GAME}</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  gameInfo: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "50%",
    height: vh(13),
    justifyContent: "space-around",
  },
  cardBox: {
    alignItems: "center",
  },
  cardText: {
    fontSize: vw(5.5),
    fontWeight: "700",
  },
  heartBox: {
    width: "50%",
    height: vh(13),
    alignItems: "flex-end",
  },
  gameStartContainer: {
    flex: 1,
    justifyContent: "center",
  },
  resetGameContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
