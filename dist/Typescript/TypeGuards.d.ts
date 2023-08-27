/**
 * Typescirpt Guards are actually part of
 * a bigger concept of Narrowing
 *
 * @description
 * Narrowing is the way of the typescript compiler
 * to narrow down specific blocks of code that you write
 * and infer types
 */
type alphanumeric = string | number;
declare function add(a: alphanumeric, b: alphanumeric): number | undefined;
declare class Banana {
    isTasty(): boolean;
}
declare class Apple {
    isJuicy(): boolean;
}
type Fruit = Banana | Apple;
declare function buyFruit(fruit: Fruit): number;
declare const apple: Apple;
declare class Pizza {
    isTasty(): boolean;
}
declare class FriedChicken {
    isGreat(): boolean;
}
type FastFood = Pizza | FriedChicken;
declare function buyFastFood(fastFood: FastFood): number;
declare const pizza: Pizza;
declare function getValues(a: number | string, b: string): void;
declare class IBanana {
    isTasty(): boolean;
}
declare class IApple {
    isJuicy(): boolean;
}
type IFruit = IBanana | IApple;
declare function isBanana(fruit: IFruit): fruit is IBanana;
declare function buyFruitTwo(fruit: IFruit): number;
declare const appleTwo: Apple;
