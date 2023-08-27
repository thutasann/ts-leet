/**
 * Remove Duplicates from Sorted Array
 * @description
 * Given an integer array nums sorted in non-decreasing order.
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elments should be kept the same.
 * Then return how many unique elements remained in this array in **number**
 * @description
 * **in-place** typically refers to modifying an object or array directly, without creating a new object or array.
 * @example
 * Input: [1,1,2]                => Output: 2, [1,2,_]
 * Input: [0,0,1,1,1,2,2,3,3,4]  => Output: 5, [0,1,2,3,4,_,_,_,_]
 */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  // should be nums.length - 1 because we are not supposed to go all the way to end of this loop
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      console.log('nums', nums);
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
}

const removeDuplicateAnswer = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log('removeDuplicateAnswer => ', removeDuplicateAnswer);
