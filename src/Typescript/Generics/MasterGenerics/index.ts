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

const response = makeFetch<{ name: string; email: string }>(
  'https://example.com',
).then((res) => {
  return res;
});
response.then((res) => res.name);

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

type RrrorLIne = GetPromiseReturnType<() => Promise<{ name: number }>>;
