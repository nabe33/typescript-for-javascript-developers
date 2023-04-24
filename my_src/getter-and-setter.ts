export {};

/*
 * owner
 *   所有者
 *   初期化時に設定できる
 *   途中で変更できない
 *   参照できる
 * secretNumber
 *   個人番号
 *   初期化時に設定できる
 *   途中で変更できる
 *   参照できない
 *
 * getterとsetter
 * getterはプロパティの値を取得する際に呼び出されるメソッド
 * setterはプロパティの値を設定する際に呼び出されるメソッド
 * getterとsetterは同じ名前を使う
 *   getterはgetをつける
 *   setterはsetをつける
 *   getterとsetterは同じ名前を使う
 */

class MyNunberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNunberCard('はむさん', 1234567890);
// card.owner = 'Ham';
console.log(card.owner);

// card._secretNumber;
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
