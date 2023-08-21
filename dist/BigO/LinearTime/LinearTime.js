"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logNums = void 0;
/**
 * Linear Time
 * Space Complexity O(14) <-- for message
 * Time Complexity O(n)
 */
const logNums = (nums) => {
    const message = 'LogNums Called';
    console.log(message);
    for (let i = 0; i < nums.length; i++) {
        console.log('Linear time -> ', nums[i]);
    }
};
exports.logNums = logNums;
