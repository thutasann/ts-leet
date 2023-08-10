/**
 * Linear Time
 * Space Complexity O(14) <-- for message
 * Time Complexity O(n)
 */
export const logNums = (nums: Array<number>): void => {
  const message = 'LogNums Called';
  console.log(message);

  for (let i = 0; i < nums.length; i++) {
    console.log('Linear time -> ', nums[i]);
  }
};
