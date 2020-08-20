import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { stageArray, stageNumber } from "../stage/stageOne";

export default () => {
  const [show, setShow] = useState(true);

  const horizontalNum = 2;
  // const horizontalNum = stageNumber.six;
  const windowWidth = Dimensions.get("window").width;
  const fitWidth = windowWidth / (horizontalNum * 1.1);
  const fitMargin = (windowWidth - fitWidth * horizontalNum) / horizontalNum;

  return (
    <View>
      {!show && <Button title={"Click"} onPress={() => setShow(true)} />}
      {show && (
        <FlatList
          //   data={items}
          data={stageArray.six}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                marginTop: fitMargin,
              }}
            >
              <Image
                style={[
                  styles.imageThumbnail,
                  { width: fitWidth, height: fitWidth },
                ]}
                source={item}
                resizeMode={"cover"}
              />
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

const styles = StyleSheet.create({});
