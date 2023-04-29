export {};

let name: any = 'Ham';
let length = (name as string).length;
// let length = (<string>name).length;
console.log(length);

// length = 'foo' as string;
console.log(length);
