"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeFullName = exports.makeArr = exports.last = void 0;
const last = (arr) => {
    return arr[arr.length - 1];
};
exports.last = last;
const makeArr = (x, y, z) => {
    return [x, y, z];
};
exports.makeArr = makeArr;
const makeFullName = (obj) => {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName,
    };
};
exports.makeFullName = makeFullName;
const FullName = (0, exports.makeFullName)({ firstName: 'thuta', lastName: 'sann' });
