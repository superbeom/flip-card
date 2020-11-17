import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";
import CurrencyFormat from "react-currency-format";
import { AdMobRewarded } from "expo-ads-admob";

import colors from "../constants/colors";
import { HEART } from "../utils/FontAwesomeSource";

import Card from "../components/Card";
import Heart from "../components/Heart";
import Button from "../components/Button";

const Content = ({ onPress, num, price }) => (
  <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
    <Card style={styles.card}>
      <View style={styles.heartBox}>
        {HEART}
        <Text style={styles.mulText}>X </Text>
        <Text style={styles.numText}>{num}</Text>
      </View>
      <View style={styles.priceBox}>
        <CurrencyFormat
          renderText={(value) => <Text style={styles.price}>{value}</Text>}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"} // English
          // suffix={"원"} // Korean
        />
      </View>
    </Card>
  </TouchableOpacity>
);

export default ({ setGameInfo, closeModal, numOfHeart }) => {
  const getHeartFree = async () => {
    // Display a rewarded ad
    await AdMobRewarded.setAdUnitID("ca-app-pub-3940256099942544/5224354917"); // Test ID, Replace with your-admob-unit-id
    await AdMobRewarded.requestAdAsync();
    await AdMobRewarded.showAdAsync();

    let startTime;
    let endTime;
    let playTime;

    AdMobRewarded.addEventListener("rewardedVideoDidStart", () => {
      startTime = new Date();
    });

    AdMobRewarded.addEventListener("rewardedVideoDidClose", () => {
      endTime = new Date();
      playTime = endTime - startTime;

      /* 5초 이상 광고 시청 시, heart +3 추가 */
      if (playTime >= 5000) {
        setGameInfo((curState) => ({
          ...curState,
          heart: curState.heart + 3,
        }));

        /* AsyncStorage heart 갯수 +3 업데이트 */
      }
    });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.heartContainer}>
        <Heart onPress={() => null} numOfHeart={numOfHeart} disabled={true} />
      </View>
      <View style={styles.contentContainer}>
        <Content onPress={getHeartFree} num={3} price={0} />
        <Content onPress={() => null} num={10} price={0.1} />
        <Content onPress={() => null} num={50} price={0.45} />
        <Content onPress={() => null} num={100} price={0.8} />
      </View>
      <View style={styles.footer}>
        <Button onPress={closeModal}>Go Back</Button>
      </View>
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
  heartContainer: {
    width: "100%",
    height: vh(13),
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: vw(3),
    marginBottom: vh(2),
  },
  contentContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: vh(13),
    justifyContent: "flex-end",
    marginBottom: vh(2),
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
