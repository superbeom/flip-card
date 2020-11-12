import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const StartButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.5}
      disabled={props.update}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.update ? "Updating..." : props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: vw(40),
    height: vw(40),
    borderRadius: vw(40) / 2,
    backgroundColor: colors.whiteColor,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.whiteColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonText: {
    color: colors.primaryColor,
    fontSize: vw(6),
    fontWeight: "800",
  },
});

export default StartButton;
