import React, { useState, createContext } from "react";

const GameContext = createContext([{}, () => {}]);

const GameProvider = (props) => {
  const [state, setState] = useState({
    // stage: 1,
    // horizontalNum: 2,
    stage: 4,
    horizontalNum: 2,
    // stage: 8,
    // horizontalNum: 3,
    // stage: 95,
    // horizontalNum: 4,
    heart: 10,
    gameEnd: false,
  });

  return (
    <GameContext.Provider value={[state, setState]}>
      {props.children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
