"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseInteger = void 0;
/**
 * Reverse Integer
 * @param {number} x - 32-bit signed Integer
 * @returns {number} reversed integer
 */
function ReverseInteger(x) {
    if (x < 0)
        return -1 * ReverseInteger(-x);
    const solution = parseInt((x + '').split('').reverse().join(''));
    console.log('solution', solution);
    return solution > 2 ** 31 - 1 ? 0 : solution;
}
exports.ReverseInteger = ReverseInteger;
/**
 * "123"
 * [1,2,3]
 * [3,2,1]
 * 321
 */
