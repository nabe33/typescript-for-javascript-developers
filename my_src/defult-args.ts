export {};

const nextYearSaraly = (currentSaraly: number, rate: number = 1.1) => {
  return currentSaraly * rate;
};

console.log(nextYearSaraly(1000));
console.log(nextYearSaraly(1000, 1.08));
