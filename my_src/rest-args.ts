export {};

const array = [1, 2, 3, 4];
const reducer = (accumulator: number, currentValue: number) => {
  console.log(`   accumulator= ${accumulator}, currentValue= ${currentValue}`);
  return accumulator + currentValue;
};

const sum: (...values: number[]) => number = (...values: number[]) => {
  return values.reduce(reducer);
  //console.log(`values= ${values}`);
};

console.log(`sum=${sum(1, 2, 3, 4, 5)}`);
// console.log(array.reduce(reducer));
