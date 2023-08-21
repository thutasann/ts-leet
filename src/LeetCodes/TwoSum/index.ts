/**
 * TwSum
 * @param { number[] } nums - Numbers of Array 
 * @param { number } target - Target number
 * @returns 
 */
export function TwoSum(nums: number[], target: number) {
  let storage: Record<string, number> = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];

    storage[target - num] = index;
  }
}

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
