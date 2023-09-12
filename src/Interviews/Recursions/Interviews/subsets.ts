/**
 * Subsets (Backtracking Algorithm using Recursion)
 * @description
 * Given an integer array nums of unique elements, return all possible subsets (the power set)
 * The solution set must not contain duplicate subsets. return the solution in any order
 * @example
 * Input: [1,2,3] =====> Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 * Input: [0]     =====> Output: [[], [0]]
 */
function subsets(nums: number[]) {
  let result: any[] = [];
  let temp: any[] = [];

  function recursiveSubset(nums: number[], i: number) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }

  recursiveSubset(nums, 0);
  return result;
}

console.log(subsets([1, 2, 3]));
