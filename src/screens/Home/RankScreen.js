import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Platform,
  ImageBackground,
  FlatList,
} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { AdMobBanner } from "expo-ads-admob";
import { vw, vh } from "react-native-expo-viewport-units";

import { useUsername } from "../../context/AuthContext";
import { useGameInfo } from "../../context/GameContext";
import { CHECK_RANK, TOP_RANKER } from "./HomeQueries";

import colors from "../../constants/colors";
import { HOME } from "../../constants/strings";
import {
  CROWN_1,
  CROWN_2,
  CROWN_3,
  MEDAL_4,
  MEDAL_5,
  MEDAL_6,
  AWARD_7,
  AWARD_8,
  AWARD_9,
  PRICE_RIBBON_10,
  PRICE_RIBBON_11,
  PRICE_RIBBON_12,
} from "../../utils/FontAwesomeSource";

import Button from "../../components/Button";
import Loader from "../../components/Loader";

export default ({ navigation }) => {
  const { stage } = useGameInfo();
  const username = useUsername();
  const [loading, setLoading] = useState(false);
  const [topRankers, setTopRankers] = useState([]);
  const [myRank, setMyRank] = useState(null);
  const award = [
    CROWN_1,
    CROWN_2,
    CROWN_3,
    MEDAL_4,
    MEDAL_5,
    MEDAL_6,
    AWARD_7,
    AWARD_8,
    AWARD_9,
    PRICE_RIBBON_10,
    PRICE_RIBBON_11,
    PRICE_RIBBON_12,
  ];

  const [checkRankMutation] = useMutation(CHECK_RANK, {
    variables: { username },
  });

  const [topRankerMutation] = useMutation(TOP_RANKER);

  const preLoad = async () => {
    try {
      setLoading(true);

      const {
        data: { checkRank },
      } = await checkRankMutation();

      const {
        data: { topRanker },
      } = await topRankerMutation();

      setMyRank((curState) => checkRank);
      setTopRankers((curState) => [...topRanker]);
    } catch (error) {
      console.log("Error @preLoad_RankScreen: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <ImageBackground
      style={styles.screen}
      source={require("../../../assets/images/background.png")}
    >
      <StatusBar hidden={true} />

      <View style={styles.header} />

      <View style={styles.body}>
        <View style={styles.rankContainer}>
          <View style={[styles.rankBox, { marginBottom: vh(3) }]}>
            <Text style={styles.rankText}>Rank</Text>
            <Text style={styles.rankText}>Username</Text>
            <Text style={styles.rankText}>Stage</Text>
          </View>

          <FlatList
            data={topRankers}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.rankBox,
                  {
                    marginBottom: vh(1.5),
                  },
                  item.username === username
                    ? {
                        backgroundColor: "rgba(247, 229, 34, 0.5)",
                      }
                    : {},
                ]}
              >
                {award[index]}
                <Text style={styles.rankText}>{item.username}</Text>
                <Text style={styles.rankText}>{item.stage}</Text>
              </View>
            )}
            keyExtractor={() => (Math.random() + Math.random()).toString()}
            showsVerticalScrollIndicator={false}
          />

          <View
            style={[
              styles.rankBox,
              { backgroundColor: "rgba(247, 229, 34, 0.5)", marginTop: vh(3) },
            ]}
          >
            <Text style={styles.rankText}>{myRank}</Text>
            <Text style={styles.rankText}>{username}</Text>
            <Text style={styles.rankText}>{stage}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate(HOME)}
            content={"home"}
            size={vw(15)}
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
  header: {
    flex: 1,
    backgroundColor: colors.slateBlueColor,
  },
  body: {
    flex: 10,
    padding: 10,
  },
  rankContainer: {
    flex: 9,
  },
  rankBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(47, 79, 79, 0.5)",
    paddingVertical: vh(1.5),
    paddingHorizontal: vw(5),
    borderRadius: 25,
  },
  rankText: {
    color: colors.whiteColor,
    fontSize: vw(6),
    fontWeight: "500",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: vw(5),
  },
  ads: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
});
