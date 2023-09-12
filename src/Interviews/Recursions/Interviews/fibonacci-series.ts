/**
 * Fibonacci Number
 * @description
 * fibonacci Series => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
 * => 0 + 1 = 1 => 1 + 1 => 2
 * F(0) = 0, F(1) = 1
 * F(n) = F(n -1) + F(n - 2), for n > 1
 * @answer
 * Input: n = 3 => Output: 2
 */
function withoutRecurrsion(n: number): number {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
const fibWithoutRecursion = withoutRecurrsion(3);
console.log('fibWithoutRecursion =>', fibWithoutRecursion);

function withRecurrsion(n: number): number {
  if (n <= 1) return n;
  return withRecurrsion(n - 1) + withRecurrsion(n - 2);
}

const fibWithRecursion = withoutRecurrsion(3);
console.log('fibWithRecursion =>', fibWithRecursion);
