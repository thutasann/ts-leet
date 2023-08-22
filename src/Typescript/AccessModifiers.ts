class Employee {
    protected name: string
    private salary: number;
    private age: number;
    public readonly address: string;

    constructor(name: string, salary: number, age: number, address: string){
        this.name = name;
        this.salary = salary;
        this.age = age;
        this.address = address;
    }

    public getSalary(tax: number){
        return this.salary + tax;
    }
}

export const EMPLOYEE = new Employee('Thuta', 3000, 21, "Yangon");