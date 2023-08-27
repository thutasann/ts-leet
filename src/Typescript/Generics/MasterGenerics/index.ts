// Source - https://www.youtube.com/watch?v=dLPgQRbVquo

// ---- Generic in Type level
type MyGenrics<T extends { name: string }> = {
  data: T;
};
type IGenericInType = MyGenrics<{ name: string }>;

// ---- Generic in Function
const makeFetch = async <TData>(url: string): Promise<TData> => {
  return await fetch(url).then((res) => res.json());
};

makeFetch<{ name: string; email: string }>(
  'https://jsonplaceholder.typicode.com/posts',
).then((res) => {});

// ---- Passing Type arguments to Set
const set = new Set<string>();
set.add('thuta');

// ---- Infeering the type
const addIdObject = <T>(obj: T): T & { id: string } => {
  return {
    ...obj,
    id: '123',
  };
};

export const result = addIdObject({
  firstName: 'Thuta',
  lastName: 'sann ',
});

// ---- Constraints on type Argument
type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;

type Result = GetPromiseReturnType<
  () => Promise<{
    firstName: string;
    lastName: string;
  }>
>;

// ---- Constraints in Functions ⭐️ ⭐️ ⭐️

const getKeyWithHighestValue = <TObj extends Record<string, number>>(
  obj: TObj,
): {
  key: keyof TObj;
  value: number;
} => {
  const keys = Object.keys(obj) as Array<keyof TObj>;

  let highesteKey: keyof TObj = keys[0];
  let highestValue = obj[highesteKey];

  for (const key of keys) {
    if (obj[key] > highestValue) {
      highesteKey = key;
      highestValue: obj[key];
    }
  }

  return {
    key: highesteKey,
    value: highestValue,
  };
};

export const getKeyWithHighestValueResult = getKeyWithHighestValue({
  a: 1,
  b: 2,
  c: 2,
});

// ---- Generic Function with Type assertion

const typedObjectKey = <TObj extends {}>(obj: TObj) => {
  return Object.keys(obj) as Array<keyof TObj>;
};
const typedObjectKeyResult = typedObjectKey({
  name: 'Thuta',
  age: 21,
});

// ---- Multiple Types Arguments

const getValue = <TObj, TKey extends keyof TObj>(obj: TObj, key: TKey) => {
  if (key === 'bad') {
    throw Error('Do not access the bad key');
  }
  return obj[key];
};
export const getValueResult = getValue({ a: 1, b: 'something', c: true }, 'b');

// ---- Default in Type Argument

const createSet = <T = string>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const anotherStringSet = createSet();

// ---- Integrating with third-party libs

// const makeZodSafeFetch = <TData>(
//   url: string,
//   schema: z.Schema<TData>,
// ): Promise<TData> => {
//   return fetch(url).then((res) => {
//     return schema.parse(res);
//   });
// };

// const makeZodSafeFetchResult = makeZodSafeFetch<{
//   firstName: string;
//   lastName: string;
// }>(
//   'https://jsonplaceholder.typicode.com/posts',
//   z.object({
//     firstName: z.string(),
//     lastName: z.string(),
//   }),
// ).then((res) => {
//   console.log(res);
// });
