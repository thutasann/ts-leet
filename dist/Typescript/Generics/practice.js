"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocks_1 = require("./mocks");
function removeFirstEntryFromArry(arr) {
    return arr.splice(1);
}
// ----------
function printName(input) {
    return input;
}
printName({ name: 'thuta' });
async function fetchMock(mockData) {
    return new Promise((res) => res({
        status: 'success',
        data: mockData,
    }));
}
async function fetchProducts() {
    return fetchMock(mocks_1.mockProducts);
}
async function fetchUsers() {
    return fetchMock(mocks_1.mockUsers);
}
