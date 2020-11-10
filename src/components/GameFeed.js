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
    } catch (error) {
      console.log("error @preLoad_GameFeed: ", error.message);
    }
  };

  useEffect(() => {
    preLoad();
  }, []);

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
                  clickedBomb
                }
              >
                <View
                  style={[
                    styles.itemThumbnail,
                    { width: fitWidth, height: fitWidth },
                  ]}
                >
                  {item}
                </View>
                {/* {firstClickIndex === index ||
                secondClickIndex === index ||
                correctItemArray.includes(itemName) ? (
                  <View
                    style={[
                      styles.itemThumbnail,
                      { width: fitWidth, height: fitWidth },
                    ]}
                  >
                    {item}
                  </View>
                ) : (
                  <Image
                    style={[
                      styles.imageThumbnail,
                      { width: fitWidth, height: fitWidth },
                    ]}
                    source={require("../../assets/images/question.png")}
                    resizeMode={"cover"}
                  />
                )} */}
              </TouchableOpacity>
            </View>
          );
        }}
        numColumns={horizontalNum} //Setting the number of column
        keyExtractor={(item, index) => index.toString()}
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
