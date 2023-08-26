"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMPLOYEE = void 0;
class Employee {
    name;
    salary;
    age;
    address;
    constructor(name, salary, age, address) {
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.address = address;
    }
    getSalary(tax) {
        return this.salary + tax;
    }
}
exports.EMPLOYEE = new Employee('Thuta', 3000, 21, "Yangon");
