declare function removeFirstOrder<T = string>(arr: Array<T>): Array<T>;
interface Burger<T> {
    size: T;
    price: number;
}
declare const meal: Burger<string>;
declare class Hamburger<T> {
    size: T;
    price: number;
    constructor(size: T, price: number);
}
declare const hamburger: Hamburger<string>;
declare const hamburgerNumber: Hamburger<number>;
