import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useQuery } from "react-apollo-hooks";
import AsyncStorage from "@react-native-community/async-storage";

import { GameProvider } from "../context/GameContext";
import { useUsername } from "../context/AuthContext";

import { GET_USER } from "../screens/CommonQueries";

import HomeScreen from "../screens/Home/HomeScreen";

import Loader from "../components/Loader";

const MainNavigation = createStackNavigator();

export default () => {
  const username = useUsername();
  let gameInfo = {
    stage: 1,
    horizontalNum: 2,
    heart: 5,
    gameEnd: false,
  };

  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      username: username,
    },
  });

  if (error) {
    console.log("Error @useQuery_MainStack: ", error);
  }

  if (!loading && data) {
    try {
      const {
        seeUser: { stage, horizontalNum, heart, gameEnd },
      } = data;

      console.log("data: ", data);

      gameInfo = {
        stage,
        horizontalNum,
        heart,
        gameEnd,
      };

      /* Store Game Info to Local */
      // storeGameInfoToLocal()
    } catch (error) {
      console.log("Error @If_MainStack: ", error.message);
    }
  }

  /* Store Game Info to Local */
  const storeGameInfoToLocal = async () => {
    try {
      await AsyncStorage.setItem("stage", JSON.stringify(stage));
      await AsyncStorage.setItem(
        "horizontalNum",
        JSON.stringify(horizontalNum)
      );
      await AsyncStorage.setItem("heart", JSON.stringify(heart));
      await AsyncStorage.setItem("gameEnd", JSON.stringify(gameEnd));
    } catch (error) {
      console.log("Error @preLoad_MainStack: ", error.message);
    }
  };

  return !loading && data ? (
    <GameProvider gameInfo={gameInfo}>
      <MainNavigation.Navigator headerMode="none">
        <MainNavigation.Screen name="Home" component={HomeScreen} />
      </MainNavigation.Navigator>
    </GameProvider>
  ) : (
    <Loader />
  );
};
