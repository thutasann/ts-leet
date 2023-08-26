"use strict";
class Vehicle {
    price = 5000;
    color = 'blue';
    mileage = 0;
    drive() { }
    break() { }
}
class MotorBike {
    price = 1000;
    color = 'red';
    mileage = 0;
    length = 12;
    seat = 134;
    drive() { }
    break() { }
}
const myMotorBike = new MotorBike();
console.log(myMotorBike.color);
