declare class Employee {
    protected name: string;
    private salary;
    private age;
    readonly address: string;
    constructor(name: string, salary: number, age: number, address: string);
    getSalary(tax: number): number;
}
export declare const EMPLOYEE: Employee;
export {};
