"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPairs = void 0;
/**
 * Quadratic Time (logPairs)
 * Space 0(1)
 * Time 0(n^2)
 * [1,2,3] => 1,1, 1,2, 1,3,  2,1, 2,2, 2,3,  3,1,3,2
 */
const logPairs = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            console.log(i, j);
        }
    }
};
exports.logPairs = logPairs;
