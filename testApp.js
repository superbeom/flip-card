import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import GameFeed from "./components/GameFeed";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from "expo-ads-admob";

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.gameFeed}>
        <GameFeed />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      >
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    backgroundColor: "gray",
    justifyContent: "center",
  },
  header: { flex: 1, backgroundColor: "#5f9ea0" },
  gameFeed: {
    flex: 10,
    justifyContent: "center",
    backgroundColor: "lightyellow",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
