"use strict";
function removeFirstOrder(arr) {
    arr.shift();
    return arr;
}
removeFirstOrder([312, 313, 314, 315]);
removeFirstOrder(['maung', 'aung', 'kyaw']);
const meal = {
    size: 'large',
    price: 10
};
// -------------------
class Hamburger {
    size;
    price;
    constructor(size, price) {
        this.size = size;
        this.price = price;
    }
}
const hamburger = new Hamburger('large', 12);
const hamburgerNumber = new Hamburger(14, 12);
