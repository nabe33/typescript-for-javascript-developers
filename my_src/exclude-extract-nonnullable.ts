export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude<T, U>
// T: union type
// U: union type 不要な物
type FunctionType = Exclude<SomeTypes, string | number>;

type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type nonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtrctingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
