"use strict";
/**
 * Go To Dinner with 5 Person
 */
function goToDinner(person) {
    if (person === 5)
        return true;
    console.log('person', person);
    return goToDinner(person + 1);
}
console.log('goToDinner', goToDinner(1));
/**
 * Multiply nums
 * @description
 * 4 * mulitply([1,2,3]) => 4 * 3
 * 4 * 3 * mulitply([1,2]) => 4 * 3 * 2
 * 4 * 3 * 2 * mulitply([1]) => 4 * 3 * 2 * 1
 */
function multiply(arr) {
    console.log('arr', arr);
    if (arr.length <= 0) {
        return 1;
    }
    else
        return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}
console.log('multiply()', multiply([1, 2, 3, 4]));
