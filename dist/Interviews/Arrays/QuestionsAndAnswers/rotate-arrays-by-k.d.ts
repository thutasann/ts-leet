/**
 * Rotate Array by K
 * @question
 * Given an integer array nums, rotate the array to the right by `k` steps. where k is non - negative.
 * @example
 * Input: nums = [1,2,3,4,5,6,7], k = 3 ==> Output: [5,6,7,1,2,3,4]
 * Input: nums = [-1, -100, 3, 99], k = 2 => Output: [3, 99, -1, -100]
 * @description
 * [ 1, 2, 3, 4, 5, 6, 7] => [7, 1, 2, 3, 4, 5, 6] => [6, 7, 1, 2, 3, 4, 5] => [5, 6, 7, 1, 2, 3, 4 ]
 */
declare function rotateArray(nums: number[], k: number): number[];
declare const rotateAnswer: number[];
