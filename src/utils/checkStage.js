import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

import FaceItem from "../components/FaceItem";
import colors from "../constants/colors";

/* 2x2 */
const stage1 = [
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(25)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(25)} color="red" />,
];

/* 3x3 */
const stage2 = [
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <FaceItem
    key={"smile-lightpink"}
    name="smile"
    color={colors.lightPinkColor}
  />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(12)} color="red" />,
];

/* 4x4 */
const stage3 = [
  <FaceItem key={"smile-lightpink"} name="smile" color="lightpink" />,
  <FaceItem key={"smile-lightpink"} name="smile" color="lightpink" />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-lime"} name="smile" color="lime" />,
  <FaceItem key={"smile-lime"} name="smile" color="lime" />,
  <FaceItem key={"smile-gold"} name="smile" color="gold" />,
  <FaceItem key={"smile-gold"} name="smile" color="gold" />,
  <FaceItem key={"smile-darkgray"} name="smile" color="darkgray" />,
  <FaceItem key={"smile-darkgray"} name="smile" color="darkgray" />,
  <FaceItem key={"smile-purple"} name="smile" color="purple" />,
  <FaceItem key={"smile-purple"} name="smile" color="purple" />,
  <FaceItem key={"smile-darkslategray"} name="smile" color="darkslategray" />,
  <FaceItem key={"smile-darkslategray"} name="smile" color="darkslategray" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(12)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(12)} color="red" />,
];

/* 5x5 */
const stage4 = [
  <FaceItem key={"smile-lightpink"} name="smile" color={colors.blackColor} />,
  <FaceItem key={"smile-lightpink"} name="smile" color={colors.blackColor} />,
  <FaceItem
    key={"smile-beam-skyblue"}
    name="smile-beam"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"smile-beam-skyblue"}
    name="smile-beam"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"smile-wink-lime"}
    name="smile-wink"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"smile-wink-lime"}
    name="smile-wink"
    color={colors.blackColor}
  />,
  <FaceItem key={"sad-cry-gold"} name="sad-cry" color={colors.blackColor} />,
  <FaceItem key={"sad-cry-gold"} name="sad-cry" color={colors.blackColor} />,
  <FaceItem
    key={"sad-tear-darkgray"}
    name="sad-tear"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"sad-tear-darkgray"}
    name="sad-tear"
    color={colors.blackColor}
  />,
  <FaceItem key={"angry-purple"} name="angry" color={colors.blackColor} />,
  <FaceItem key={"angry-purple"} name="angry" color={colors.blackColor} />,
  <FaceItem
    key={"dizzy-darkslategray"}
    name="dizzy"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"dizzy-darkslategray"}
    name="dizzy"
    color={colors.blackColor}
  />,
  <FaceItem key={"frown-darksalmon"} name="frown" color={colors.blackColor} />,
  <FaceItem key={"frown-darksalmon"} name="frown" color={colors.blackColor} />,
  <FaceItem
    key={"grimace-mediumblue"}
    name="grimace"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grimace-mediumblue"}
    name="grimace"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-hearts-lavender"}
    name="grin-hearts"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-hearts-lavender"}
    name="grin-hearts"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-stars-maroon"}
    name="grin-stars"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-stars-maroon"}
    name="grin-stars"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-tongue-olive"}
    name="grin-tongue"
    color={colors.blackColor}
  />,
  <FaceItem
    key={"grin-tongue-olive"}
    name="grin-tongue"
    color={colors.blackColor}
  />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(10)} color="red" />,
];

/* 6x6 */
const stage5 = [
  <FaceItem key={"smile-lightpink"} name="smile" color="lightpink" />,
  <FaceItem key={"smile-lightpink"} name="smile" color="lightpink" />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-skyblue"} name="smile" color={colors.skyBlueColor} />,
  <FaceItem key={"smile-lime"} name="smile" color="lime" />,
  <FaceItem key={"smile-lime"} name="smile" color="lime" />,
  <FaceItem key={"smile-gold"} name="smile" color="gold" />,
  <FaceItem key={"smile-gold"} name="smile" color="gold" />,
  <FaceItem key={"smile-darkgray"} name="smile" color="darkgray" />,
  <FaceItem key={"smile-darkgray"} name="smile" color="darkgray" />,
  <FaceItem key={"smile-purple"} name="smile" color="purple" />,
  <FaceItem key={"smile-purple"} name="smile" color="purple" />,
  <FaceItem key={"smile-darkslategray"} name="smile" color="darkslategray" />,
  <FaceItem key={"smile-darkslategray"} name="smile" color="darkslategray" />,
  <FaceItem key={"smile-darksalmon"} name="smile" color="darksalmon" />,
  <FaceItem key={"smile-darksalmon"} name="smile" color="darksalmon" />,
  <FaceItem key={"smile-mediumblue"} name="smile" color="mediumblue" />,
  <FaceItem key={"smile-mediumblue"} name="smile" color="mediumblue" />,
  <FaceItem key={"smile-lavender"} name="smile" color="lavender" />,
  <FaceItem key={"smile-lavender"} name="smile" color="lavender" />,
  <FaceItem key={"smile-maroon"} name="smile" color="maroon" />,
  <FaceItem key={"smile-maroon"} name="smile" color="maroon" />,
  <FaceItem key={"smile-olive"} name="smile" color="olive" />,
  <FaceItem key={"smile-olive"} name="smile" color="olive" />,
  <FaceItem key={"smile-orange"} name="smile" color="orange" />,
  <FaceItem key={"smile-orange"} name="smile" color="orange" />,
  <FaceItem key={"smile-seagreen"} name="smile" color="seagreen" />,
  <FaceItem key={"smile-seagreen"} name="smile" color="seagreen" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
  <MaterialCommunityIcons key={"bomb"} name="bomb" size={vw(9)} color="red" />,
];

export default (stage) => {
  if (stage === 1) return stage1;
  else if (stage === 2) return stage2;
  else if (stage === 3) return stage3;
  else if (stage === 4) return stage4;
  else if (stage === 5) return stage5;
};
