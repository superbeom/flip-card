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

  const initialization = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    setFirstClickIndex(-1);
    setSecondClickIndex(-1);
  };

  const compareCards = () => {
    if (firstPick === secondPick) {
      correctItemArray.push(firstPick);
    }

    initialization();
  };

  const checkClick = (item, index) => {
    if (item === "bomb") {
      // initialization();
      setClickedBomb(true);
      setTimeout(onGameOver, 500);
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
      setTimeout(compareCards, 500);
    }
  };

  const preLoad = () => {
    try {
      const stageName = checkStage(stage);
      setShuffleData(shuffle(stageName));
      setTimeout(() => setShowAnswer(false), 2000);
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
