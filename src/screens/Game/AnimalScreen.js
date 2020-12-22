import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import { useGameInfo } from "../../context/GameContext";

export default () => {
  const { stage } = useGameInfo();

  return (
    <>
      {stage > 59 && (
        <View style={styles.bushContainer}>
          <Image
            source={require("../../../assets/images/animal_1_bush.png")}
            style={styles.content}
            resizeMode={"stretch"}
          />
        </View>
      )}

      {stage > 119 && (
        <View style={styles.flowerContainer}>
          <Image
            source={require("../../../assets/images/animal_2_flower.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 179 && (
        <View style={styles.squirrelContainer}>
          <Image
            source={require("../../../assets/images/animal_3_squirrel.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 239 && (
        <View style={styles.donkeyContainer}>
          <Image
            source={require("../../../assets/images/animal_4_donkey.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 479 && (
        <View style={styles.racoonContainer}>
          <Image
            source={require("../../../assets/images/animal_8_racoon.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
  },
  bushContainer: {
    position: "absolute",
    bottom: vh(1),
    width: "100%",
    height: vh(10),
    zIndex: -2,
  },
  flowerContainer: {
    position: "absolute",
    left: vw(5),
    bottom: vh(2),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
  },
  squirrelContainer: {
    position: "absolute",
    left: vw(52),
    bottom: vh(2),
    width: vw(12),
    height: vw(12),
    zIndex: -5,
  },
  donkeyContainer: {
    position: "absolute",
    right: vw(5),
    bottom: vh(20),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
  },
  racoonContainer: {
    position: "absolute",
    left: vw(30),
    bottom: vh(2),
    width: vw(18),
    height: vw(18),
    zIndex: -5,
  },
});
