import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";
import { HEART } from "../utils/FontAwesomeSource";

import Card from "../components/Card";

const Content = ({ onPress, num, price }) => (
  <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
    <Card style={styles.card}>
      <View style={styles.heartBox}>
        {HEART}
        <Text style={styles.mulText}>X </Text>
        <Text style={styles.numText}>{num}</Text>
      </View>
      <View style={styles.priceBox}>
        {/* react-currency-format */}
        <Text style={styles.price}>{price}원</Text>
      </View>
    </Card>
  </TouchableOpacity>
);

export default () => {
  return (
    <View style={styles.screen}>
      <Content onPress={() => null} num={3} price={0} />
      <Content onPress={() => null} num={10} price={100} />
      <Content onPress={() => null} num={50} price={450} />
      <Content onPress={() => null} num={100} price={800} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primaryColor,
  },
  cardContainer: {
    width: "80%",
    marginBottom: vh(4),
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heartBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  priceBox: {},
  mulText: {
    fontSize: vw(5),
    fontWeight: "500",
    color: colors.blackColor,
  },
  numText: {
    fontSize: vw(7),
    fontWeight: "500",
    color: colors.blackColor,
  },
  price: {
    fontSize: vw(7),
    fontWeight: "700",
    color: colors.blackColor,
  },
});
