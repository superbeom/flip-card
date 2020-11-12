import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

import { ARROW_RIGHT } from "../utils/FontAwesomeSource";

export default ({ enoughHeart }) => {
  const animation = useRef(new Animated.Value(0)).current;

  const zeroToOne = () => {
    return Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      delay: 300,
      useNativeDriver: false,
    });
  };

  const oneToZero = () => {
    return Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      delay: 300,
      useNativeDriver: false,
    });
  };

  const executeAnimation = () => {
    Animated.loop(Animated.sequence([zeroToOne(), oneToZero()])).start();
  };

  useEffect(() => {
    if (!enoughHeart) {
      executeAnimation();
    }
  }, []);

  return (
    <Animated.View style={{ opacity: animation }}>
      {!enoughHeart ? ARROW_RIGHT : null}
    </Animated.View>
  );
};
