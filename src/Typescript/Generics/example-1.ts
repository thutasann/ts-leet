function removeFirstOrder<T = string>(arr: Array<T>): Array<T> {
    arr.shift();
    return arr;
}

removeFirstOrder<number>([312, 313, 314, 315]);
removeFirstOrder<string>(['maung', 'aung', 'kyaw']);


// -------------------

interface Burger<T> {
    size: T
    price: number
}

const meal: Burger<string> = {
    size: 'large',
    price: 10
}

// -------------------

class Hamburger<T> {
    public size: T
    public price: number

    constructor(size: T, price: number){
        this.size = size;
        this.price = price
    }
}

const hamburger = new Hamburger<string>('large', 12)
const hamburgerNumber = new Hamburger<number>(14, 12)
