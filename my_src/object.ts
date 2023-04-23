export {};

let profile1: object = { name: 'John' };
profile1 = { birthYear: 2000 };
console.log({ profile1 });

let profile2: { name: string } = { name: 'John' };
//profile2 = { birthYear: 1000 };
//profile2 = { birthYear: 'test' };
profile2 = { name: 'Takayuki' };
console.log({ profile2 });
