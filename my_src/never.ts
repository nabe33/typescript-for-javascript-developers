export {};

function error(message: string): never {
  throw new Error(message);
}

/*
try {
  let result = error('Something happened!');
  console.log({ result });
} catch (e) {
  console.log(`catched error is ${e}`);
}
*/

let foo: void = undefined;
//let bar: never = undefined;
let bar: never = error('only me!');
console.log(`bar is `);
