"use strict";
/**
 * Typescirpt Guards are actually part of
 * a bigger concept of Narrowing
 *
 * @description
 * Narrowing is the way of the typescript compiler
 * to narrow down specific blocks of code that you write
 * and infer types
 */
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
}
add(3, 4);
//---------- 2. instanceof guard
class Banana {
    isTasty() {
        return true;
    }
}
class Apple {
    isJuicy() {
        return true;
    }
}
function buyFruit(fruit) {
    let price = 0;
    if (fruit instanceof Apple) {
        price = fruit.isJuicy() ? 5 : 10;
    }
    return price;
}
const apple = new Apple();
buyFruit(apple);
//---------- 3. in guard
class Pizza {
    isTasty() {
        return true;
    }
}
class FriedChicken {
    isGreat() {
        return true;
    }
}
function buyFastFood(fastFood) {
    let price = 0;
    if ('isGreat' in fastFood) {
        price = fastFood.isGreat() ? 5 : 10;
    }
    if ('isGreat' in fastFood) {
        price = fastFood.isGreat() ? 5 : 10;
    }
    return price;
}
const pizza = new Pizza();
buyFastFood(pizza);
//---------- 4. Equality narrow
function getValues(a, b) {
    if (a === b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
getValues('this is a', 'this is b');
//---------- 5. user-defined Guard
class IBanana {
    isTasty() {
        return true;
    }
}
class IApple {
    isJuicy() {
        return true;
    }
}
function isBanana(fruit) {
    return fruit instanceof IBanana;
}
function buyFruitTwo(fruit) {
    let price = 0;
    if (isBanana(fruit)) {
        price = fruit.isTasty() ? 5 : 10;
    }
    else {
        price = fruit.isJuicy() ? 5 : 10;
    }
    return price;
}
const appleTwo = new Apple();
buyFruitTwo(appleTwo);
