export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = '隆行';
  static lastName: string = '渡辺';

  static work() {
    // return `Hey, guys! This is ${Me.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
