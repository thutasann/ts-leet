"use strict";
// ---- Array Basics
const person = {
    firstName: 'thuta',
    lastName: 'sann',
};
let arr = ['a', 'b', 'c', 'd', person];
arr.push('orange'); // add to end of the array
arr.pop(); // remove from end of the array
arr.unshift('orange'); // Add to top of the Array
arr.shift(); // remove the first element of the array
console.log('arr', arr);
console.log('indedof', arr.indexOf('b', 2));
// ---- Looping an Array
const newArr = ['A', 'B', 'C', 'D', 'E'];
for (let i = 0; i < newArr.length; i++) {
    console.log('newArr[i] for => ', newArr[i]);
}
let i = 0;
while (i < newArr.length) {
    console.log('newArr[i] while => ', newArr[i]);
    i++;
}
// ---- Some in Array
const NUMSArr = [18, 21, 1, 51, 18, 21, 5, 18, 7, 10];
const SomeArray = NUMSArr.some((item, index, arr) => {
    return item === 3;
});
console.log('SomeArray', SomeArray);
// ---- Every in Array
const EveryArray = NUMSArr.every((item, index, arr) => {
    return item < 60;
});
console.log('EveryArray', EveryArray);
// ---- Find in Array
const FindArry = NUMSArr.find((val) => {
    return val > 50;
});
console.log('FindArray', FindArry);
// ---- Spread and Rest opeartors
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6, 7];
const finalNums = [...nums1, ...nums2];
console.log('finalNums', finalNums);
function sum(...numbers) {
    return numbers;
}
console.log(sum(...nums1, ...nums2, 5));
