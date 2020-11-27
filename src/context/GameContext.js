import React, { useState, createContext, useContext } from "react";
import { useMutation } from "react-apollo-hooks";
import AsyncStorage from "@react-native-community/async-storage";

import { useUsername } from "./AuthContext";
import { UPDATE_GAME_INFO } from "../screens/CommonQueries";

export const GameContext = createContext([{}, () => {}]);

export const GameProvider = ({ gameInfo: gameInfoProp, children }) => {
  const [gameInfo, setGameInfo] = useState(gameInfoProp);
  const username = useUsername();

  const [updateStageMutation] = useMutation(UPDATE_GAME_INFO);

  const [updateHorizontalNumMutation] = useMutation(UPDATE_GAME_INFO, {
    variables: {
      username,
      horizontalNum: gameInfo.horizontalNum,
    },
  });

  const [updateHeartMutation] = useMutation(UPDATE_GAME_INFO);

  const [updateGameEndMutation] = useMutation(UPDATE_GAME_INFO, {
    variables: {
      username,
      gameEnd: gameInfo.gameEnd,
    },
  });

  const testStage = async () => {
    console.log("username: ", username);
    await updateStageMutation({
      username: username,
      stage: gameInfo.stage + 1,
    });
  };

  /* heart 갯수 -1 업데이트 */
  const minusHeart = async () => {
    try {
      console.log("minusHeart Func from GameContext");

      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart - 1,
      }));

      /* Store Game Info to Backend */
      await updateHeartMutation({
        variables: {
          username,
          heart: gameInfo.heart - 1,
        },
      });

      /* Store Game Info to Local */
      await AsyncStorage.setItem("heart", JSON.stringify(gameInfo.heart - 1));
    } catch (error) {
      console.log("Error @minusHeart_GameContext: ", error.message);
    }
  };

  return (
    <GameContext.Provider
      value={{ gameInfo, setGameInfo, minusHeart, testStage }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameInfo = () => {
  const { gameInfo } = useContext(GameContext);
  return gameInfo;
};

export const useSetGameInfo = () => {
  const { setGameInfo } = useContext(GameContext);
  return setGameInfo;
};

export const useMinusHeart = () => {
  const { minusHeart } = useContext(GameContext);
  return minusHeart;
};

export const useTestStage = () => {
  const { testStage } = useContext(GameContext);
  return testStage;
};
