import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Animated, TouchableOpacity } from "react-native";
import { vw, vh } from "react-native-expo-viewport-units";

import colors from "../constants/colors";
import { STOP_WATCH, BAN } from "../utils/FontAwesomeSource";

const height = vh(1);
let count = 0;

const Progress = ({ start, end, setLimitTime, numOfHeart, setGameInfo }) => {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  /* 3초 추가 & heart 갯수 -1 */
  const AddTime = () => {
    setLimitTime((curState) => curState + 3);

    if (numOfHeart > 0) {
      setGameInfo((curState) => ({
        ...curState,
        heart: curState.heart - 1,
      }));

      /* AsyncStorage heart 갯수 -1 업데이트 */
    }
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * start) / end);
  }, [start, width]);

  return (
    <>
      <TouchableOpacity
        style={styles.stopWatch}
        onPress={AddTime}
        disabled={numOfHeart < 2}
      >
        {numOfHeart < 2 ? BAN : STOP_WATCH}
      </TouchableOpacity>
      <View
        onLayout={(event) => {
          const newWidth = event.nativeEvent.layout.width;

          setWidth(newWidth);
        }}
        style={styles.progress}
      >
        <Animated.View
          style={[
            styles.animatedBox,
            {
              transform: [
                {
                  translateX: animatedValue,
                },
              ],
            },
          ]}
        />
      </View>
    </>
  );
};

const Timer = ({ onGameOver, numOfHeart, initialLimitTime, setGameInfo }) => {
  const [index, setIndex] = useState(0);
  const [limitTime, setLimitTime] = useState(10);

  useEffect(() => {
    if (count === 0) {
      setLimitTime(initialLimitTime);
      count++;
    }

    const interval = setInterval(() => {
      setIndex((curIndex) => (curIndex + 1) % (limitTime + 1));

      /* 제한 시간 초과 시, Game Over */
      if ((index + 1) % (limitTime + 1) === 0) {
        onGameOver("fail");
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <View style={styles.timer}>
      <Progress
        start={index}
        end={limitTime}
        setLimitTime={setLimitTime}
        numOfHeart={numOfHeart}
        setGameInfo={setGameInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timer: {
    flex: 1,
    justifyContent: "center",
    padding: vw(5),
  },
  stopWatch: {
    marginBottom: height,
  },
  progress: {
    height: height,
    backgroundColor: colors.timerBarColor,
    borderRadius: height,
    overflow: "hidden",
  },
  animatedBox: {
    width: "100%",
    height,
    borderRadius: height,
    backgroundColor: colors.whiteColor,
  },
});

export default Timer;
