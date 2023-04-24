export {};

class Person {
  public name: string;
  private age: number;
  protected nationality: string;

  constructor(
    name: string = 'Taro',
    age: number = 20,
    nationality: string = 'Japan'
  ) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let me = new Person('Takayuki', 64, 'Japan');
console.log(me.name);
// console.log(me.age);
console.log(me.profile());

let you = new Android('Terminator', 20, 'US');
console.log(you.name);
console.log(you.profile());
