export {};

type Profile = {
  name: string;
  age: number;
  zipCode: number;
};

type Profile2 = {
  name: string;
  age?: number;
  zipCode: number;
};

// profileの型をPartialで全てのプロパティをオプショナルにする
type PartialType = Partial<Profile>;

// profileの型をRequiredで全てのプロパティを必須にする
type RequiredType = Required<Profile2>;
