import React, { useContext } from "react";

import { GameContext } from "../context/GameContext";

export default (stage) => {
  const [_, setGameInfo] = useContext(GameContext);

  if (stage === 6) {
    setGameInfo((curState) => ({
      ...curState,
      horizontalNum: curState.horizontalNum + 1,
    }));
  } else if (stage === 12) {
    setGameInfo((curState) => ({
      ...curState,
      horizontalNum: curState.horizontalNum + 1,
    }));
  }

  return null;
};
