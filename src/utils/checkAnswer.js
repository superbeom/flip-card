export default (stage) => {
  if (stage <= 10) return 2;
  else if (stage > 10 && stage <= 20) return 3;
  else if (stage > 20 && stage <= 30) return 4;
  else if (stage > 30 && stage <= 40) return 5;
  else if (stage > 40 && stage <= 50) return 6;
};
