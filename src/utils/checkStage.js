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
  TREE,
  TREE_DEEP,
  DOG,
  DOG_DEEP,
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
const stage61 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage62 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage63 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage64 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage65 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE_DEEP,
  TREE_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage66 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage67 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage68 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage69 = [
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE_DEEP,
  TREE_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage70 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage71 = [
  PLANE,
  PLANE,
  PLANE_ARRIVAL,
  PLANE_ARRIVAL,
  PLANE_DEPARTURE,
  PLANE_DEPARTURE,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE_DEEP,
  TREE_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage72 = [
  SMILE,
  SMILE,
  ANGRY,
  ANGRY,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage73 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage74 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage75 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  GRIMACE,
  GRIMACE,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage76 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  GRIMACE_DARK,
  GRIMACE_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage77 = [
  SMILE_BEAM,
  SMILE_BEAM,
  SMILE_WINK,
  SMILE_WINK,
  GRIN_BEAM,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage78 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage79 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage80 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  FROWN,
  FROWN,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage81 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  FROWN_DARK,
  FROWN_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 6 */
const stage82 = [
  PLANE,
  PLANE,
  BINOCULARS,
  BINOCULARS,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  DOG,
  DOG,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage83 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND,
  CAMPGROUND,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  DOG,
  DOG,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage84 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID,
  FIRST_AID,
  TREE,
  TREE,
  DOG,
  DOG,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage85 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE,
  TREE,
  DOG,
  DOG,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage86 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE_DEEP,
  TREE_DEEP,
  DOG,
  DOG,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage87 = [
  PLANE,
  PLANE,
  BINOCULARS_DEEP,
  BINOCULARS_DEEP,
  CAMPGROUND_DEEP,
  CAMPGROUND_DEEP,
  FIRST_AID_DEEP,
  FIRST_AID_DEEP,
  TREE_DEEP,
  TREE_DEEP,
  DOG_DEEP,
  DOG_DEEP,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage88 = [
  SMILE,
  SMILE,
  ANGRY,
  ANGRY,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage89 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY,
  DIZZY,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage90 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS,
  KISS,
  GRIMACE,
  GRIMACE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage91 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  GRIMACE,
  GRIMACE,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage92 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  GRIMACE_DARK,
  GRIMACE_DARK,
  GRIN_HEARTS,
  GRIN_HEARTS,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage93 = [
  SMILE_DARK,
  SMILE_DARK,
  ANGRY_DARK,
  ANGRY_DARK,
  DIZZY_DARK,
  DIZZY_DARK,
  KISS_DARK,
  KISS_DARK,
  GRIMACE_DARK,
  GRIMACE_DARK,
  GRIN_HEARTS_DARK,
  GRIN_HEARTS_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage94 = [
  SMILE_BEAM,
  SMILE_BEAM,
  SMILE_WINK,
  SMILE_WINK,
  GRIN_BEAM,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage95 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM,
  GRIN_BEAM,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage96 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT,
  GRIN_BEAM_SWEAT,
  FROWN,
  FROWN,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage97 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  FROWN,
  FROWN,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage98 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  FROWN_DARK,
  FROWN_DARK,
  GRIN_TONGUE_SQUINT,
  GRIN_TONGUE_SQUINT,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

const stage99 = [
  SMILE_BEAM_DARK,
  SMILE_BEAM_DARK,
  SMILE_WINK_DARK,
  SMILE_WINK_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_DARK,
  GRIN_BEAM_SWEAT_DARK,
  GRIN_BEAM_SWEAT_DARK,
  FROWN_DARK,
  FROWN_DARK,
  GRIN_TONGUE_SQUINT_DARK,
  GRIN_TONGUE_SQUINT_DARK,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
  BOMB_4X4,
];

/* The number of Answer: 7 */
const stage100 = [];

const stage101 = [];

const stage102 = [];

const stage103 = [];

const stage104 = [];

const stage105 = [];

const stage106 = [];

const stage107 = [];

const stage108 = [];

const stage109 = [];

const stage110 = [];

const stage111 = [];

const stage112 = [];

const stage113 = [];

const stage114 = [];

const stage115 = [];

const stage116 = [];

const stage117 = [];

const stage118 = [];

const stage119 = [];

const stage120 = [];

const stage121 = [];

const stage122 = [];

const stage123 = [];

const stage124 = [];

const stage125 = [];

const stage126 = [];

const stage127 = [];

const stage128 = [];

const stage129 = [];

const stage130 = [];

const stage131 = [];

const stage132 = [];

const stage133 = [];

const stage134 = [];

const stage135 = [];

const stage136 = [];

const stage137 = [];

const stage138 = [];

const stage139 = [];

const stage140 = [];

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
  else if (stage === 81) return stage81;
  else if (stage === 82) return stage82;
  else if (stage === 83) return stage83;
  else if (stage === 84) return stage84;
  else if (stage === 85) return stage85;
  else if (stage === 86) return stage86;
  else if (stage === 87) return stage87;
  else if (stage === 88) return stage88;
  else if (stage === 89) return stage89;
  else if (stage === 90) return stage90;
  else if (stage === 91) return stage91;
  else if (stage === 92) return stage92;
  else if (stage === 93) return stage93;
  else if (stage === 94) return stage94;
  else if (stage === 95) return stage95;
  else if (stage === 96) return stage96;
  else if (stage === 97) return stage97;
  else if (stage === 98) return stage98;
  else if (stage === 99) return stage99;
  else if (stage === 100) return stage100;
  else if (stage === 101) return stage101;
  else if (stage === 102) return stage102;
  else if (stage === 103) return stage103;
  else if (stage === 104) return stage104;
  else if (stage === 105) return stage105;
  else if (stage === 106) return stage106;
  else if (stage === 107) return stage107;
  else if (stage === 108) return stage108;
  else if (stage === 109) return stage109;
  else if (stage === 110) return stage110;
  else if (stage === 111) return stage111;
  else if (stage === 112) return stage112;
  else if (stage === 113) return stage113;
  else if (stage === 114) return stage114;
  else if (stage === 115) return stage115;
  else if (stage === 116) return stage116;
  else if (stage === 117) return stage117;
  else if (stage === 118) return stage118;
  else if (stage === 119) return stage119;
  else if (stage === 120) return stage120;
  else if (stage === 121) return stage121;
  else if (stage === 122) return stage122;
  else if (stage === 123) return stage123;
  else if (stage === 124) return stage124;
  else if (stage === 125) return stage125;
  else if (stage === 126) return stage126;
  else if (stage === 127) return stage127;
  else if (stage === 128) return stage128;
  else if (stage === 129) return stage129;
  else if (stage === 130) return stage130;
  else if (stage === 131) return stage131;
  else if (stage === 132) return stage132;
  else if (stage === 133) return stage133;
  else if (stage === 134) return stage134;
  else if (stage === 135) return stage135;
  else if (stage === 136) return stage136;
  else if (stage === 137) return stage137;
  else if (stage === 138) return stage138;
  else if (stage === 139) return stage139;
  else if (stage === 140) return stage140;
};
