/**
 * Reverse Integer
 * @param {number} x - 32-bit signed Integer
 * @returns {number} reversed integer
 */
export function ReverseInteger(x: number): number {
  if (x < 0) return -1 * ReverseInteger(-x);

  const solution = parseInt((x + '').split('').reverse().join(''));

  console.log('solution', solution);

  return solution > 2 ** 31 - 1 ? 0 : solution;
}

/**
 * "123"
 * [1,2,3]
 * [3,2,1]
 * 321
 */
