"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ReverseInteger_1 = require("./LeetCodes/ReverseInteger");
const ConstantTime_1 = require("./BigO/ConstantTime/ConstantTime");
const LinearTime_1 = require("./BigO/LinearTime/LinearTime");
const QuadraticTime_1 = require("./BigO/QuadraticTime/QuadraticTime");
const NumberOfIslands_1 = require("./LeetCodes/NumberOfIslands");
const TwoSum_1 = require("./LeetCodes/TwoSum");
const AccessModifiers_1 = require("./Typescript/AccessModifiers");
const Enums_1 = require("./Typescript/Enums");
const MasterGenerics_1 = require("./Typescript/Generics/MasterGenerics");
// Big O Notation
console.log('Constant Time -> ', (0, ConstantTime_1.toFahreneit)(12));
(0, LinearTime_1.logNums)([1, 2, 3, 4, 5, 6, 7]);
(0, QuadraticTime_1.logPairs)([1, 2, 3]);
// Leet codes
console.log('Twosum', (0, TwoSum_1.TwoSum)([2, 7, 11, 15], 18));
console.log('Number of Islands', (0, NumberOfIslands_1.numsIslands)([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
]));
console.log('ReverseInteger', (0, ReverseInteger_1.ReverseInteger)(123));
// Typescripts
console.log('Access modifier', AccessModifiers_1.EMPLOYEE.getSalary(12));
console.log('Enum', Enums_1.fruitThree);
console.log('Constraints in Function => ', MasterGenerics_1.getKeyWithHighestValueResult.key);
console.log('Constraints in Function => ', MasterGenerics_1.getKeyWithHighestValueResult.value);
console.log('getValueResult', MasterGenerics_1.getValueResult);
