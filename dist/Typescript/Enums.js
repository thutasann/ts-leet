"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fruitThree = exports.fruitTWo = exports.fruitOne = void 0;
const triplePrice = (price) => price * 3;
var FruitPirce;
(function (FruitPirce) {
    FruitPirce[FruitPirce["applePrice"] = 6] = "applePrice";
    FruitPirce[FruitPirce["peachPrice"] = 30] = "peachPrice";
    FruitPirce[FruitPirce["bananaPrice"] = triplePrice(2)] = "bananaPrice";
})(FruitPirce || (FruitPirce = {}));
exports.fruitOne = FruitPirce.applePrice;
exports.fruitTWo = FruitPirce.peachPrice;
exports.fruitThree = FruitPirce.bananaPrice;
