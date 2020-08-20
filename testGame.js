import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameFeed from "../components/GameFeed";
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
      <View style={styles.body}>
        <GameFeed />
      </View>
      <View style={styles.footer}>
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
  body: {
    flex: 10,
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
});
