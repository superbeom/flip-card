import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { vw } from "react-native-expo-viewport-units";

import FontAwesomeItem from "../components/FontAwesomeItem";
import colors from "../constants/colors";

import {
  BOMB_2X2,
  BOMB_3X3,
  BOMB_4X4,
  BOMB_5X5,
  BOMB_6X6,
  /* STEP 1 */
  PLANE,
  PLANE_DARK,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  BINOCULARS,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID_DEEP,
  /* STEP 2 */
  SMILE,
  SMILE_BEAM,
  SMILE_WINK,
  SAD_CRY,
  SAD_TEAR,
  ANGRY,
  DIZZY,
  FROWN,
  FROWN_OPEN,
  GRIMACE,
  GRIN,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_HEARTS,
  GRIN_SQUINT,
  GRIN_STARS,
  GRIN_TONGUE,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_WINK,
  GRIN_WINK,
  KISS,
  KISS_WINK_HEART,
  SURPRISE,
  MEH_ROLLING_EYES,
  /* STEP 3 */
  SMILE_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SAD_CRY_DARK,
  SAD_TEAR_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  FROWN_DARK,
  FROWN_OPEN_DARK,
  GRIMACE_DARK,
  GRIN_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_HEARTS_DARK,
  GRIN_SQUINT_DARK,
  GRIN_STARS_DARK,
  GRIN_TONGUE_DARK,
  GRIN_TONGUE_SQUINT_DARK,
  GRIN_TONGUE_WINK_DARK,
  GRIN_WINK_DARK,
  KISS_DARK,
  KISS_WINK_HEART_DARK,
  SURPRISE_DARK,
  MEH_ROLLING_EYES_DARK,
} from "./FontAwesomeSource";

/*
  2x2
*/

/* The number of Answer: 1 */
const stage1 = [PLANE, PLANE, BOMB_2X2, BOMB_2X2];

/* The number of Answer: 2 */
const stage2 = [PLANE, PLANE, BINOCULARS, BINOCULARS];

const stage3 = [PLANE, PLANE, PLANE_DARK, PLANE_DARK];

const stage4 = [PLANE, PLANE, BINOCULARS_DEEP, BINOCULARS_DEEP];

const stage5 = [PLANE_ARRIVAL, PLANE_ARRIVAL, PLANE_DEPARTURE, PLANE_DEPARTURE];

/*
  3x3
*/

/* The number of Answer: 1 */
const stage6 = [
  PLANE,
  PLANE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 2 */
const stage7 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage8 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage9 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 3 */
const stage10 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage11 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage12 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage13 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage14 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 4 */
const stage15 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage16 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage17 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage18 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  BOMB_3X3,
];

const stage19 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage20 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_3X3,
];

const stage21 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  BOMB_3X3,
];

const stage22 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_3X3,
];

/* The number of Answer: 2 */
const stage23 = [
  SMILE,
  SMILE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage24 = [
  SMILE_DARK,
  SMILE_DARK,
  GRIN_HEARTS_DARK,
  GRIN_HEARTS_DARK,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage25 = [
  FROWN,
  FROWN,
  FROWN_OPEN,
  FROWN_OPEN,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage26 = [
  FROWN_DARK,
  FROWN_DARK,
  FROWN_OPEN_DARK,
  FROWN_OPEN_DARK,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 3 */
const stage27 = [
  SMILE,
  SMILE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  ANGRY,
  ANGRY,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage28 = [
  SMILE_DARK,
  SMILE_DARK,
  GRIN_HEARTS_DARK,
  GRIN_HEARTS_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage29 = [
  SMILE,
  SMILE,
  SMILE_BEAM,
  SMILE_BEAM,
  GRIN,
  GRIN,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

const stage30 = [
  SMILE_DARK,
  SMILE_DARK,
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  GRIN_DARK,
  GRIN_DARK,
  BOMB_3X3,
  BOMB_3X3,
  BOMB_3X3,
];

/* The number of Answer: 4 */
const stage31 = [
  SMILE,
  SMILE,
  SAD_TEAR,
  SAD_TEAR,
  DIZZY,
  DIZZY,
  GRIMACE,
  GRIMACE,
  BOMB_3X3,
];

const stage32 = [
  KISS,
  KISS,
  KISS_WINK_HEART,
  KISS_WINK_HEART,
  DIZZY,
  DIZZY,
  GRIN_STARS,
  GRIN_STARS,
  BOMB_3X3,
];

const stage33 = [
  SMILE,
  SMILE,
  SMILE_DARK,
  SMILE_DARK,
  DIZZY,
  DIZZY,
  DIZZY_DARK,
  DIZZY_DARK,
  BOMB_3X3,
];

const stage34 = [
  KISS,
  KISS,
  KISS_DARK,
  KISS_DARK,
  KISS_WINK_HEART,
  KISS_WINK_HEART,
  KISS_WINK_HEART_DARK,
  KISS_WINK_HEART_DARK,
  BOMB_3X3,
];

const stage35 = [
  SMILE_DARK,
  SMILE_DARK,
  SAD_TEAR_DARK,
  SAD_TEAR_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  GRIMACE_DARK,
  GRIMACE_DARK,
  BOMB_3X3,
];

const stage36 = [
  KISS_DARK,
  KISS_DARK,
  KISS_WINK_HEART_DARK,
  KISS_WINK_HEART_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  GRIN_STARS_DARK,
  GRIN_STARS_DARK,
  BOMB_3X3,
];

/*
  4x4
*/

/* The number of Answer: 1 */
const stage37 = [
  PLANE,
  PLANE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 2 */
const stage38 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage39 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 3 */
const stage40 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage41 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage42 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage43 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 4 */
const stage44 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage45 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage46 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage47 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage48 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage49 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage50 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage51 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND,
  CAMPGROUND,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage52 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage53 = [
  SMILE,
  SMILE,
  ANGRY,
  ANGRY,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage54 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage55 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS,
  KISS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage56 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage57 = [
  SMILE_BEAM,
  SMILE_BEAM,
  GRIN_BEAM,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  SMILE_WINK,
  SMILE_WINK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage58 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  SMILE_WINK,
  SMILE_WINK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage59 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  SMILE_WINK,
  SMILE_WINK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage60 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 5 */
const stage61 = [];

const stage62 = [];

const stage63 = [];

const stage64 = [];

const stage65 = [];

const stage66 = [];

const stage67 = [];

const stage68 = [];

const stage69 = [];

const stage70 = [];

const stage71 = [];

const stage72 = [];

const stage73 = [];

const stage74 = [];

const stage75 = [];

const stage76 = [];

const stage77 = [];

const stage78 = [];

const stage79 = [];

const stage80 = [];

const stage100 = [];

/* 5x5 */
const stage3000 = [];

/* 6x6 */
const stage4000 = [];

export default (stage) => {
  if (stage === 1) return stage1;
  else if (stage === 2) return stage2;
  else if (stage === 3) return stage3;
  else if (stage === 4) return stage4;
  else if (stage === 5) return stage5;
  else if (stage === 6) return stage6;
  else if (stage === 7) return stage7;
  else if (stage === 8) return stage8;
  else if (stage === 9) return stage9;
  else if (stage === 10) return stage10;
  else if (stage === 11) return stage11;
  else if (stage === 12) return stage12;
  else if (stage === 13) return stage13;
  else if (stage === 14) return stage14;
  else if (stage === 15) return stage15;
  else if (stage === 16) return stage16;
  else if (stage === 17) return stage17;
  else if (stage === 18) return stage18;
  else if (stage === 19) return stage19;
  else if (stage === 20) return stage20;
  else if (stage === 21) return stage21;
  else if (stage === 22) return stage22;
  else if (stage === 23) return stage23;
  else if (stage === 24) return stage24;
  else if (stage === 25) return stage25;
  else if (stage === 26) return stage26;
  else if (stage === 27) return stage27;
  else if (stage === 28) return stage28;
  else if (stage === 29) return stage29;
  else if (stage === 30) return stage30;
  else if (stage === 31) return stage31;
  else if (stage === 32) return stage32;
  else if (stage === 33) return stage33;
  else if (stage === 34) return stage34;
  else if (stage === 35) return stage35;
  else if (stage === 36) return stage36;
  else if (stage === 37) return stage37;
  else if (stage === 38) return stage38;
  else if (stage === 39) return stage39;
  else if (stage === 40) return stage40;
  else if (stage === 41) return stage41;
  else if (stage === 42) return stage42;
  else if (stage === 43) return stage43;
  else if (stage === 44) return stage44;
  else if (stage === 45) return stage45;
  else if (stage === 46) return stage46;
  else if (stage === 47) return stage47;
  else if (stage === 48) return stage48;
  else if (stage === 49) return stage49;
  else if (stage === 50) return stage50;
  else if (stage === 51) return stage51;
  else if (stage === 52) return stage52;
  else if (stage === 53) return stage53;
  else if (stage === 54) return stage54;
  else if (stage === 55) return stage55;
  else if (stage === 56) return stage56;
  else if (stage === 57) return stage57;
  else if (stage === 58) return stage58;
  else if (stage === 59) return stage59;
  else if (stage === 60) return stage60;
  else if (stage === 61) return stage61;
  else if (stage === 62) return stage62;
  else if (stage === 63) return stage63;
  else if (stage === 64) return stage64;
  else if (stage === 65) return stage65;
  else if (stage === 66) return stage66;
  else if (stage === 67) return stage67;
  else if (stage === 68) return stage68;
  else if (stage === 69) return stage69;
  else if (stage === 70) return stage70;
  else if (stage === 71) return stage71;
  else if (stage === 72) return stage72;
  else if (stage === 73) return stage73;
  else if (stage === 74) return stage74;
  else if (stage === 75) return stage75;
  else if (stage === 76) return stage76;
  else if (stage === 77) return stage77;
  else if (stage === 78) return stage78;
  else if (stage === 79) return stage79;
  else if (stage === 80) return stage80;
};
