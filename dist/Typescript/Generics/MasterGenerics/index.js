"use strict";
// Source - https://www.youtube.com/watch?v=dLPgQRbVquo
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueResult = exports.getKeyWithHighestValueResult = exports.result = void 0;
// ---- Generic in Function
const makeFetch = async (url) => {
    return await fetch(url).then((res) => res.json());
};
makeFetch('https://jsonplaceholder.typicode.com/posts').then((res) => { });
// ---- Passing Type arguments to Set
const set = new Set();
set.add('thuta');
// ---- Infeering the type
const addIdObject = (obj) => {
    return {
        ...obj,
        id: '123',
    };
};
exports.result = addIdObject({
    firstName: 'Thuta',
    lastName: 'sann ',
});
// ---- Constraints in Functions ⭐️ ⭐️ ⭐️
const getKeyWithHighestValue = (obj) => {
    const keys = Object.keys(obj);
    let highesteKey = keys[0];
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
exports.getKeyWithHighestValueResult = getKeyWithHighestValue({
    a: 1,
    b: 2,
    c: 2,
});
// ---- Generic Function with Type assertion
const typedObjectKey = (obj) => {
    return Object.keys(obj);
};
const typedObjectKeyResult = typedObjectKey({
    name: 'Thuta',
    age: 21,
});
// ---- Multiple Types Arguments
const getValue = (obj, key) => {
    if (key === 'bad') {
        throw Error('Do not access the bad key');
    }
    return obj[key];
};
exports.getValueResult = getValue({ a: 1, b: 'something', c: true }, 'b');
// ---- Default in Type Argument
const createSet = () => {
    return new Set();
};
const numberSet = createSet();
const stringSet = createSet();
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
