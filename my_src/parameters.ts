export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Ham', 43);

type Profile = Parameters<typeof debugProfile>; // 関数の引数の型を抽出できる

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
