/* stage에 따른, 정답 갯수 */
export const checkAnswer = (stage) => {
  if (stage === 1 || stage === 6 || stage === 37) {
    return 1;
  } else if (
    (stage > 1 && stage <= 5) ||
    (stage > 6 && stage <= 9) ||
    (stage > 22 && stage <= 26) ||
    (stage > 37 && stage <= 39)
  ) {
    return 2;
  } else if (
    (stage > 9 && stage <= 14) ||
    (stage > 26 && stage <= 30) ||
    (stage > 39 && stage <= 43)
  ) {
    return 3;
  } else if (
    (stage > 14 && stage <= 22) ||
    (stage > 30 && stage <= 36) ||
    (stage > 43 && stage <= 60)
  ) {
    return 4;
  } else if (stage > 60 && stage <= 300) {
    return 5;
  } else if (stage > 300 && stage <= 400) {
    return 6;
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
  else if (stage > 60 && stage <= 1000) return 4000;
  else if (stage > 1000 && stage <= 2000) return 5000;
};
