export {};

class Person {
  name: string;
  age: number;

  constructor(name: string = 'Taro', age: number = 20) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Takayuki', 64);
let hanako = new Person('Hanako', 32);
let foo = new Person();
console.log(taro);
console.log(hanako);
console.log(foo);
console.log(taro.profile());
console.log(hanako.profile());
console.log(foo.profile());
