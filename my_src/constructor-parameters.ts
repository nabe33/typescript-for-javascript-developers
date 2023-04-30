export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('Taro', 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Gloria', 76];
const ham = new Person(...profile);
console.log(ham);
console.log(profile);

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
