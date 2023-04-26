export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('太郎');
console.log(myVisaCard.owner); // 太郎
// myVisaCard.owner = '二郎'; // エラー
