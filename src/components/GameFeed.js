import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { GameContext } from "../context/GameContext";
import colors from "../constants/colors";
import checkStage from "../utils/checkStage";
import { shuffle } from "../utils/shuffleArray";
import { checkAnswer, checkTime } from "../utils/checkSomething";

let clickNum = 0;
let firstPick = null;
let secondPick = null;
let correctItemArray = [];

export default ({ onGameOver }) => {
  const [{ stage, horizontalNum }, _] = useContext(GameContext);
  const [shuffleData, setShuffleData] = useState([]);
  const [firstClickIndex, setFirstClickIndex] = useState(-1);
  const [secondClickIndex, setSecondClickIndex] = useState(-1);
  const [clickedBomb, setClickedBomb] = useState(false);
  const [showAnswer, setShowAnswer] = useState(true);

  const windowWidth = Dimensions.get("window").width;
  const fitWidth = windowWidth / (horizontalNum * 1.1);
  const fitMargin = (windowWidth - fitWidth * horizontalNum) / horizontalNum;

  /* 이미 설정된 변수 초기화 */
  const initializationFeed = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    correctItemArray = [];
  };

  /* 설정 초기화 */
  const initialization = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    setFirstClickIndex(-1);
    setSecondClickIndex(-1);
  };

  /* 카드 두 장 비교 */
  const compareCards = () => {
    if (
      firstPick !== null &&
      (secondPick !== null) & (firstPick === secondPick)
    ) {
      correctItemArray.push(firstPick);

      /* 정답을 모두 찾았는지 체크 */
      const nowNumOfCorrect = correctItemArray.length;
      if (nowNumOfCorrect === checkAnswer(stage)) {
        /* 정답을 모두 찾았다면, Game Over */
        return onGameOver();
      }
    }

    initialization();
  };

  const checkClick = (item, index) => {
    /* 폭탄 클릭 시, Game Over */
    if (item === "bomb") {
      setClickedBomb(true);
      setTimeout(onGameOver.bind(this, "fail"), 500);
    }

    if (clickNum === 0) {
      clickNum++;
      setFirstClickIndex(index);
      firstPick = item;
    } else if (clickNum === 1) {
      clickNum++;
      setSecondClickIndex(index);
      secondPick = item;
    }

    if (clickNum === 2 && item !== "bomb") {
      setTimeout(compareCards, 300);
    }
  };

  const preLoad = () => {
    try {
      const stageName = checkStage(stage);
      setShuffleData(shuffle(stageName));
      setTimeout(() => setShowAnswer(false), checkTime(stage));

      initializationFeed();
    } catch (error) {
      console.log("error @preLoad_GameFeed: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

  const answer = (item) => (
    <View style={[styles.itemThumbnail, { width: fitWidth, height: fitWidth }]}>
      {item}
    </View>
  );

  const question = (
    <Image
      style={[styles.imageThumbnail, { width: fitWidth, height: fitWidth }]}
      source={require("../../assets/images/question.png")}
      resizeMode={"cover"}
    />
  );

  return (
    <View>
      <FlatList
        data={shuffleData}
        renderItem={({ item, index }) => {
          const itemName = item.key;

          return (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: fitMargin,
              }}
            >
              <TouchableOpacity
                onPress={checkClick.bind(this, itemName, index)}
                disabled={
                  index === firstClickIndex ||
                  index === secondClickIndex ||
                  correctItemArray.includes(itemName) ||
                  clickedBomb ||
                  showAnswer
                }
              >
                {showAnswer
                  ? answer(item)
                  : firstClickIndex === index ||
                    secondClickIndex === index ||
                    correctItemArray.includes(itemName)
                  ? answer(item)
                  : question}
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={horizontalNum} // Setting the number of column
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false} // Scroll X
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  itemThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.backgroundColor,
  },
});
