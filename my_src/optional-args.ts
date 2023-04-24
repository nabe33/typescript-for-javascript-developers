export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / (height * height);
};

// console.log(bmi(1.74, 70));

// bmi(身長, 体重, console.logに出力？)
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean // ?をつけることで、引数を省略可能にする
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi2(174, 70, true);
bmi2(174, 70, false);
bmi2(174, 70);
