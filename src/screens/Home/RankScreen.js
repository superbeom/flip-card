import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  ImageBackground,
} from "react-native";
import { AdMobBanner } from "expo-ads-admob";
import { vw } from "react-native-expo-viewport-units";

import { HOME } from "../../constants/strings";

import Button from "../../components/Button";

export default ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/background.png")}
    >
      <StatusBar hidden={true} />

      <View style={styles.body}>
        <View style={styles.rankContainer}></View>
        <View style={styles.additionalRankContainer}></View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate(HOME)}
            content={"home"}
            size={vw(20)}
          />
        </View>
      </View>

      <View style={styles.ads}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID={
            Platform.OS === "ios"
              ? "ca-app-pub-3940256099942544/6300978111"
              : "ca-app-pub-3940256099942544/6300978111"
          } // This is my ID
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 11,
    padding: 10,
  },
  rankContainer: {
    flex: 7,
    backgroundColor: "skyblue",
  },
  additionalRankContainer: {
    flex: 2,
    backgroundColor: "gold",
  },
  buttonContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: vw(5),
    backgroundColor: "lightpink",
  },
  ads: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
