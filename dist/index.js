"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConstantTime_1 = require("./BigO/ConstantTime/ConstantTime");
const LinearTime_1 = require("./BigO/LinearTime/LinearTime");
// Big O Notation
console.log('Constant Time -> ', (0, ConstantTime_1.toFahreneit)(12));
console.log('Linear Time -> ', (0, LinearTime_1.logNums)([1, 2, 3]));
