/* stage에 따른, 정답 갯수 */
export const checkAnswer = (stage) => {
  if (
    stage === 1 ||
    stage === 6 ||
    stage === 37 ||
    stage === 158 ||
    stage === 335
  ) {
    return 1;
  } else if (
    (stage > 1 && stage <= 5) ||
    (stage > 6 && stage <= 9) ||
    (stage > 22 && stage <= 26) ||
    (stage > 37 && stage <= 39) ||
    stage === 159 ||
    (stage > 335 && stage <= 340)
  ) {
    return 2;
  } else if (
    (stage > 9 && stage <= 14) ||
    (stage > 26 && stage <= 30) ||
    (stage > 39 && stage <= 43) ||
    (stage > 159 && stage <= 163) ||
    (stage > 340 && stage <= 350)
  ) {
    return 3;
  } else if (
    (stage > 14 && stage <= 22) ||
    (stage > 30 && stage <= 36) ||
    (stage > 43 && stage <= 60) ||
    (stage > 163 && stage <= 167) ||
    (stage > 350 && stage <= 366)
  ) {
    return 4;
  } else if (
    (stage > 60 && stage <= 81) ||
    (stage > 167 && stage <= 172) ||
    (stage > 366 && stage <= 386)
  ) {
    return 5;
  } else if (
    (stage > 81 && stage <= 99) ||
    (stage > 172 && stage <= 186) ||
    (stage > 386 && stage <= 4000)
  ) {
    return 6;
  } else if ((stage > 99 && stage <= 118) || (stage > 186 && stage <= 210)) {
    return 7;
  } else if ((stage > 118 && stage <= 157) || (stage > 210 && stage <= 238)) {
    return 8;
  } else if (stage > 238 && stage <= 263) {
    return 9;
  } else if (stage > 263 && stage <= 290) {
    return 10;
  } else if (stage > 290 && stage <= 311) {
    return 11;
  } else if (stage > 311 && stage <= 334) {
    return 12;
  } else if (stage > 300000 && stage <= 400000) {
    return 13;
  } else if (stage > 300000 && stage <= 400000) {
    return 14;
  } else if (stage > 300000 && stage <= 400000) {
    return 15;
  } else if (stage > 300000 && stage <= 400000) {
    return 16;
  } else if (stage > 300000 && stage <= 400000) {
    return 17;
  } else if (stage > 300000 && stage <= 400000) {
    return 18;
  }
};

/* stage에 따른, 처음에 정답 보여 주는 시간 */
export const checkTime = (stage) => {
  if (stage === 1) return 2000;
  else if (
    (stage > 1 && stage <= 14) ||
    (stage > 22 && stage <= 27) ||
    (stage > 36 && stage <= 39)
  )
    return 1500;
  else if (
    (stage > 14 && stage <= 22) ||
    (stage > 27 && stage <= 29) ||
    (stage > 39 && stage <= 43)
  )
    return 2000;
  else if (stage > 29 && stage <= 36) return 2500;
  else if (stage > 43 && stage <= 60) return 3000;
  else if (stage > 60 && stage <= 65) return 4000;
  else if (stage > 65 && stage <= 81) return 4500;
  else if (stage > 81 && stage <= 87) return 5000;
  else if (stage > 87 && stage <= 99) return 5500;
  /* 설정해야 함!! */ else if (stage > 99 && stage <= 200000) return 3000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
  else if (stage > 100000 && stage <= 200000) return 5000;
};

/* stage에 따른, 제한 시간 */
export const checkLimitTime = (stage) => {
  if (stage <= 10) return 10;
  else if (stage > 10 && stage <= 20) return 20;
  else if (stage > 20) return 50;
};
