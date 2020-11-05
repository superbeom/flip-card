import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";
import {
  CONGRATULATIONS,
  CURRENT_STAGE,
  YOUR_SCORE,
  GAME_START,
  RESET_GAME,
} from "../constants/strings";

import Card from "../components/Card";
import Button from "../components/Button";
import StartButton from "../components/StartButton";

export default ({ onStartGame }) => {
  const [{ stage, totalScore, gameEnd }, setGameInfo] = useContext(GameContext);

  return (
    <View style={styles.screen}>
      <View style={styles.gameInfo}>
        <Card style={styles.card}>
          <View
            style={[
              styles.cardBox,
              gameEnd ? { justifyContent: "center" } : null,
            ]}
          >
            {gameEnd ? (
              <Text
                style={[
                  styles.cardText,
                  { color: colors.primaryColor, fontWeight: "800" },
                ]}
              >
                {CONGRATULATIONS}
              </Text>
            ) : (
              <>
                <Text style={styles.cardText}>{CURRENT_STAGE}</Text>
                <Text style={styles.cardText}>{stage}</Text>
              </>
            )}
          </View>
          <View style={styles.cardBox}>
            <Text style={styles.cardText}>{YOUR_SCORE}</Text>
            <Text style={styles.cardText}>{totalScore}</Text>
          </View>
        </Card>
      </View>
      <View style={styles.gameStartContainer}>
        <StartButton onPress={onStartGame}>{GAME_START}</StartButton>
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
    alignItems: "center",
  },
  card: {
    width: vw(80),
    maxWidth: "80%",
    height: vh(13),
    justifyContent: "space-around",
  },
  cardBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    fontSize: vw(4.5),
    fontWeight: "700",
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
