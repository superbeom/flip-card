import React from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { vw, vh, vmax } from "react-native-expo-viewport-units";

import FontAwesomeItem from "../components/FontAwesomeItem";
import colors from "../constants/colors";

/*
  Basics
*/

export const HEART = (
  <MaterialCommunityIcons
    name="cards-heart"
    size={vmax(7)}
    color={colors.redColor}
  />
);

export const ARROW_UP = (
  <Entypo name="arrow-up" size={vh(6)} color={colors.whiteColor} />
);

export const ARROW_RIGHT = (
  <Entypo name="arrow-right" size={vh(6)} color={colors.whiteColor} />
);

export const FLAG = (
  <FontAwesome5
    name="flag-checkered"
    size={vmax(6)}
    color={colors.primaryColor}
  />
);

export const STOP_WATCH = (
  <Entypo name="stopwatch" size={vh(3.5)} color={colors.whiteColor} />
);

export const BAN = (
  <FontAwesome name="ban" size={vh(3.5)} color={colors.whiteColor} />
);

/*
  BOMB
*/

export const BOMB_2X2 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(20)}
    color={colors.redColor}
  />
);

export const BOMB_3X3 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(18)}
    color={colors.redColor}
  />
);

export const BOMB_4X4 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(12)}
    color={colors.redColor}
  />
);

export const BOMB_5X5 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(10)}
    color={colors.redColor}
  />
);

export const BOMB_6X6 = (
  <MaterialCommunityIcons
    key={"bomb"}
    name="bomb"
    size={vw(9)}
    color={colors.redColor}
  />
);

/*
  STEP 1
*/

export const PLANE = (
  <FontAwesomeItem key={"plane"} name="plane" color={colors.deepSkyBlueColor} />
);

export const PLANE_DARK = (
  <FontAwesomeItem
    key={"plane-dark"}
    name="plane"
    color={colors.darkSlateGrayColor}
  />
);

export const BINOCULARS = (
  <FontAwesomeItem
    key={"binoculars"}
    name="binoculars"
    color={colors.darkSlateGrayColor}
  />
);

export const BINOCULARS_DEEP = (
  <FontAwesomeItem
    key={"binoculars-deep"}
    name="binoculars"
    color={colors.deepSkyBlueColor}
  />
);

export const PLANE_ARRIVAL = (
  <FontAwesomeItem
    key={"plane-arrival"}
    name="plane-arrival"
    color={colors.deepSkyBlueColor}
  />
);

export const PLANE_DEPARTURE = (
  <FontAwesomeItem
    key={"plane-departure"}
    name="plane-departure"
    color={colors.deepSkyBlueColor}
  />
);

export const CAMPGROUND = (
  <FontAwesomeItem
    key={"campground"}
    name="campground"
    color={colors.indigoColor}
  />
);

export const CAMPGROUND_DEEP = (
  <FontAwesomeItem
    key={"campground-deep"}
    name="campground"
    color={colors.deepSkyBlueColor}
  />
);

export const FIRST_AID = (
  <FontAwesomeItem
    key={"first-aid"}
    name="first-aid"
    color={colors.maroonColor}
  />
);

export const FIRST_AID_DEEP = (
  <FontAwesomeItem
    key={"first-aid-deep"}
    name="first-aid"
    color={colors.deepSkyBlueColor}
  />
);

export const TREE = (
  <FontAwesomeItem key={"tree"} name="tree" color={colors.forestGreenColor} />
);

export const TREE_DEEP = (
  <FontAwesomeItem
    key={"tree-deep"}
    name="tree"
    color={colors.deepSkyBlueColor}
  />
);

export const DOG = (
  <FontAwesomeItem key={"dog"} name="dog" color={colors.orangeColor} />
);

export const DOG_DEEP = (
  <FontAwesomeItem
    key={"dog-deep"}
    name="dog"
    color={colors.deepSkyBlueColor}
  />
);

/*
  STEP 2
*/

export const SMILE = (
  <FontAwesomeItem key={"smile"} name="smile" color={colors.meduimBlueColor} />
);

export const SMILE_BEAM = (
  <FontAwesomeItem
    key={"smile-beam"}
    name="smile-beam"
    color={colors.goldColor}
  />
);

export const SMILE_WINK = (
  <FontAwesomeItem
    key={"smile-wink"}
    name="smile-wink"
    color={colors.maroonColor}
  />
);

export const SAD_CRY = (
  <FontAwesomeItem
    key={"sad-cry"}
    name="sad-cry"
    color={colors.deepSkyBlueColor}
  />
);

export const SAD_TEAR = (
  <FontAwesomeItem
    key={"sad-tear"}
    name="sad-tear"
    color={colors.turquoiseColor}
  />
);

export const ANGRY = (
  <FontAwesomeItem
    key={"angry"}
    name="angry"
    color={colors.darkSlateGrayColor}
  />
);

export const DIZZY = (
  <FontAwesomeItem key={"dizzy"} name="dizzy" color={colors.indigoColor} />
);

export const FROWN = (
  <FontAwesomeItem key={"frown"} name="frown" color={colors.darkSalmonColor} />
);

export const FROWN_OPEN = (
  <FontAwesomeItem
    key={"frown-open"}
    name="frown-open"
    color={colors.oliveColor}
  />
);

export const GRIMACE = (
  <FontAwesomeItem
    key={"grimace"}
    name="grimace"
    color={colors.darkNavyColor}
  />
);

export const GRIN = (
  <FontAwesomeItem key={"grin"} name="grin" color={colors.slateGrayColor} />
);

export const GRIN_BEAM = (
  <FontAwesomeItem
    key={"grin-beam"}
    name="grin-beam"
    color={colors.steelBlueColor}
  />
);

export const GRIN_BEAM_SWEAT = (
  <FontAwesomeItem
    key={"grin-beam-sweat"}
    name="grin-beam-sweat"
    color={colors.orangeColor}
  />
);

export const GRIN_HEARTS = (
  <FontAwesomeItem
    key={"grin-hearts"}
    name="grin-hearts"
    color={colors.hotPinkColor}
  />
);

export const GRIN_SQUINT = (
  <FontAwesomeItem
    key={"grin-squint"}
    name="grin-squint"
    color={colors.lightPinkColor}
  />
);

export const GRIN_STARS = (
  <FontAwesomeItem
    key={"grin-stars"}
    name="grin-stars"
    color={colors.slateBlueColor}
  />
);

export const GRIN_TONGUE = (
  <FontAwesomeItem
    key={"grin-tongue"}
    name="grin-tongue"
    color={colors.yellowGreenColor}
  />
);

export const GRIN_TONGUE_SQUINT = (
  <FontAwesomeItem
    key={"grin-tongue-squint"}
    name="grin-tongue-squint"
    color={colors.purpleColor}
  />
);

export const GRIN_TONGUE_WINK = (
  <FontAwesomeItem
    key={"grin-tongue-wink"}
    name="grin-tongue-wink"
    color={colors.orangeredColor}
  />
);

export const GRIN_WINK = (
  <FontAwesomeItem
    key={"grin-wink"}
    name="grin-wink"
    color={colors.lightPinkColor}
  />
);

export const KISS = (
  <FontAwesomeItem key={"kiss"} name="kiss" color={colors.maroonColor} />
);

export const KISS_WINK_HEART = (
  <FontAwesomeItem
    key={"kiss-wink-heart"}
    name="kiss-wink-heart"
    color={colors.hotPinkColor}
  />
);

export const SURPRISE = (
  <FontAwesomeItem
    key={"surprise"}
    name="surprise"
    color={colors.darkSlateGrayColor}
  />
);

export const MEH_ROLLING_EYES = (
  <FontAwesomeItem
    key={"meh-rolling-eyes"}
    name="meh-rolling-eyes"
    color={colors.darkNavyColor}
  />
);

/*
  STEP 3
*/

export const SMILE_DARK = (
  <FontAwesomeItem
    key={"smile-dark"}
    name="smile"
    color={colors.darkNavyColor}
  />
);

export const SMILE_BEAM_DARK = (
  <FontAwesomeItem
    key={"smile-beam-dark"}
    name="smile-beam"
    color={colors.darkNavyColor}
  />
);

export const SMILE_WINK_DARK = (
  <FontAwesomeItem
    key={"smile-wink-dark"}
    name="smile-wink"
    color={colors.darkNavyColor}
  />
);

export const SAD_CRY_DARK = (
  <FontAwesomeItem
    key={"sad-cry-dark"}
    name="sad-cry"
    color={colors.darkNavyColor}
  />
);

export const SAD_TEAR_DARK = (
  <FontAwesomeItem
    key={"sad-tear-dark"}
    name="sad-tear"
    color={colors.darkNavyColor}
  />
);

export const ANGRY_DARK = (
  <FontAwesomeItem
    key={"angry-dark"}
    name="angry"
    color={colors.darkNavyColor}
  />
);

export const DIZZY_DARK = (
  <FontAwesomeItem
    key={"dizzy-dark"}
    name="dizzy"
    color={colors.darkNavyColor}
  />
);

export const FROWN_DARK = (
  <FontAwesomeItem
    key={"frown-dark"}
    name="frown"
    color={colors.darkNavyColor}
  />
);

export const FROWN_OPEN_DARK = (
  <FontAwesomeItem
    key={"frown-open-dark"}
    name="frown-open"
    color={colors.darkNavyColor}
  />
);

export const GRIMACE_DARK = (
  <FontAwesomeItem
    key={"grimace-dark"}
    name="grimace"
    color={colors.darkNavyColor}
  />
);

export const GRIN_DARK = (
  <FontAwesomeItem key={"grin-dark"} name="grin" color={colors.darkNavyColor} />
);

export const GRIN_BEAM_DARK = (
  <FontAwesomeItem
    key={"grin-beam-dark"}
    name="grin-beam"
    color={colors.darkNavyColor}
  />
);

export const GRIN_BEAM_SWEAT_DARK = (
  <FontAwesomeItem
    key={"grin-beam-sweat-dark"}
    name="grin-beam-sweat"
    color={colors.darkNavyColor}
  />
);

export const GRIN_HEARTS_DARK = (
  <FontAwesomeItem
    key={"grin-hearts-dark"}
    name="grin-hearts"
    color={colors.darkNavyColor}
  />
);

export const GRIN_SQUINT_DARK = (
  <FontAwesomeItem
    key={"grin-squint-dark"}
    name="grin-squint"
    color={colors.darkNavyColor}
  />
);

export const GRIN_STARS_DARK = (
  <FontAwesomeItem
    key={"grin-stars-dark"}
    name="grin-stars"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-dark"}
    name="grin-tongue"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_SQUINT_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-squint-dark"}
    name="grin-tongue-squint"
    color={colors.darkNavyColor}
  />
);

export const GRIN_TONGUE_WINK_DARK = (
  <FontAwesomeItem
    key={"grin-tongue-wink-dark"}
    name="grin-tongue-wink"
    color={colors.darkNavyColor}
  />
);

export const GRIN_WINK_DARK = (
  <FontAwesomeItem
    key={"grin-wink-dark"}
    name="grin-wink"
    color={colors.darkNavyColor}
  />
);

export const KISS_DARK = (
  <FontAwesomeItem key={"kiss-dark"} name="kiss" color={colors.darkNavyColor} />
);

export const KISS_WINK_HEART_DARK = (
  <FontAwesomeItem
    key={"kiss-wink-heart-dark"}
    name="kiss-wink-heart"
    color={colors.darkNavyColor}
  />
);

export const SURPRISE_DARK = (
  <FontAwesomeItem
    key={"surprise-dark"}
    name="surprise"
    color={colors.darkNavyColor}
  />
);

export const MEH_ROLLING_EYES_DARK = (
  <FontAwesomeItem
    key={"meh-rolling-eyes-dark"}
    name="meh-rolling-eyes"
    color={colors.darkNavyColor}
  />
);
