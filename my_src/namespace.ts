export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('隆行');
console.log(me.name);

const meOSaka = new Japanese.Osaka.Person('たかちゃん');
console.log(meOSaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
