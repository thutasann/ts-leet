"use strict";
// ---- Contact
const PERSON = { firstName: 'thuta', lastName: 'sann' };
const NUMS1 = [1, 2, 3];
const NUMS2 = [4, 5, 6, 7];
const concatedArr = NUMS1.concat(NUMS2);
console.log(concatedArr);
// ---- Slice
const SLICEARR = ['aple', 'banana', 'cheery'];
const slicedArr = SLICEARR.slice(0, 1);
console.log('slicedArr', slicedArr);
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log('animals', animals.slice(2, 4));
// ---- Splice
const SPLICEARR = ['aple', 'banana', 'cheery'];
SPLICEARR.splice(0, 1, 'orange');
console.log('splicedArr', SPLICEARR);
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
months.splice(4, 1, 'May');
console.log('months', months);
// ---- Fill and FindIndex
const FILLARR = [1, 2, 3, 4, 5];
const findIndex = FILLARR.findIndex((item) => item === 2);
console.log('findIndex', findIndex);
FILLARR.fill(0, 2);
console.log('FILLARR', FILLARR);
// ---- Flat and Reverse
const FLATARR = [
    1,
    [12, 23, 55],
    [35, 56],
    7,
    3,
    [[4, 5], 6],
];
const flatterendArr = FLATARR.flat(2);
console.log('flatterendArr', flatterendArr);
const reversedArr = FLATARR.reverse();
console.log('reversedArr', reversedArr);
// ---- Sort
const unsortedArr = [5, 2, 30, 45, 61, 34];
const sortedArr = unsortedArr.sort((a, b) => b - a);
console.log('sortedArr', sortedArr);
// ---- From
const str = '1234567';
const arrayFrom = Array.from(str, function (item) {
    return Number(item);
});
console.log('arrayFrom', arrayFrom);
const numArrsFrom = [1, 2, 3, 4, 5, 6, 7];
const resFrom = Array.from(new Set(numArrsFrom));
console.log('resFrom', resFrom);
