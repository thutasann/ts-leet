"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATES = exports.numArras = void 0;
exports.numArras = [1, 2, 3, 4, 5, 6, 7, 8];
// ---- Filter
const filteredArr = exports.numArras.filter((item, idx, arr) => {
    return item > 4;
});
console.log('filteredArr', filteredArr);
// ---- Reduce
const reducedArray = exports.numArras.reduce((acc, item) => {
    return acc + item;
}, 0);
console.log('reducedArray', reducedArray);
// ---- Remove Duplicate items from Array
const ageGroup = [18, 21, 1, 51, 18, 21, 5, 18, 7, 10];
const uniqueAgeGroup = ageGroup.reduce(function (accu, currentValue) {
    if (accu.indexOf(currentValue)) {
        accu.push(currentValue);
    }
    return accu;
}, []);
console.log('uniqueAgeGroup', uniqueAgeGroup);
const personArr = [
    {
        firstName: 'thuta',
    },
    {
        latName: 'sann',
    },
];
const ReducedPerson = personArr.reduce((acc, curr) => {
    return {
        ...acc,
        ...curr,
    };
}, {});
console.log('ReducedPerson', ReducedPerson);
// ---- Reduce Array Object
const ArrObj = [{ value: 32 }, { value: 12 }, { value: 4 }];
const sumArrayObj = ArrObj.reduce((acc, curr) => {
    return acc + curr.value;
}, 0);
console.log('sumArrayObj', sumArrayObj);
const Staffs = [
    {
        role: 'admin',
        value: 10,
    },
    {
        role: 'manager',
        value: 30,
    },
    {
        role: 'admin',
        value: 40,
    },
];
const FilterAndSUm = Staffs.filter((staf) => staf.role === 'admin').reduce(function (accu, curr) {
    return accu + curr.value;
}, 0);
console.log('FilterAndSUm', FilterAndSUm);
// ---- Reduce With Dates
exports.DATES = [
    '01/08/2022',
    '02/08/2022',
    '04/08/2022',
    '04/07/2022',
].map((val) => new Date(val));
const maxDate = exports.DATES.reduce((max, d) => {
    return d > max ? d : max;
}, exports.DATES[0]);
console.log('maxDate', maxDate);
