"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantTime_1 = require("./BigO/ConstantTime/ConstantTime");
const LinearTime_1 = require("./BigO/LinearTime/LinearTime");
const QuadraticTime_1 = require("./BigO/QuadraticTime/QuadraticTime");
const TwoSum_1 = require("./LeetCodes/TwoSum");
// Big O Notation
console.log('Constant Time -> ', (0, ConstantTime_1.toFahreneit)(12));
(0, LinearTime_1.logNums)([1, 2, 3, 4, 5, 6, 7]);
(0, QuadraticTime_1.logPairs)([1, 2, 3]);
// Leet codes
console.log('Twosum', (0, TwoSum_1.TwoSum)([2, 7, 11, 15], 18));
