export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43,
};

me.age++;
console.log(me); // { name: 'Ham', age: 44 }

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40,
};

// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P] };
