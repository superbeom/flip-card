import React, { useState, createContext } from "react";

const GameContext = createContext([{}, () => {}]);

const GameProvider = (props) => {
  const [state, setState] = useState({
    // stage: 1,
    // horizontalNum: 2,
    stage: 95,
    horizontalNum: 4,
    totalScore: 0,
    coin: 3,
    gameEnd: false,
  });

  return (
    <GameContext.Provider value={[state, setState]}>
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
