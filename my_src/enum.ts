export {};

enum Months { // 列挙型
  January = 1, // 列挙子
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 0 -> 1
console.log(Months.February); // 1 -> 2

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFF00',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS { // 色を追加
  YELLOW = '#FFFF00',
  // GRAY
}

COLORS.YELLOW; // error消える
