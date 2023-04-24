export {};

// let dayOfTheWeek: string = '日';
let dayOfTheWeek: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';

dayOfTheWeek = '月';
// dayOfTheWeek = '31'; // 曜日ではない

let Month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
Month = 12;
// Month = 13; // 13月ではない

let TRUE: true = true;
// let TRUE: boolean = true;
// TRUE = false; // trueではない
