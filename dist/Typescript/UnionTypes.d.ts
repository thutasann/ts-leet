interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}
interface Momemt {
    utcOffset(): number;
    utcOffset(b: number | string): Momemt;
}
type SumInput = (string | number)[];
declare function unionSum(a: SumInput, b: SumInput): number;
type Person = {
    age: number;
    name: string;
    [anyKey: string]: string | number | boolean;
};
declare const thuta: Person;
type Student = {
    age: number;
    name: string;
    study: () => void;
    type: 'student';
};
type Dog = {
    age: number;
    name: string;
    bark: () => void;
    type: 'dot';
};
declare function makeNoise(dogOrStudent: Dog | Student): void;
declare class StudentClass {
    age: number;
    name: string;
    study: () => void;
    type: 'student';
    constructor(age: number, name: string, study: () => void, type: 'student');
}
declare class DogClass {
    age: number;
    name: string;
    bark: () => void;
    type: 'dog';
    constructor(age: number, name: string, bark: () => void, type: 'dog');
}
declare function classMakeNoise(StudentOrDog: StudentClass | DogClass): void;
