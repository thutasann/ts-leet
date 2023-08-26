"use strict";
// Source - https://www.youtube.com/watch?v=dLPgQRbVquo
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddIDObjResult = void 0;
// ---- Generic in Function
const makeFetch = async (url) => {
    return await fetch(url).then((res) => res.json());
};
const response = makeFetch('https://example.com').then((res) => {
    return res;
});
response.then((res) => res.name);
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
exports.AddIDObjResult = addIdObject({
    firstName: 'Thuta',
    lastName: 'sann ',
});
