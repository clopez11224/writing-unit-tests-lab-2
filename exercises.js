function octalToDecimal(num) {
  let count = num.length - 1;
  let decimal = 0;
  for (let i = 0; i < num.length; i++) {
    decimal += num[i] * (8 ** count);
    count -= 1;
  }
  return decimal;
}

function anagram(word, arr) {
  return arr.filter(x => x.split("").sort().join("") === word.split("").sort().join(""));
}

function triangle(a1, a2, a3) {
  return (a1 + a2 + a3 !== 180 || (a1 === 0 || a2 === 0 || a3 === 0)) ? "invalid"
    : (a1 === 90 || a2 === 90 || a3 === 90) ? "right"
      : (a1 > 90 || a2 > 90 || a3 > 90) ? "obtuse"
        : "acute";
}

function fridayThe13ths(year) {
  let counter = 0;
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};
