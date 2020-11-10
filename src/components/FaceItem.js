import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";

/*
  2x2 - vw(25)  -- bomb - vw(25)
  3x3 - vw(15)  -- bomb - vw(12)
  4x4 - vw(11)  -- bomb - vw(12)
  5x5 - vw(9)  -- bomb - vw(10)
  6x6 - vw(8)  -- bomb - vw(9)
*/

const getSize = (stage) => {
  if (stage === 1) return vw(25);
  else if (stage === 2) return vw(15);
  else if (stage === 3) return vw(11);
  else if (stage === 4) return vw(9);
  else if (stage === 5) return vw(8);
};

export default (props) => {
  const [{ stage }, _] = useContext(GameContext);

  return <FontAwesome5 {...props} size={getSize(stage)} />;
};
