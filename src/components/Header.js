import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { vh, vmax } from "react-native-expo-viewport-units";

import colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text
        style={[
          styles.title,
          { color: props.gaming ? colors.whiteColor : colors.primaryColor },
        ]}
      >
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    paddingTop: vh(3),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: vmax(4),
    fontWeight: "800",
  },
});

export default Header;
