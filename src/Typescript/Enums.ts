const triplePrice = (price: number) => price * 3;

enum FruitPirce {
  applePrice = 6, // default value 0
  peachPrice = 5 * applePrice, // defeault value 1
  bananaPrice = triplePrice(2), // default value 2
}

export const fruitOne = FruitPirce.applePrice;
export const fruitTWo = FruitPirce.peachPrice;
export const fruitThree = FruitPirce.bananaPrice;
