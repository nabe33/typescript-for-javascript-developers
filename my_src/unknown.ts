export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let subAny = numberAny + 10;
console.log(typeof numberUnknown);
//let subUnknown = numberUnknown + 10; // error
if (typeof numberUnknown === 'number') {
  // type guard
  let subUnknown = numberUnknown + 10; // unknown型はtypeofで型を確認してからでないと使えない
  console.log(subUnknown);
}
