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

      {stage > 299 && (
        <View style={styles.flamingoContainer}>
          <Image
            source={require("../../../assets/images/animal_5_flamingo.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 359 && (
        <View style={styles.elephantContainer}>
          <Image
            source={require("../../../assets/images/animal_6_elephant.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 419 && (
        <View style={styles.slothContainer}>
          <Image
            source={require("../../../assets/images/animal_7_sloth.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 479 && (
        <View style={styles.lionContainer}>
          <Image
            source={require("../../../assets/images/animal_8_lion.png.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 539 && (
        <View style={styles.racoonContainer}>
          <Image
            source={require("../../../assets/images/animal_9_racoon.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 599 && (
        <View style={styles.pandaContainer}>
          <Image
            source={require("../../../assets/images/animal_10_panda.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 659 && (
        <View style={styles.hippoContainer}>
          <Image
            source={require("../../../assets/images/animal_11_hippo.png")}
            style={styles.content}
            resizeMode={"cover"}
          />
        </View>
      )}

      {stage > 719 && (
        <View style={styles.monkeyContainer}>
          <Image
            source={require("../../../assets/images/animal_12_monkey.png")}
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
  flamingoContainer: {
    position: "absolute",
    top: -vh(6),
    left: vw(5),
    width: vw(25),
    height: vw(12),
    zIndex: 15,
  },
  elephantContainer: {
    position: "absolute",
    left: vw(7),
    bottom: vh(15),
    width: vw(30),
    height: vw(30),
    zIndex: -5,
  },
  slothContainer: {
    position: "absolute",
    top: vh(13),
    right: vw(0),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
  },
  lionContainer: {
    position: "absolute",
    right: -vw(3),
    bottom: vh(2),
    width: vw(30),
    height: vw(30),
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
  pandaContainer: {
    position: "absolute",
    top: vh(3),
    left: vw(42),
    width: vw(22),
    height: vw(22),
    zIndex: -5,
  },
  hippoContainer: {
    position: "absolute",
    left: vw(41),
    bottom: vh(14),
    width: vw(20),
    height: vw(20),
    zIndex: -5,
  },
  monkeyContainer: {
    position: "absolute",
    left: vw(40),
    top: vh(25),
    width: vw(20),
    height: vw(20),
    zIndex: 5,
  },
});
