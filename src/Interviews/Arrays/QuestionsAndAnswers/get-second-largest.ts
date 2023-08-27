/**
 * @question
 * Get Second Largest Number from Num arr
 * @description
 * Given an array Arr of size N, print second largest
 * distinct element from array.
 * @example
 * Input : [12, 35, 1, 10, 34, 1] =>> Output 34
 * Input : [10, 5, 10] =>> Output 5
 */
function getSecondLargest(arr: number[]): number {
  const uniqueArr: number[] = Array.from(new Set(arr));

  uniqueArr.sort((a, b) => {
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return uniqueArr[-1];
  }
}

const answer = getSecondLargest([10, 5, 10]);
console.log('answer', answer);

/**
 * Second Solution for the above
 * @description
 * This is the More Optimized solution.
 */
function getSecondLargestTwo(arr: number[]): number {
  let largest: number = Number.NEGATIVE_INFINITY;
  let secondLargeset: number = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargeset = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargeset) {
      secondLargeset = arr[i];
    }
  }

  return secondLargeset;
}

const answerTwo = getSecondLargestTwo([12, 35, 1, 10, 34, 1]);
console.log('answerTwo', answerTwo);
