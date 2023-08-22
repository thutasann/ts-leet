/**
 * Ordering Overloads
 */


// Wrong
declare function fn(x: unknown): unknown;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

var myElement = HTMLDivElement;
export var x = fn(myElement); // x: unkown, wat?

// Right
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;

let MyElem: HTMLDivElement;
// @ts-ignore
export var X = fn(MyElem); // x: string, 