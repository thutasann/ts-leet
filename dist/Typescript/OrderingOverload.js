"use strict";
/**
 * Ordering Overloads
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.X = exports.x = void 0;
var myElement = HTMLDivElement;
exports.x = fn(myElement); // x: unkown, wat?
let MyElem;
// @ts-ignore
exports.X = fn(MyElem); // x: string, 
