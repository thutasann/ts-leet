"use strict";
/**
 * Create an array with the range of numbers
 * @description
 * Input: start = 1, end = 5 ==> Output:
 * @output
 * rangeOfNumbers(1, 5), [1,2,3,4,5]
 * rangeOfNumbers(1, 4), [1,2,3,4]
 * rangeOfNumbers(1, 3), [1,2,3]
 * rangeOfNumbers(1, 2) => [1,2]
 * rangeOfNumbers(1, 1) => [1]
 * rangeOfNumbers(1, 0)
 */
function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    }
    else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        console.log('numbers', numbers);
        numbers.push(endNum);
        return numbers;
    }
}
const rangeOfNumberAnswer = rangeOfNumbers(1, 5);
console.log('rangeOfNumberAnswer', rangeOfNumberAnswer);
