/**
 * Typescirpt Guards are actually part of
 * a bigger concept of Narrowing
 *
 * @description
 * Narrowing is the way of the typescript compiler
 * to narrow down specific blocks of code that you write
 * and infer types
 */

import { printIntrospectionSchema } from 'graphql';

//---------- 1. typeof guard
type alphanumeric = string | number;

function add(a: alphanumeric, b: alphanumeric) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}
add(3, 4);

//---------- 2. instanceof guard
class Banana {
  isTasty(): boolean {
    return true;
  }
}
class Apple {
  isJuicy(): boolean {
    return true;
  }
}
type Fruit = Banana | Apple;

function buyFruit(fruit: Fruit): number {
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
  isTasty(): boolean {
    return true;
  }
}

class FriedChicken {
  isGreat(): boolean {
    return true;
  }
}

type FastFood = Pizza | FriedChicken;

function buyFastFood(fastFood: FastFood): number {
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

function getValues(a: number | string, b: string) {
  if (a === b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
getValues('this is a', 'this is b');

//---------- 5. user-defined Guard

class IBanana {
  isTasty(): boolean {
    return true;
  }
}

class IApple {
  isJuicy(): boolean {
    return true;
  }
}

type IFruit = IBanana | IApple;

function isBanana(fruit: IFruit): fruit is IBanana {
  return fruit instanceof IBanana;
}

function buyFruitTwo(fruit: IFruit): number {
  let price = 0;

  if (isBanana(fruit)) {
    price = fruit.isTasty() ? 5 : 10;
  } else {
    price = fruit.isJuicy() ? 5 : 10;
  }

  return price;
}

const appleTwo = new Apple();
buyFruitTwo(appleTwo);
