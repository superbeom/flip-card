import React, { useContext } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

import { GameContext } from "../context/GameContext";

/*
  2x2 - vw(20)
  3x3 - vw(15)
  4x4 - vw(11)
  5x5 - vw(9)
  6x6 - vw(8)
*/

const getSize = (stage) => {
  /* 2x2 */ if (stage <= 5) return vw(20);
  /* 3x3 */ else if (stage > 5 && stage <= 36) return vw(15);
  /* 4x4 */ else if (stage > 36 && stage <= 1000) return vw(11);
  /* 5x5 */ else if (stage === 2000) return vw(9);
  /* 6x6 */ else if (stage === 3000) return vw(8);
};

export default (props) => {
  const [{ stage }, _] = useContext(GameContext);

  return <FontAwesome5 {...props} size={getSize(stage)} />;
};