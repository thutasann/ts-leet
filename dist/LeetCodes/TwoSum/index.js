"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSum = void 0;
function TwoSum(nums, target) {
    let storage = {};
    for (let [index, num] of nums.entries()) {
        if (storage[num] !== undefined)
            return [storage[num], index];
        storage[target - num] = index;
    }
}
exports.TwoSum = TwoSum;
/**
 * @example
 * [2, 7, 11, 15];
 * index = 1
 * num = 7
 *
 * storage = {
 *  "7": 1
 * }
 */
