/**
 * Factorial of n
 * @description
 * n = 5 => 5*4*3*2*1
 */
function Factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * Factorial(n - 1);
}

const factorialAnswer = Factorial(5);
console.log('factorialAnswer', factorialAnswer);
