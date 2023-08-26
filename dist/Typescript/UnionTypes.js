"use strict";
function unionSum(a, b) {
    return parseInt(`${a}`, 10) + parseInt(`${b}`, 10);
}
const thuta = {
    age: 21,
    name: 'Thutasann',
    city: 'yangon',
    isMale: true,
};
function makeNoise(dogOrStudent) {
    switch (dogOrStudent.type) {
        case 'dot':
            dogOrStudent.bark();
            break;
        case 'student':
            dogOrStudent.study();
            break;
        default:
            break;
    }
}
// --------------
class StudentClass {
    age;
    name;
    study;
    type;
    constructor(age, name, study, type) {
        this.age = age;
        this.name = name;
        this.study = study;
        this.type = type;
    }
}
class DogClass {
    age;
    name;
    bark;
    type;
    constructor(age, name, bark, type) {
        this.age = age;
        this.name = name;
        this.bark = bark;
        this.type = type;
    }
}
function classMakeNoise(StudentOrDog) {
    switch (StudentOrDog.type) {
        case 'dog':
            StudentOrDog.bark();
            break;
        case 'student':
            StudentOrDog.study();
            break;
        default:
            break;
    }
}
