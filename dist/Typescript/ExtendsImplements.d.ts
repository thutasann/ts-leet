declare class Vehicle {
    price: number;
    color: string;
    mileage: number;
    drive(): void;
    break(): void;
}
interface Design {
    length: number;
    seat: number;
}
declare class MotorBike implements Vehicle, Design {
    price: number;
    color: string;
    mileage: number;
    length: number;
    seat: number;
    drive(): void;
    break(): void;
}
declare const myMotorBike: MotorBike;
