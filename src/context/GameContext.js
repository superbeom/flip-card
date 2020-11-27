import React, { useState, createContext, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

export const GameContext = createContext([{}, () => {}]);

export const GameProvider = ({ gameInfo: gameInfoProp, children }) => {
  // const [state, setState] = useState({
  //   // stage: 1,
  //   // horizontalNum: 2,
  //   // stage: 4,
  //   // horizontalNum: 2,
  //   stage: 8,
  //   horizontalNum: 3,
  //   // stage: 95,
  //   // horizontalNum: 4,
  //   // stage: 140,
  //   // horizontalNum: 6,
  //   heart: 10,
  //   gameEnd: false,
  // });

  const [gameInfo, setGameInfo] = useState(gameInfoProp);

  /* heart 갯수 -1 업데이트 */
  const minusHeart = async () => {
    // try {
    //   /* AsyncStorage heart 갯수 -1 업데이트 */
    //   setState((curState) => ({
    //     ...curState,
    //     heart: curState.heart - 1,
    //   }));
    // } catch (error) {
    //   console.log("Error @test_GameContext: ", error.message);
    // }
  };

  return (
    <GameContext.Provider value={{ gameInfo, setGameInfo, minusHeart }}>
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
