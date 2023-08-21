"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toFahreneit = void 0;
/**
 * Constant Time
 * Space Complexity O(1)
 * Time Complexity 0(1)
 * We have to look up the degree Celsius in memory
 */
const toFahreneit = (degreesCelsius) => {
    return 1.8 * degreesCelsius + 32;
};
exports.toFahreneit = toFahreneit;
