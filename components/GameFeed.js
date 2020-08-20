import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import FlipCard from "react-native-flip-card";
import { stageArray, stageNumber } from "../stage/stageOne";
import { shuffle } from "../shuffleArray";

let clickNum = 0;
let firstPick = null;
let secondPick = null;
let correctItemArray = [];

export default () => {
  const [show, setShow] = useState(true);
  const [shuffleData, setShuffleData] = useState([]);
  const [firstClickIndex, setFirstClickIndex] = useState(-1);
  const [secondClickIndex, setSecondClickIndex] = useState(-1);

  const twoMulTwo = [
    require("../assets/images/dog1.png"),
    require("../assets/images/dog2.png"),
    require("../assets/images/dog3.png"),
    require("../assets/images/dog4.png"),
    require("../assets/images/dog1.png"),
    require("../assets/images/dog2.png"),
    require("../assets/images/dog3.png"),
    require("../assets/images/dog4.png"),
    require("../assets/images/bomb.png"),
  ];

  const horizontalNum = 3;
  // const horizontalNum = stageNumber.three;
  const windowWidth = Dimensions.get("window").width;
  const fitWidth = windowWidth / (horizontalNum * 1.1);
  const fitMargin = (windowWidth - fitWidth * horizontalNum) / horizontalNum;

  const bombCard = () => {
    clickNum = 0;
    firstPick = null;
    secondPick = null;
    setFirstClickIndex(-1);
    setSecondClickIndex(-1);
    correctItemArray = [];
    setTimeout(preLoad, 500);
  };

  const compareCards = () => {
    if (firstPick === secondPick) {
      correctItemArray.push(firstPick);
    }

    clickNum = 0;
    firstPick = null;
    secondPick = null;
    setFirstClickIndex(-1);
    setSecondClickIndex(-1);
  };

  const checkClick = (item, index) => {
    if (clickNum === 0) {
      clickNum++;
      setFirstClickIndex(index);
      firstPick = item;
    } else if (clickNum === 1) {
      clickNum++;
      setSecondClickIndex(index);
      secondPick = item;
    }

    if (item === 7) {
      console.log("This is Bomb!!!");
      bombCard();
    }

    if (clickNum === 2) {
      setTimeout(compareCards, 500);
    }
  };

  const preLoad = () => {
    setShuffleData(shuffle(twoMulTwo));
  };

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <View>
      {!show && <Button title={"Click"} onPress={() => setShow(true)} />}
      {show && (
        <FlatList
          data={shuffleData}
          renderItem={({ item, index }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: fitMargin,
              }}
            >
              <TouchableOpacity
                onPress={checkClick.bind(this, item, index)}
                disabled={
                  index === firstClickIndex ||
                  index === secondClickIndex ||
                  correctItemArray.includes(item)
                }
              >
                <Image
                  style={[
                    styles.imageThumbnail,
                    { width: fitWidth, height: fitWidth },
                  ]}
                  source={
                    firstClickIndex === index ||
                    secondClickIndex === index ||
                    correctItemArray.includes(item)
                      ? item
                      : require("../assets/images/question.png")
                  }
                  resizeMode={"cover"}
                />
              </TouchableOpacity>
            </View>
          )}
          //Setting the number of column
          numColumns={horizontalNum}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
