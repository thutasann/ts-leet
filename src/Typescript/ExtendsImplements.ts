class Vehicle {
  price = 5000;
  color = 'blue';
  mileage = 0;

  drive() {}

  break() {}
}

interface Design {
  length: number;
  seat: number;
}

class MotorBike implements Vehicle, Design {
  price = 1000;
  color = 'red';
  mileage = 0;
  length = 12;
  seat = 134;

  drive(): void {}

  break(): void {}
}

const myMotorBike = new MotorBike();
console.log(myMotorBike.color);
